import * as z from 'zod';

export const ACCOUNT_TYPES = [
  { label: 'Personal', value: 'personal' },
  { label: 'Company', value: 'company' },
] as const;

export const signupSchema = z
  .object({
    email: z.email(),
    accountType: z.enum(ACCOUNT_TYPES.map(type => type.value)),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional() as z.ZodOptional<z.ZodNumber>,
    dateOfBirth: z.date().optional(),
    password: z.string().min(4, { message: 'Password must be at least 4 characters' }),
    confirmPassword: z.string().min(4, { message: 'Password must be at least 4 characters' }),
    acceptTerms: z.boolean().refine(val => val, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === 'company' && !data.companyName) {
      ctx.addIssue({
        code: 'custom',
        message: 'Company name is required',
        path: ['companyName'],
      });
    }

    if (data.accountType === 'company' && (!data.numberOfEmployees || data.numberOfEmployees < 1)) {
      ctx.addIssue({
        code: 'custom',
        message: 'Number of employees is required',
        path: ['numberOfEmployees'],
      });
    }

    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      });
    }

    if (data.dateOfBirth) {
      const today = new Date();
      const age = today.getFullYear() - data.dateOfBirth.getFullYear();
      const monthDiff = today.getMonth() - data.dateOfBirth.getMonth();
      const isUnder18 =
        age < 18 ||
        (age === 18 && (monthDiff < 0 || (monthDiff === 0 && today.getDate() < data.dateOfBirth.getDate())));

      if (isUnder18) {
        ctx.addIssue({
          code: 'custom',
          message: 'You must be at least 18 years old',
          path: ['dateOfBirth'],
        });
      }
    }
  });
