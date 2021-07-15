const Query = {
  groups(parent, args, { prisma }, info) {
    const opArgs = {};

    if (args.query) {
      opArgs.where = {
        OR: [
          {
            name_contains: args.query,
          },
        ],
      };
    }
    return prisma.query.users(prisma, info);
  },
  orgs(parent, args, { prisma }, info) {
    return prisma.query.posts(null, info);
  },
  sites(parent, args, { prisma }, info) {
    return prisma.query.sites(null, info);
  },
};

export { Query as default };
