"use client";
import React from "react";

type ExamCardProps = {
  label: string;
  description: string;
  onClick?: () => void;
};

const ExamCard: React.FC<ExamCardProps> = ({ label, description, onClick }) => {
  return (
    <div
      className="max-w-7xl mx-auto py-3 cursor-pointer"
      onClick={onClick}
      role="button"
      aria-label={`Go to ${label}`}
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-4 py-4 sm:px-7 sm:py-6 bg-white ring-1 ring-gray-900/5 rounded-lg flex flex-col items-start space-y-3">
          <p className="text-base sm:text-lg font-semibold text-purple-600 hover:text-purple-800 transition-colors">
            {label}
          </p>
          <p className="text-sm sm:text-base text-slate-800 leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
