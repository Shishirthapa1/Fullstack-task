// import { prisma } from "@/lib/prisma";

// async function main() {
//   const existingAdmin = await prisma.user.findUnique({
//     where: { email: process.env.ADMIN_EMAIL },
//   });

//   if (existingAdmin) {
//     console.log("Admin user already exists:", existingAdmin);
//     return;
//   }

//   const newUser = await prisma.user.create({
//     data: {
//       email: process.env.ADMIN_EMAIL!,
//       password: process.env.ADMIN_PASSWORD!,
//     },
//   });
//   console.log("Admin user created:", newUser);
// }

// main()
//   .catch((e) => {
//     console.error("Seeding error:", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
