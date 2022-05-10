const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    console.log('Create 4 explorers');

    const mission = await prisma.mission.upsert({
      where: { name: 'Mission Java' },
      update: {},
      create: {
        name: 'Mission Java',
        lang: 'Spanish',
        missionCommander: 'carlogilmar',
        enrollments: 2,
        mission: 'Java'
      },
    });

    const mission1 = await prisma.mission.upsert({
      where: { name: 'Mission Python' },
      update: {},
      create: {
        name: 'Mission Python',
        lang: 'Spanish',
        missionCommander: 'ferochoa',
        enrollments: 3,
        mission: 'Python'
      },
    });

    const mission2 = await prisma.mission.upsert({
      where: { name: 'Mission C' },
      update: {},
      create: {
        name: 'Mission C',
        lang: 'Japanese',
        missionCommander: 'Kenji Nakamura',
        enrollments: 23,
        mission: 'C'
      },
    });



  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
