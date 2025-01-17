import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    pass: { type: "string", required: true },
    phone: { type: "string", required: true },
  },
  { timestamps: true },
)

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;