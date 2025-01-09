import * as mongoose from 'mongoose';

export const MariaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

MariaSchema.index({ username: 1 }, { unique: true });
MariaSchema.index({ email: 1 }, { unique: true });