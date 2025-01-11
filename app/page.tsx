"use client";

import { useRouter } from "next/navigation";
import ExamCard from "@/components/ExamCards";
import { ExamNames } from "@/questions/ExamNames";
import { handleExamPage } from "@/services/mainPageService";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useUser } from "@/hooks/mainPageHooks";

export default function Home() {
  const {user, session, loading} = useUser();
  const router = useRouter();
  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4">
      <main className="w-full p-6 bg-white rounded-lg shadow-md m-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 sm:text-3xl">
          Welcome to Ramadan Exams!
        </h1>
        <div className="mt-4 text-center">
          {session ? (
            <>
              <p className="text-gray-700 text-base sm:text-lg">
                Hello,{" "}
                <span className="font-semibold">{session.user?.name}</span>!
              </p>
              <p className="text-gray-700 text-base sm:text-lg mt-2">
                Ready to take the quiz?
              </p>
              {ExamNames.map((exam) => {
                return (
                  <ExamCard key={exam.label} user={user} label={exam.label} description={exam.description} startDate={exam.startDate} endDate={exam.endDate} onClick={() => handleExamPage(router, exam.label)} />
                );
              })}
            </>
          ) : (
            <p className="text-gray-700 text-base sm:text-lg">
              Please log in to take the quiz.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
