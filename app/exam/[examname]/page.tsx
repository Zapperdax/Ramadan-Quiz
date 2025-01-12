"use client";

import ExamQuestion from "@/components/ExamQuestion";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useExam } from "@/hooks/examPageHooks";

const ExamPage = ({ params }: { params: Promise<{ examname: string }> }) => {
  const { examName } = useExam(params);

  if (examName === null) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <ExamQuestion examName={examName} />
    </div>
  );
};

export default ExamPage;
