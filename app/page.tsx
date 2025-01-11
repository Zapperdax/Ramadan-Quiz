"use client"; // Ensure this is at the top

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ExamCard from "@/components/ExamCards";

export default function Home() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [nameOfExam, setNameOfExam] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login"); // Redirect to login page if not logged in
    }
  }, [session, router]);

  useEffect(() => {
    if (!userId) return;

    // Fetch the user data from the API
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/user/${userId}`, {
          method: "POST", // We're using POST instead of GET
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }), // Send userId in the request body
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
    
        const userData = await response.json();
        setUser(userData); 
        setLoading(false); 
      } catch (error: any) {
        console.error("Error fetching user:", error);
        setLoading(false); 
      }
    };

    if(session) {
      fetchUser();
    }
  }, [userId, session]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-20 bg-white">
        <div className="animate-spin w-12 h-12 text-gray-600 border-4 border-gray-400"></div>
      </div>
    );
  }
  const ExamNames = [
    {
      label: "English Mastery Exam",
      description: "Challenge your language skills and uncover your mastery of English communication.",
      startDate: 1736604712,
      endDate: 1736618712
    },
    {
      label: "Mathematics Genius Test",
      description: "Prove your prowess in solving problems and navigating the world of numbers.",
      startDate: 1736017200,
      endDate:1736017200
    },
    {
      label: "Science Explorer Quiz",
      description: "Dive into the wonders of science and showcase your curiosity about the natural world.",
      startDate: 1736017200,
      endDate:1736017200
    },
    {
      label: "History Legends Challenge",
      description: "Travel through time and reveal your knowledge of historical events and figures.",
      startDate: 1736017200,
      endDate: 1736017200
    },
    {
      label: "Geography Adventurer Test",
      description: "Embark on a global journey and display your understanding of Earth's landscapes and cultures.",
      startDate: 1736017200,
      endDate: 1736017200
    },
    {
      label: "Urdu Proficiency Assessment",
      description: "Celebrate the beauty of Urdu and demonstrate your fluency and expertise.",
      startDate: 1736017200,
      endDate:1736017200
    },
    {
      label: "Computer Science Innovators Exam",
      description: "Unleash your coding skills and tech knowledge to conquer the digital frontier.",
      startDate: 1736017200,
      endDate: 1736017200
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
                  <ExamCard key={exam.label} user={user} label={exam.label} description={exam.description} startDate={exam.startDate} endDate={exam.endDate} onClick={() => handleExamPage(exam.label)} />
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
