import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const useUser = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [totalMarks, setTotalMarks] = useState<number>(0);
  const [maxMarks, setMaxMarks] = useState<number>(0);
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
          router.push("login");
          // throw new Error("Failed to fetch user");
        }

        const userData = await response.json();
        setUser(userData);
        setSubjects(Object.keys(userData.marks));
        calculateTotalMarks(userData.marks);
        calculateMaxMarks(userData.marks);
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

  const calculateTotalMarks = (marks: any) => {
    let total = 0;
    Object.keys(marks).forEach((mark) => {
      let subjectMarks = marks[mark];
      if (subjectMarks.status === 1) {
        total += subjectMarks.marks;
      }
    });
    setTotalMarks(total);
  };

  const calculateMaxMarks = (marks: any) => {
    let total = 0;
    Object.keys(marks).forEach((mark) => {
      let subjectMarks = marks[mark];
      if (subjectMarks.status === 1) {
        total += subjectMarks.maxMarks;
      }
    });
    setMaxMarks(total);
  };
  return { user, session, loading, subjects, totalMarks, maxMarks };
};
