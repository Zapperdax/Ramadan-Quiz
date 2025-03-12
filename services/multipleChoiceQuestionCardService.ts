import { toast } from "react-toastify";
import { useState } from "react";

export const handleSelectedOption = (
  questionIndex: number,
  selectedOption: string,
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<{ [key: number]: string }>
  >
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
      let errorMessage = "Failed to update marks";
      try {
        const errorData = await response.json();
        errorMessage = errorData?.error || errorMessage;
      } catch (err) {
        console.error("Failed to parse error response", err);
      }
      console.error("Error updating user:", errorMessage);
      throw new Error(errorMessage);
    }
    return response.headers.get("content-length") === "0"
      ? {}
      : await response.json();
  } catch (error) {
    console.error("Error calling API", error);
    throw error; // Re-throw so the caller can handle it
  }
};

export const handleSubmit = async (
  userId: string,
  examName: string,
  questions: any,
  selectedOptions: { [key: number]: string },
  router: any
) => {
  let marks = 0;
  if (Object.keys(selectedOptions).length !== questions.length) {
    toast.error("Please select all options!", {
      position: "top-right",
      autoClose: 3000,
    });
    return;
  }
  questions.forEach((question: { correctOption: string }, i: number) => {
    if (question.correctOption === selectedOptions[i]) marks++;
  });
  try {
    await handleUpdateMarks(userId, examName, marks, 1);
    toast.success(`You have successfully submitted your exam!`, {
      position: "top-right",
      autoClose: 10000,
    });
    router.push("/");
  } catch (error) {
    toast.error("Error submitting exam!", {
      position: "top-right",
      autoClose: 3000,
    });
  }
};
