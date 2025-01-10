// models/User.ts
import mongoose, { Schema, Document, model } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  marks: Map<string, number>;
  createdAt: Date;
}

const UserSchema: Schema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  marks: {
    type: Map,
    of: Number,
    default: {},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || model<IUser>("User", UserSchema);
