import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export const useAllUsers = () => {
  const { data: session } = useSession();
  const [allUsers, setAllUsers] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllUsers = async () => {
      if (!session) return;

      try {
        const response = await fetch("/api/user", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch all users");
        }

        const allUsersData = await response.json();
        setAllUsers(allUsersData); // Set the allUsers state
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching all users:", error);
      }
    };

    fetchAllUsers();
  }, [session]);
  return { allUsers, loading };
};
