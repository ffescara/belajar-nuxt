import { defineEventHandler, readBody } from 'h3';

interface Transaction {
  id: number;
  items: { id: number; name: string; price: number; quantity: number }[];
  total: number;
  date: string;
}

const transactions: Transaction[] = []; // Database sementara (in-memory)

export default defineEventHandler(async (event) => {
  if (event.method === 'POST') {
    const body = await readBody(event);
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      items: body.items,
      total: body.total,
      date: new Date().toISOString(),
    };
    transactions.push(newTransaction);
    return { success: true, transaction: newTransaction };
  }

  // Untuk mendapatkan semua transaksi (opsional)
  if (event.method === 'GET') {
    return transactions;
  }
});
