import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    userId: String,
    title: String,
    amount: Number,
    type: String,
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
