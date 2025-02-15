import mongoose, { Schema } from "mongoose";
import {
  practiceExam,
  englishExam,
  computerExam,
  geographyExam,
  historyExam,
  mathExam,
  scienceExam,
  urduExam,
} from "@/questions/ExamNames";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  marks: {
    type: Object,
    default: () => ({
      [practiceExam]: { marks: 0, status: 0, maxMarks: 10 },
      [englishExam]: { marks: 0, status: 0, maxMarks: 10 },
      [computerExam]: { marks: 0, status: 0, maxMarks: 10 },
      [geographyExam]: { marks: 0, status: 0, maxMarks: 10 },
      [mathExam]: { marks: 0, status: 0, maxMarks: 12 },
      [historyExam]: { marks: 0, status: 0, maxMarks: 10 },
      [scienceExam]: { marks: 0, status: 0, maxMarks: 19 },
      [urduExam]: { marks: 0, status: 0, maxMarks: 15 },
    }),
  },
});

const User = mongoose?.models?.User || mongoose.model("User", UserSchema);

export default User;
