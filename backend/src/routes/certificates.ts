import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all certificates
router.get('/', async (_req: express.Request, res: express.Response): Promise<void> => {
  try {
    const certificates = await prisma.certificate.findMany({
      include: {
        vendor: true,
      },
    });
    res.json(certificates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get certificate by ID
router.get('/:id', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { id } = req.params;
    const certificate = await prisma.certificate.findUnique({
      where: { id },
      include: {
        vendor: true,
        questions: true,
      },
    });

    if (!certificate) {
      res.status(404).json({ message: 'Certificate not found' });
      return;
    }

    res.json(certificate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get certificate questions
router.get('/:id/questions', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { id } = req.params;
    const questions = await prisma.question.findMany({
      where: { certificateId: id },
    });
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 