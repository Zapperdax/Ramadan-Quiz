"use client";
import React from "react";
import { useAllUsers } from "@/hooks/fetchAllUsersHook";
import LoadingSpinner from "@/components/LoadingSpinner";
import { resultTime } from "@/questions/ExamNames";
import { epochToDate } from "@/services/examCardsService";
import { riggedResults } from "@/hooks/riggedResult";

const AllResults: React.FC = () => {
  const { allUsers, loading, calculatePostfix } = useAllUsers();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-emerald-500 text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center md:w-full mb-6 mt-4 mx-4">
        {Date.now() / 1000 > resultTime ? (
          <>
            <h1 className="text-4xl font-bold mb-8 mt-4">
              Result of All Students
            </h1>
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
                    <th className="py-2 px-4 border border-gray-300">
                      Position
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    let prevMarks: null = null; // Store previous user's total marks
                    let actualRank = 0; // Correct rank to be displayed
                    let tieOffset = 0; // Tracks ties to prevent rank gaps

                    return [...allUsers]
                      .map((user) => ({
                        ...user,
                        totalMarks: Object.keys(user.marks).reduce(
                          (total, subject) =>
                            total +
                            (user.marks[subject].status === 1
                              ? user.marks[subject].marks
                              : 0),
                          0
                        ),
                      }))
                      .sort((a, b) => b.totalMarks - a.totalMarks) // Sort users by total marks in descending order
                      .map((user, index) => {
                        // If current marks are different from previous, update rank
                        if (user.totalMarks !== prevMarks) {
                          actualRank = index + 1 - tieOffset; // Assign correct rank
                        } else {
                          tieOffset++; // Increase tie offset if marks are the same
                        }

                        prevMarks = user.totalMarks; // Store current marks for next iteration

                        return (
                          <React.Fragment key={index}>
                            <tr className="bg-gray-100">
                              <td className="py-2 px-4 border border-gray-300 font-bold">
                                {user.name}
                              </td>
                              <td className="py-2 px-4 border border-gray-300">
                                {Object.keys(user.marks)
                                  .filter(
                                    (subject) =>
                                      user.marks[subject].status === 1
                                  )
                                  .map((subject, i) => (
                                    <div key={i}>
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
                                {user.totalMarks} /
                                {Object.keys(user.marks).reduce(
                                  (total, subject) =>
                                    total +
                                    (user.marks[subject].status === 1
                                      ? user.marks[subject].maxMarks
                                      : 0),
                                  0
                                )}
                              </td>
                              <td className="py-2 px-4 border border-gray-300 font-bold">
                                {actualRank}
                                {calculatePostfix(actualRank)}
                              </td>
                            </tr>
                          </React.Fragment>
                        );
                      });
                  })()}
                </tbody>
              </table>
            </div>

            <h1 className="text-4xl font-bold mb-8 mt-8">Form 47 Results</h1>
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
                    <th className="py-2 px-4 border border-gray-300">
                      Position
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    let prevMarks: number = 0; // Store previous user's total marks
                    let actualRank = 0; // Correct rank to be displayed
                    let tieOffset = 0; // Tracks ties to prevent rank gaps

                    return [...riggedResults]
                      .map((user) => ({
                        ...user,
                        totalMarks: Object.keys(user.marks).reduce(
                          (total, subject) =>
                            total +
                            (user.marks[subject].status === 1
                              ? user.marks[subject].marks
                              : 0),
                          0
                        ),
                      }))
                      .sort((a, b) => b.totalMarks - a.totalMarks) // Sort users by total marks in descending order
                      .map((user, index) => {
                        // If current marks are different from previous, update rank
                        if (user.totalMarks !== prevMarks) {
                          actualRank = index + 1 - tieOffset; // Assign correct rank
                        } else {
                          tieOffset++; // Increase tie offset if marks are the same
                        }

                        prevMarks = user.totalMarks; // Store current marks for next iteration

                        return (
                          <React.Fragment key={index}>
                            <tr className="bg-gray-100">
                              <td className="py-2 px-4 border border-gray-300 font-bold">
                                {user.name}
                              </td>
                              <td className="py-2 px-4 border border-gray-300">
                                {Object.keys(user.marks)
                                  .filter(
                                    (subject) =>
                                      user.marks[subject].status === 1
                                  )
                                  .map((subject, i) => (
                                    <div key={i}>
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
                                {user.totalMarks} /
                                {Object.keys(user.marks).reduce(
                                  (total, subject) =>
                                    total +
                                    (user.marks[subject].status === 1
                                      ? user.marks[subject].maxMarks
                                      : 0),
                                  0
                                )}
                              </td>
                              <td className="py-2 px-4 border border-gray-300 font-bold">
                                {actualRank === 1
                                  ? `${actualRank}${calculatePostfix(
                                      actualRank
                                    )}`
                                  : "FAIL"}
                              </td>
                            </tr>
                          </React.Fragment>
                        );
                      });
                  })()}
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
