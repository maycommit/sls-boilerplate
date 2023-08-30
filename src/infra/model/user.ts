import mongoose from "mongoose";

export interface UserModel {
  name: string
  email: string
}

const schema = new mongoose.Schema<UserModel>({ name: String, email: String });
export default mongoose.model<UserModel>('User', schema);