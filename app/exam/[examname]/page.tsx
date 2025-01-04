"use client";

import ExamQuestion from "@/components/ExamQuestion";
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

  if(examName === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100">
      <ExamQuestion examName={examName} />
    </div>
  );
};

export default ExamPage;
