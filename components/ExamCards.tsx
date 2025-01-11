"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
type ExamCardProps = {
  user: any;
  label: string;
  description: string;
  startDate: number;
  endDate: number;
  onClick?: () => void;
};

const epochToDate = (epochTime: number) => {
  const epochMilliseconds = epochTime * 1000; // Convert to milliseconds
  const date = new Date(epochMilliseconds);
  return date.toLocaleString();
};

const showExamCard = (startDate: number, endDate: number, user: any, label: string) => {
  label = label.replace(/\s+/g, "-").toLowerCase();
  if (Date.now() >= startDate * 1000 && Date.now() <= endDate * 1000 && user.marks?.[label].status === 0) {
    return true;
  } else {
    return false;
  }
};

const ExamCard: React.FC<ExamCardProps> = ({
  user,
  label,
  description,
  startDate,
  endDate,
  onClick,
}) => {
  // Calculate if the date is more than 1 day old
  const showExam = showExamCard(startDate, endDate, user, label);
  // const showExam = true;

  return (
    <div
      className={`max-w-7xl mx-auto py-3 ${
        !showExam ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={!showExam ? undefined : onClick}
      role={!showExam ? undefined : "button"}
      aria-label={!showExam ? `${label} is completed` : `Go to ${label}`}
      tabIndex={!showExam ? -1 : 0}
      onKeyDown={(e) => {
        if (showExam && e.key === "Enter") onClick?.();
      }}
    >
      <div className="relative group">
        <div
          className={`absolute -inset-1 ${
            !showExam
              ? "bg-gray-400"
              : "bg-gradient-to-r from-purple-600 to-pink-600"
          } rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
        ></div>
        <div
          className={`relative px-4 py-4 sm:px-7 sm:py-6 ${
            !showExam ? "bg-gray-300 ring-gray-300" : "bg-white ring-gray-900/5"
          } ring-1 rounded-lg flex flex-col items-start space-y-3`}
        >
          <p
            className={`text-base sm:text-lg font-semibold ${
              !showExam
                ? "text-gray-500"
                : "text-purple-600 hover:text-purple-800 transition-colors"
            }`}
          >
            {label}
          </p>
          <p className="text-gray-500">
            {epochToDate(startDate)} - {epochToDate(endDate)}
          </p>
          <p
            className={`text-sm sm:text-base leading-snug ${
              !showExam ? "text-gray-600" : "text-slate-800"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
