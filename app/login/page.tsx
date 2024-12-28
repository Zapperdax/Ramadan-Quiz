// app/auth/signin/page.tsx

"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // useRouter hook
import Button from "@/components/Button";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: "/", // Redirect to home after login
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome to the Quiz App!
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please sign in to start the quiz.
        </p>
        <Button
          onClick={handleSignIn}
          label="Sign In with Google"
        />
      </div>
    </div>
  );
}
