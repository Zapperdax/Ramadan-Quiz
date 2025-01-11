import { signIn } from "next-auth/react";

export const handleSignIn = () => {
  signIn("google", {
    callbackUrl: "/", // Redirect to home after login
  });
};
