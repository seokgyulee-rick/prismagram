import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { userName, email, bio = "", firstName = "", lastName = "" } = args;
      const user = await prisma.createUser({
        userName,
        email,
        bio,
        firstName,
        lastName
      });
      return user;
    }
  }
};
