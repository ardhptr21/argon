import { db } from '@/lib/db';
import { parseZodErrors } from '@/utils/zodUtils';
import { CreateTalentValidator } from '@/validators/talentValidator';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const validate = CreateTalentValidator.safeParse(body);

    if (!validate.success && validate) {
      return NextResponse.json(
        { success: false, message: 'Validation failed.', errors: parseZodErrors(validate.error as any) },
        { status: 422 }
      );
    }

    const { projects, ...data } = validate.data;
    const talent = await db.talent.create({
      data: {
        ...data,
        projects: {
          createMany: {
            data: projects,
          },
        },
      },
    });

    return NextResponse.json({ success: true, message: 'Talent created.', data: talent });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error while creating talent, try again later.',
    });
  }
};
