"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctOption: string;
};

type multipleChoiceQuestionCardProps = {
  questions: Question[];
  examName: string;
};

const MultipleChoiceQuestionCard: React.FC<multipleChoiceQuestionCardProps> = ({
  questions, examName
}) => {
  const { data: session } = useSession();
  const userId = session?.user?.id || "";
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});
  const handleSelectedOption = (
    questionIndex: number,
    selectedOption: string
  ) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionIndex]: selectedOption,
    }));
  };

  const handleUpdateMarks = async (
    userId: string,
    subject: string,
    marks: number,
    status: number
  ) => {
    try {
      const response = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, subject, marks, status }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error updating user:", errorData.error);
        return;
      }
      const data = await response.json();
      console.log("User updated successfully:", data);
    } catch (error) {
      console.error("Error calling API", error);
    }
  };

  const handleSubmit = async () => {
    let marks = 0;
    if (Object.keys(selectedOptions).length !== questions.length) {
      toast.error("Please select all options!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    questions.forEach((question, i) => {
      if (question.correctOption === selectedOptions[i]) marks++;
    });
    toast.success(`You have successfully secured ${marks} marks!`, {
      position: "top-right",
      autoClose: 10000,
    });
    await handleUpdateMarks(userId, examName, marks, 1);
    router.push("/");
  };

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
                    onClick={() => handleSelectedOption(question.id, option)}
                    className={`w-full px-6 py-3 text-left text-black rounded-full hover:bg-emerald-100 transition duration-300 ${
                      selectedOptions[question.id] === option
                        ? "bg-emerald-100"
                        : ""
                    }`}
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
        onClick={handleSubmit}
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
