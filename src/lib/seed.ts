import { prisma } from "./prisma";

const main = async () => {
  await prisma.todo.create({
    data: {
      text: "Sample Todo 1",
    },
  });
};

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
