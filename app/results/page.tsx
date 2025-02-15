"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useUser } from "@/hooks/mainPageHooks";
import React from "react";

const Results: React.FC = () => {
  const { user, subjects, loading, totalMarks, maxMarks } = useUser();
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-emerald-500 text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center md:w-full mb-6 mt-4">
        <h1 className="text-4xl font-bold mb-8">Results Page</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 text-black md:w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {user.name}'s Marks
          </h2>
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="py-2 px-4 border border-gray-300">Subject</th>
                <th className="py-2 px-4 border border-gray-300">
                  Maximum Marks
                </th>
                <th className="py-2 px-4 border border-gray-300">
                  Obtained Marks
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map(
                (subject, index) =>
                  user.marks[subject].status === 1 && (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                      }`}
                    >
                      <td className="py-2 px-4 border border-gray-300">
                        {subject.replace(
                          /^([^-]*)-.*/,
                          (_, firstPart) =>
                            firstPart.charAt(0).toUpperCase() +
                            firstPart.slice(1)
                        )}
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {user.marks[subject].maxMarks}
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {user.marks[subject].marks}
                      </td>
                    </tr>
                  )
              )}
              <tr>
                <td className="py-2 px-4 border border-gray-300 bg-gray-400">
                  <b>Total</b>
                </td>
                <td className="py-2 px-4 border border-gray-300 bg-gray-400">
                  <b>{maxMarks}</b>
                </td>
                <td className="py-2 px-4 border border-gray-300 bg-gray-400">
                  <b>{totalMarks}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;
