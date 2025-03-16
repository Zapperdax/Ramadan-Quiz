type RiggedResultType = {
  name: string;
  email: string;
  image: string;
  createdAt: string; // Changed Date to string since you're using an ISO date string
  marks: Record<string, { marks: number; status: number; maxMarks: number }>;
};

export const riggedResults: RiggedResultType[] = [
  {
    name: "fayaz ahmed",
    email: "ali.khan@example.com",
    image: "https://example.com/images/ali.jpg",
    createdAt: "2025-03-15T12:00:00Z",
    marks: {
      "english-mastery-exam": { marks: 10, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": {
        marks: 10,
        status: 1,
        maxMarks: 10,
      },
      "geography-adventurer-test": { marks: 10, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 12, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 10, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 19, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 15, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Nida Nadeem",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Fizza Nadeem",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Areej Arshad",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Maha Bano",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Farah",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Bushra Nadeem",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Aftab Ahmed",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 10, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": {
        marks: 10,
        status: 1,
        maxMarks: 10,
      },
      "geography-adventurer-test": { marks: 10, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 12, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 10, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 19, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 15, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Dure Nayab",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Rizwana Aftab",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Umar Ali",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Tayyab Ahmed",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
  {
    name: "Saim Ahmed",
    email: "ayesha.malik@example.com",
    image: "https://example.com/images/ayesha.jpg",
    createdAt: "2025-03-14T14:30:00Z",
    marks: {
      "english-mastery-exam": { marks: 1, status: 1, maxMarks: 10 },
      "computer-science-innovators-exam": { marks: 1, status: 1, maxMarks: 10 },
      "geography-adventurer-test": { marks: 1, status: 1, maxMarks: 10 },
      "mathematics-genius-test": { marks: 1, status: 1, maxMarks: 12 },
      "history-legends-challenge": { marks: 1, status: 1, maxMarks: 10 },
      "science-explorer-quiz": { marks: 1, status: 1, maxMarks: 19 },
      "urdu-proficiency-assessment": { marks: 1, status: 1, maxMarks: 15 },
    },
  },
];
