import { useState, useEffect } from "react";
export const useExam = (params: any) => {
  const [examName, setExamName] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      setExamName(resolvedParams.examname);
    };

    fetchData();
  }, [params]);

  return { examName };
};
