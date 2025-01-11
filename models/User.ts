import mongoose, { Schema } from "mongoose";
import { englishExam, computerExam, geographyExam, historyExam, mathExam, scienceExam, urduExam } from "@/questions/ExamNames";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  marks: {
    type: Object,
    default: () => ({
      [englishExam]: { marks: 0, status: 0 },
      [computerExam]: { marks: 0, status: 0 },
      [geographyExam]: { marks: 0, status: 0 },
      [mathExam]: { marks: 0, status: 0 },
      [historyExam]: {marks: 0, status:0},
      [scienceExam]: {marks: 0, status:0},
      [urduExam]: {marks: 0, status:0},
    }),
  },
});

const User = mongoose?.models?.User || mongoose.model("User", UserSchema);

export default User;
