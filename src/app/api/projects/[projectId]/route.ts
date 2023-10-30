import { db } from '@/lib/db';
import { parseZodErrors } from '@/utils/zodUtils';
import { EditProjectValidator } from '@/validators/projectValidator';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';

interface IArgs {
  params: {
    projectId: string;
  };
}

export const PUT = async (req: NextRequest, { params: { projectId } }: IArgs) => {
  try {
    const validate = EditProjectValidator.safeParse(await req.json());

    if (!validate.success) {
      return NextResponse.json(
        { success: false, message: 'Validation failed.', errors: parseZodErrors(validate.error as any) },
        { status: 422 }
      );
    }

    await db.project.update({ where: { id: projectId }, data: validate.data });

    return NextResponse.json({ success: true, message: 'Project edited.' });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          {
            success: false,
            message: 'Project not found.',
          },
          { status: 404 }
        );
      }
    }
    return NextResponse.json(
      {
        success: false,
        message: 'Error while editing project, try again later.',
      },
      { status: 500 }
    );
  }
};
