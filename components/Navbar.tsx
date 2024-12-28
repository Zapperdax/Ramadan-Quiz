"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-lg">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-3xl font-bold">
          Quiz App
        </Link>
      </div>

      <div className="flex items-center space-x-8">
        {session ? (
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="User Avatar"
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              />
              <span className="text-xl">{session.user?.name}</span>
            </div>
            <Button
              label="Logout"
              onClick={() => signOut()}
              className=" py-2 px-4 bg-blue-600 text-white hover:bg-blue-500 transition duration-200"
            />
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
