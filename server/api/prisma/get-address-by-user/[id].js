import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  let response = await prisma.address.findFirst({
    where: {
      userid: {
        userId: event.context.params.id,
      },
    },
  });

  return response;
});
