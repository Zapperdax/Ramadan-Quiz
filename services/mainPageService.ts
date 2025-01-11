export const handleExamPage = (router: any, examname: string) => {
    router.push(`/exam/${examname.replace(/\s+/g, "-").toLowerCase()}`);
  };