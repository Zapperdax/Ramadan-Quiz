"use client"; // Ensure this is at the top

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ExamCard from "@/components/ExamCards";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login"); // Redirect to login page if not logged in
    }
  }, [session, router]);

  const ExamNames = [
    {
      label: "English Mastery Exam",
      description: "Challenge your language skills and uncover your mastery of English communication.",
    },
    {
      label: "Mathematics Genius Test",
      description: "Prove your prowess in solving problems and navigating the world of numbers.",
    },
    {
      label: "Science Explorer Quiz",
      description: "Dive into the wonders of science and showcase your curiosity about the natural world.",
    },
    {
      label: "History Legends Challenge",
      description: "Travel through time and reveal your knowledge of historical events and figures.",
    },
    {
      label: "Geography Adventurer Test",
      description: "Embark on a global journey and display your understanding of Earth's landscapes and cultures.",
    },
    {
      label: "Urdu Proficiency Assessment",
      description: "Celebrate the beauty of Urdu and demonstrate your fluency and expertise.",
    },
    {
      label: "Computer Science Innovators Exam",
      description: "Unleash your coding skills and tech knowledge to conquer the digital frontier.",
    },
  ];
  
  const handleExamPage = (examname: string) => {
    router.push(`/exam/${examname.replace(/\s+/g, "-").toLowerCase()}`);
  };

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
                  <ExamCard key={exam.label} label={exam.label} description={exam.description} onClick={() => handleExamPage(exam.label)} />
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
