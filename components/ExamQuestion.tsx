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
import {
  englishExam,
  computerExam,
  geographyExam,
  historyExam,
  mathExam,
  scienceExam,
  urduExam,
} from "@/questions/ExamNames";

type examQuestionProps = {
  examName: string;
};

const ExamQuestion: React.FC<examQuestionProps> = ({ examName }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-4">
      {examName === englishExam ? (
        <MultipleChoiceQuestionCard
          questions={englishQuestions}
          examName={examName}
        />
      ) : examName === computerExam ? (
        <MultipleChoiceQuestionCard
          questions={computerQuestions}
          examName={examName}
        />
      ) : examName === geographyExam ? (
        <MultipleChoiceQuestionCard
          questions={geographyQuestions}
          examName={examName}
        />
      ) : examName === historyExam ? (
        <MultipleChoiceQuestionCard
          questions={historyQuestions}
          examName={examName}
        />
      ) : examName === mathExam ? (
        <MultipleChoiceQuestionCard
          questions={mathQuestions}
          examName={examName}
        />
      ) : examName === scienceExam ? (
        <MultipleChoiceQuestionCard
          questions={scienceQuestions}
          examName={examName}
        />
      ) : examName === urduExam ? (
        <MultipleChoiceQuestionCard
          questions={urduQuestions}
          examName={examName}
        />
      ) : null}
    </div>
  );
};

export default ExamQuestion;
