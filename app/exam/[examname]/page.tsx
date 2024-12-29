"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ExamPage = ({ params }: { params: Promise<{ examname: string }> }) => {
  const [examName, setExamName] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      setExamName(resolvedParams.examname);
    };

    fetchData();
  }, [params]);

  return (
    <div>
      {examName ? (
        <h1>Exam: {examName}</h1>
      ) : (
        <p>Loading exam details...</p>
      )}
    </div>
  );
};

export default ExamPage;
