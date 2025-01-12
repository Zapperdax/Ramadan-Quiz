"use client";

import Button from "@/components/Button";
import { useLogin } from "@/hooks/loginPageHooks";
import { handleSignIn } from "@/services/loginPageService";

export default function SignIn() {
  useLogin();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-green-500">
      <div className="flex flex-col items-center justify-center w-full p-8 space-y-8">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold text-white text-center">
          Welcome to the Quiz App!
        </h1>
        <p className="text-xl text-white text-center">
          Please sign in to start the quiz. It only takes a moment!
        </p>

        {/* Sign-in Button */}
        <Button
          onClick={handleSignIn}
          label="Sign In with Google"
          className="bg-emerald-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition duration-200 ease-in-out"
        />
      </div>
    </div>
  );
}
