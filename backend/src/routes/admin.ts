import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Middleware to check admin role
const isAdmin = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user || user.role !== 'ADMIN') {
      res.status(403).json({ message: 'Access denied' });
      return;
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Apply admin middleware to all routes
router.use(isAdmin);

// Get all users
router.get('/users', async (_req: express.Request, res: express.Response) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create certificate
router.post('/certificates', async (req: express.Request, res: express.Response) => {
  try {
    const { name, description, vendorId } = req.body;
    const certificate = await prisma.certificate.create({
      data: {
        name,
        description,
        vendorId,
      },
    });
    res.status(201).json(certificate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add question to certificate
router.post('/certificates/:id/questions', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { content, options, correctAnswer, explanation } = req.body;

    const question = await prisma.question.create({
      data: {
        content,
        options,
        correctAnswer,
        explanation,
        certificateId: id,
      },
    });

    res.status(201).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Assign certificate to user
router.post('/users/:userId/certificates', async (req: express.Request, res: express.Response) => {
  try {
    const { userId } = req.params;
    const { certificateId, validUntil } = req.body;

    const userCertificate = await prisma.userCertificate.create({
      data: {
        userId,
        certificateId,
        validUntil: new Date(validUntil),
      },
    });

    res.status(201).json(userCertificate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 