import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const todos = await prisma.todo.findMany();
      return res.status(200).json(todos);
    case "POST":
      const todo = await prisma.todo.create({
        data: {
          text: req.body.text,
        },
      });
      return res.status(200).json(todo);
    case "DELETE":
      await prisma.todo.delete({
        where: {
          id: req.body.id,
        },
      });
      return res.status(200).json({});
    case "PUT":
      const updatedTodo = await prisma.todo.update({
        where: {
          id: req.body.id,
        },
        data: {
          text: req.body.text,
        },
      });
      return res.status(200).json(updatedTodo);
    default:
      return res.send("Method not allowed");
  }
}
