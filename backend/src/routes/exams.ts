import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Start exam
router.post('/start', async (req: express.Request, res: express.Response) => {
  try {
    const { certificateId, questionCount } = req.body;

    // Get random questions
    const questions = await prisma.question.findMany({
      where: { certificateId },
      take: questionCount,
    });

    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit exam
router.post('/submit', async (req: express.Request, res: express.Response) => {
  try {
    const { userId, certificateId, answers, timeSpent } = req.body;

    // Get all questions for the certificate
    const questions = await prisma.question.findMany({
      where: { certificateId },
    });

    // Calculate score
    let correctAnswers = 0;
    questions.forEach((question: { correctAnswer: string }, index: number) => {
      if (question.correctAnswer === answers[index]) {
        correctAnswers++;
      }
    });

    const score = (correctAnswers / questions.length) * 100;

    // Save exam attempt
    const examAttempt = await prisma.examAttempt.create({
      data: {
        userId,
        certificateId,
        score,
        totalQuestions: questions.length,
        correctAnswers,
        timeSpent,
      },
    });

    res.json({
      score,
      totalQuestions: questions.length,
      correctAnswers,
      timeSpent,
      examAttemptId: examAttempt.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get exam history
router.get('/history/:userId', async (req: express.Request, res: express.Response) => {
  try {
    const { userId } = req.params;
    const examAttempts = await prisma.examAttempt.findMany({
      where: { userId },
      include: {
        certificate: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json(examAttempts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 