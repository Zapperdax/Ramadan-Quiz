"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ExamPage = ({ params }: { params: { examname: string } }) => {
  const [examName, setExamName] = useState<string | null>(null);

  // Using async/await inside useEffect
  useEffect(() => {
    const fetchExamName = async () => {
      if (params) {
        const unwrappedParams = await params;
        setExamName(unwrappedParams.examname);
      }
    };

    fetchExamName();
  }, [params]);

  if (!examName) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Exam: {examName}</h1>
    </div>
  );
};

export default ExamPage;
