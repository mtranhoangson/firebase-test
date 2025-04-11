import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create vendors
  const vendors = await Promise.all([
    prisma.vendor.create({
      data: {
        name: 'Microsoft',
        logo: 'https://example.com/microsoft-logo.png',
      },
    }),
    prisma.vendor.create({
      data: {
        name: 'AWS',
        logo: 'https://example.com/aws-logo.png',
      },
    }),
    prisma.vendor.create({
      data: {
        name: 'Google',
        logo: 'https://example.com/google-logo.png',
      },
    }),
  ]);

  // Create certificates
  const certificates = await Promise.all([
    prisma.certificate.create({
      data: {
        name: 'Microsoft Azure Administrator',
        description: 'Learn to manage Azure resources and implement security controls.',
        vendorId: vendors[0].id,
      },
    }),
    prisma.certificate.create({
      data: {
        name: 'AWS Solutions Architect',
        description: 'Design and deploy scalable systems on AWS.',
        vendorId: vendors[1].id,
      },
    }),
    prisma.certificate.create({
      data: {
        name: 'Google Cloud Professional',
        description: 'Build and manage applications on Google Cloud Platform.',
        vendorId: vendors[2].id,
      },
    }),
  ]);

  // Create questions for each certificate
  for (const certificate of certificates) {
    await Promise.all([
      prisma.question.create({
        data: {
          content: 'What is the primary purpose of Azure Resource Manager?',
          options: [
            'To manage virtual machines',
            'To deploy and manage Azure resources',
            'To monitor application performance',
            'To configure network security',
          ],
          correctAnswer: 'To deploy and manage Azure resources',
          explanation: 'Azure Resource Manager is the deployment and management service for Azure.',
          certificateId: certificate.id,
        },
      }),
      prisma.question.create({
        data: {
          content: 'Which service is used for serverless computing in AWS?',
          options: [
            'EC2',
            'Lambda',
            'S3',
            'RDS',
          ],
          correctAnswer: 'Lambda',
          explanation: 'AWS Lambda is a serverless compute service.',
          certificateId: certificate.id,
        },
      }),
      prisma.question.create({
        data: {
          content: 'What is the main benefit of using Google Cloud Functions?',
          options: [
            'Cost-effective storage',
            'Event-driven serverless execution',
            'Managed databases',
            'Content delivery network',
          ],
          correctAnswer: 'Event-driven serverless execution',
          explanation: 'Google Cloud Functions enables event-driven serverless execution.',
          certificateId: certificate.id,
        },
      }),
    ]);
  }

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      email: 'admin@certmaster.com',
      password: '$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu.Vm', // password: admin123
      name: 'Admin User',
      role: 'ADMIN',
    },
  });

  console.log('Database has been seeded. 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 