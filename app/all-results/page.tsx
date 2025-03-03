"use client";
import React from "react";
import { useAllUsers } from "@/hooks/fetchAllUsersHook";
import LoadingSpinner from "@/components/LoadingSpinner";
import { resultTime } from "@/questions/ExamNames";
import { epochToDate } from "@/services/examCardsService";

const AllResults: React.FC = () => {
  const { allUsers, loading } = useAllUsers();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-emerald-500 text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center md:w-full mb-6 mt-4">
        {Date.now() / 1000 > resultTime ? (
          <>
            <h1 className="text-4xl font-bold mb-8">Result of All Students</h1>
            <div className="bg-white rounded-lg shadow-lg p-6 text-black md:w-full max-w-6xl">
              <table className="w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-green-500 text-white">
                    <th className="py-2 px-4 border border-gray-300">
                      Student Name
                    </th>
                    <th className="py-2 px-4 border border-gray-300">
                      Subjects
                    </th>
                    <th className="py-2 px-4 border border-gray-300">
                      Total Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user: any, userIndex: number) => (
                    <React.Fragment key={userIndex}>
                      <tr className="bg-gray-100">
                        <td className="py-2 px-4 border border-gray-300 font-bold">
                          {user.name}
                        </td>
                        <td className="py-2 px-4 border border-gray-300">
                          {Object.keys(user.marks)
                            .filter(
                              (subject) => user.marks[subject].status === 1
                            )
                            .map((subject, index) => (
                              <div key={index}>
                                {subject.replace(
                                  /^([^-]*)-.*/,
                                  (_, firstPart) =>
                                    firstPart.charAt(0).toUpperCase() +
                                    firstPart.slice(1)
                                )}
                                : {user.marks[subject].marks}/
                                {user.marks[subject].maxMarks}
                              </div>
                            ))}
                        </td>
                        <td className="py-2 px-4 border border-gray-300 font-bold">
                          {Object.keys(user.marks).reduce((total, subject) => {
                            if (user.marks[subject].status === 1) {
                              return total + user.marks[subject].marks;
                            }
                            return total;
                          }, 0)}
                          /
                          {Object.keys(user.marks).reduce((total, subject) => {
                            if (user.marks[subject].status === 1) {
                              return total + user.marks[subject].maxMarks;
                            }
                            return total;
                          }, 0)}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <h1 className="text-4xl font-bold mb-8">
            Final Result will be announced on {epochToDate(resultTime)}
          </h1>
        )}
      </div>
    </div>
  );
};

export default AllResults;
