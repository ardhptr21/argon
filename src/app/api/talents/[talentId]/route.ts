import { db } from '@/lib/db';
import { parseZodErrors } from '@/utils/zodUtils';
import { EditTalentValidator } from '@/validators/talentValidator';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from 'next/server';

interface IArgs {
  params: {
    talentId: string;
  };
}

export const PUT = async (req: NextRequest, { params: { talentId } }: IArgs) => {
  try {
    const validate = EditTalentValidator.safeParse(await req.json());

    if (!validate.success) {
      return NextResponse.json(
        { success: false, message: 'Validation failed.', errors: parseZodErrors(validate.error as any) },
        { status: 422 }
      );
    }

    await db.talent.update({ where: { id: talentId }, data: validate.data });

    return NextResponse.json({ success: true, message: 'Talent edited.' });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          {
            success: false,
            message: 'Talent not found.',
          },
          { status: 404 }
        );
      }
    }
    return NextResponse.json(
      {
        success: false,
        message: 'Error while editing talent, try again later.',
      },
      { status: 500 }
    );
  }
};
