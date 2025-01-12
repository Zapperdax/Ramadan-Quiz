"use client";

import { useRouter } from "next/navigation";
import ExamCard from "@/components/ExamCards";
import { ExamNames } from "@/questions/ExamNames";
import { handleExamPage } from "@/services/mainPageService";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useUser } from "@/hooks/mainPageHooks";

export default function Home() {
  const { user, session, loading } = useUser();
  const router = useRouter();
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="w-full shadow-lg rounded-lg p-6 sm:p-8 bg-emerald-50">
        <h1 className="font-bold text-center text-emerald-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Welcome to 2025 Ramadan Exams!
        </h1>
        <div className="mt-6 text-center">
          {session ? (
            <>
              <p className="text-green-400 text-lg sm:text-xl font-bold">
                Hello,{" "}
                <span className="text-emerald-600">{session.user?.name}</span>!
              </p>
              <p className="text-gray-600 text-base sm:text-lg mt-2">
                Ready to take the quiz?
              </p>
              <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {ExamNames.map((exam) => (
                  <ExamCard
                    key={exam.label}
                    user={user}
                    label={exam.label}
                    description={exam.description}
                    startDate={exam.startDate}
                    endDate={exam.endDate}
                    onClick={() => handleExamPage(router, exam.label)}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="text-emerald-600 text-lg sm:text-xl font-semibold">
              Please log in to take the quiz.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
