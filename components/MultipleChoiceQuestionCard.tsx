"use client";
import React from "react";

type Question = {
  question: string;
  options: string[];
  correctOption: string;
};

type multipleChoiceQuestionCardProps = {
  questions: Question[];
};

const MultipleChoiceQuestionCard: React.FC<multipleChoiceQuestionCardProps> = ({
  questions,
}) => {
  return (
    <div className="my-4 text-center">
    <div className="m-6 max-w-3xl mx-auto text-left">
      {questions.map((question, index) => (
        <div key={index} className="mb-6">
          <div className="bg-gradient-to-r from-green-400 to-emerald-600 text-white py-4 px-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Question {index + 1}</h3>
            <p className="mt-2 text-lg">{question.question}</p>
          </div>

          <div className="mt-4">
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className="mb-3 rounded-full border border-emerald-400 shadow-sm hover:shadow-md transition-all"
              >
                <button
                  className="w-full px-6 py-3 text-left bg-white text-black rounded-full hover:bg-emerald-100 transition duration-300"
                  title={option}
                  name={option}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
          <button
          className="bg-gradient-to-r from-green-400 to-emerald-600 text-white py-4 px-6 rounded-lg shadow-lg w-1/2"
          title="submit"
          name="submit"
        >
          Submit
        </button>
        </div>
  );
};

export default MultipleChoiceQuestionCard;
