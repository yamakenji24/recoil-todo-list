import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch(req.method) {
    case "GET":
      const todos = await prisma.todo.findMany();
      console.log("API: ", todos);
      return res.status(200).json(todos);
    case "POST":
      return res.json("");
    default:
      return res.send('Method not allowed');
  }
}