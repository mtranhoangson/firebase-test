import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get user profile
router.get('/:id', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        certificates: {
          include: {
            certificate: true,
          },
        },
        examAttempts: {
          include: {
            certificate: true,
          },
        },
      },
    });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Remove sensitive data
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/:id', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, phone } = req.body;

    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        phone,
      },
    });

    // Remove sensitive data
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user certificates
router.get('/:id/certificates', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { id } = req.params;
    const certificates = await prisma.userCertificate.findMany({
      where: { userId: id },
      include: {
        certificate: true,
      },
    });

    res.json(certificates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 