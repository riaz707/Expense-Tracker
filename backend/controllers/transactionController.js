import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
  const transaction = await Transaction.create({
    ...req.body,
    userId: req.user.id,
  });

  res.json(transaction);
};

export const getTransactions = async (req, res) => {
  const transactions = await Transaction.find({
    userId: req.user.id,
  });

  res.json(transactions);
};

export const deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
};
