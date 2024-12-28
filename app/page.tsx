"use client";  // Ensure this is at the top

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");  // Redirect to login page if not logged in
    }
  }, [session, router]);

  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Welcome to the Quiz App!
        </h1>
        {session ? (
          <p className="text-lg text-black">
            Hello, {session.user?.name}! Ready to take the quiz?
          </p>
        ) : (
          <p className="text-lg text-black">
            Please log in to take the quiz.
          </p>
        )}
      </main>
    </div>
  );
}
