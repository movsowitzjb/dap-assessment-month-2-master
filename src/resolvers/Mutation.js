import uuidv4 from "uuid/v4";

const Mutation = {
  async createGroup(parent, args, { prisma }, info) {
    return prisma.mutation.createGroup({ data: args.data }, info);
  },
  async deleteGroup(parent, args, { prisma }, info) {
    return prisma.mutation.deleteGroup(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },
  async updateGroup(parent, args, { prisma }, info) {
    return prisma.mutation.updateGroup(
      {
        where: {
          id: args.id,
        },
        data: args.data,
      },
      info
    );
  },
};

export { Mutation as default };
