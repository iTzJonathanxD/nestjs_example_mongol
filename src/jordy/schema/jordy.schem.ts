import * as mongoose from 'mongoose';

export const JordySchem = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

JordySchem.index({ username: 1 }, { unique: true });
JordySchem.index({ email: 1 }, { unique: true });