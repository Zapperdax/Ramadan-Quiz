"use client";
import React from "react";
import MultipleChoiceQuestionCard from "./MultipleChoiceQuestionCard";
import englishQuestions from "@/questions/englishQuestions";
import computerQuestions from "@/questions/computerScienceQuestions";
import geographyQuestions from "@/questions/geographyQuestions";
import historyQuestions from "@/questions/historyQuestions";
import mathQuestions from "@/questions/mathQuestions";
import scienceQuestions from "@/questions/scienceQuestion";
import urduQuestions from "@/questions/urduQuestions";

type examQuestionProps = {
  examName: string;
};

const ExamQuestion: React.FC<examQuestionProps> = ({ examName }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-4">
        {examName}
      {examName === "english-mastery-exam" ? (
        <MultipleChoiceQuestionCard questions={englishQuestions} examName={examName} />
      ) : examName === "computer-science-innovators-exam" ? (
        <MultipleChoiceQuestionCard questions={computerQuestions} examName={examName} />
      ) : examName === "geography-adventurer-test" ? (
        <MultipleChoiceQuestionCard questions={geographyQuestions} examName={examName} />
      ) : examName === "history-legends-challenge" ? (
        <MultipleChoiceQuestionCard questions={historyQuestions} examName={examName} />
      ) : examName === "mathematics-genius-test" ? (
        <MultipleChoiceQuestionCard questions={mathQuestions} examName={examName} />
      ) : examName === "science-explorer-quiz" ? (
        <MultipleChoiceQuestionCard questions={scienceQuestions} examName={examName} />
      ) : examName === "urdu-proficiency-assessment" ? (
        <MultipleChoiceQuestionCard questions={urduQuestions} examName={examName} />
      ) : null}
    </div>
  );
};

export default ExamQuestion;
