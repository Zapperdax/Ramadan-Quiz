"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Function to toggle the dropdown menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleResults = () => {
    toggleMenu();
    router.push("/results");
  };
  const handleAllResults = () => {
    toggleMenu();
    router.push("/all-results");
  };

  return (
    <nav className="bg-gradient-to-r from-green-400 to-emerald-600 text-white shadow-lg">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-base sm:text-2xl md:text-3xl font-bold">
          Ramadan Family Exams
        </Link>

        {/* Hamburger Menu Icon for smaller screens */}
        <button
          onClick={toggleMenu} // Toggle dropdown on click
          className="block md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7" // Hamburger icon design
            />
          </svg>
        </button>

        {/* Links for larger screens */}
        <div className="hidden md:flex items-center space-x-8">
          {session ? (
            <div className="flex items-center space-x-1">
              <div className="flex items-center space-x-3">
                <img
                  src={session.user?.image || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                />
                <span className="hidden md:block text-base">
                  {session.user?.name}
                </span>
              </div>
              {pathname === "/results" ? (
                <Button
                  label="Show All Results"
                  onClick={handleAllResults}
                  className="py-2 px-4 text-white hover:bg-green-400 transition duration-200 rounded-lg"
                />
              ) : (
                <Button
                  label="Results"
                  onClick={handleResults}
                  className="py-2 px-4 text-white hover:bg-green-400 transition duration-200 rounded-lg"
                />
              )}
              <Button
                label="Logout"
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="py-2 px-4 text-white hover:bg-green-400 transition duration-200 rounded-lg"
              />
            </div>
          ) : null}
        </div>
      </div>

      {/* Dropdown Menu for smaller screens */}
      <div
        className={`md:hidden bg-emerald-500 text-white shadow-md transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-3 p-4">
          {session ? (
            <>
              {/* User avatar and name */}
              <li className="flex items-center space-x-3">
                <img
                  src={session.user?.image || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <span>{session.user?.name}</span>
              </li>

              {pathname === "/results" ? (
                <li>
                  <Button
                    label="Show All Results"
                    onClick={handleAllResults}
                    className="w-full py-2 px-4 text-white bg-green-400 hover:bg-green-600 transition duration-200 rounded-lg"
                  />
                </li>
              ) : (
                <li>
                  <Button
                    label="Results"
                    onClick={handleResults}
                    className="w-full py-2 px-4 text-white bg-green-400 hover:bg-green-600 transition duration-200 rounded-lg"
                  />
                </li>
              )}

              {/* Logout button */}
              <li>
                <Button
                  label="Logout"
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="w-full py-2 px-4 text-white bg-green-600 hover:bg-green-400 transition duration-200 rounded-lg"
                />
              </li>
            </>
          ) : (
            <li>No user logged in</li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
