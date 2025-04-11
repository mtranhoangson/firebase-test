'use server';
/**
 * @fileOverview Personalized learning path recommendations based on user exam performance.
 *
 * - personalizedLearningPaths - A function that generates personalized learning path recommendations.
 * - PersonalizedLearningPathsInput - The input type for the personalizedLearningPaths function.
 * - PersonalizedLearningPathsOutput - The return type for the personalizedLearningPaths function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const PersonalizedLearningPathsInputSchema = z.object({
  examHistory: z
    .array(
      z.object({
        certificateName: z.string().describe('The name of the certificate the user attempted.'),
        score: z.number().describe('The score the user achieved on the exam.'),
        date: z.string().describe('The date the exam was taken.'),
      })
    )
    .describe('The exam history of the user.'),
  availableCertificates: z
    .array(
      z.object({
        name: z.string().describe('The name of the certificate.'),
        description: z.string().describe('A description of the certificate.'),
        vendor: z.string().describe('The vendor of the certificate.'),
      })
    )
    .describe('A list of available certificates that the user can take.'),
});
export type PersonalizedLearningPathsInput = z.infer<typeof PersonalizedLearningPathsInputSchema>;

const PersonalizedLearningPathsOutputSchema = z.object({
  recommendedLearningPaths: z
    .array(
      z.object({
        certificateName: z.string().describe('The name of the recommended certificate.'),
        reason: z.string().describe('The reason why this certificate is recommended.'),
      })
    )
    .describe('A list of recommended learning paths for the user.'),
});
export type PersonalizedLearningPathsOutput = z.infer<typeof PersonalizedLearningPathsOutputSchema>;

export async function personalizedLearningPaths(
  input: PersonalizedLearningPathsInput
): Promise<PersonalizedLearningPathsOutput> {
  return personalizedLearningPathsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathsPrompt',
  input: {
    schema: z.object({
      examHistory: z
        .array(
          z.object({
            certificateName: z.string().describe('The name of the certificate the user attempted.'),
            score: z.number().describe('The score the user achieved on the exam.'),
            date: z.string().describe('The date the exam was taken.'),
          })
        )
        .describe('The exam history of the user.'),
      availableCertificates: z
        .array(
          z.object({
            name: z.string().describe('The name of the certificate.'),
            description: z.string().describe('A description of the certificate.'),
            vendor: z.string().describe('The vendor of the certificate.'),
          })
        )
        .describe('A list of available certificates that the user can take.'),
    }),
  },
  output: {
    schema: z.object({
      recommendedLearningPaths: z
        .array(
          z.object({
            certificateName: z.string().describe('The name of the recommended certificate.'),
            reason: z.string().describe('The reason why this certificate is recommended.'),
          })
        )
        .describe('A list of recommended learning paths for the user.'),
    }),
  },
  prompt: `You are an AI learning path recommender. Analyze the user's exam history and suggest personalized learning paths.

Exam History:
{{#each examHistory}}
  - Certificate: {{certificateName}}, Score: {{score}}, Date: {{date}}
{{/each}}

Available Certificates:
{{#each availableCertificates}}
  - Name: {{name}}, Description: {{description}}, Vendor: {{vendor}}
{{/each}}

Based on the user's exam history and available certificates, recommend a learning path. Focus on areas where the user needs the most improvement. Explain the reasoning behind each recommendation.

Output the recommendations in JSON format.
`,
});

const personalizedLearningPathsFlow = ai.defineFlow<
  typeof PersonalizedLearningPathsInputSchema,
  typeof PersonalizedLearningPathsOutputSchema
>(
  {
    name: 'personalizedLearningPathsFlow',
    inputSchema: PersonalizedLearningPathsInputSchema,
    outputSchema: PersonalizedLearningPathsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
