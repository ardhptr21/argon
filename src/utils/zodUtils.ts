import { ZodError, ZodIssue } from 'zod';

export const parseZodErrors = (error: ZodError) => {
  const errors = error.format((issue: ZodIssue) => {
    return issue.message;
  });

  return extractErrors(errors);
};

const extractErrors = (errors: any) =>
  Object.keys(errors).reduce((acc, key: any) => {
    const value = errors[key];
    if (key === '_errors') return acc;
    if (Object.keys(value).length > 1) {
      return { ...acc, [key]: extractErrors(value) };
    }

    return { ...acc, [key]: value._errors[0] };
  }, {});
