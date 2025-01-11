import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const useUser = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login"); // Redirect to login page if not logged in
    }
  }, [session, router]);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      if (!session) return;

      // Fetch the user data from the API
      try {
        const response = await fetch(`/api/user/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const userData = await response.json();
        setUser(userData);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchUser();
    }
  }, [session]);
  return {user, session, loading}
};
