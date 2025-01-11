import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  marks: {
    type: Object,
    default: () => ({
      "english-mastery-exam": { marks: 0, status: 0 },
      "computer-science-innovators-exam": { marks: 0, status: 0 },
      "geography-adventurer-test": { marks: 0, status: 0 },
      "mathematics-genius-test": { marks: 0, status: 0 },
      "history-legends-challenge": {marks: 0, status:0},
      "science-explorer-quiz": {marks: 0, status:0},
      "urdu-proficiency-assessment": {marks: 0, status:0},
    }),
  },
});

const User = mongoose?.models?.User || mongoose.model("User", UserSchema);

export default User;
