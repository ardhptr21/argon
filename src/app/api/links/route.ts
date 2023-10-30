import { db } from '@/lib/db';
import { parseZodErrors } from '@/utils/zodUtils';
import { CreateLinkValidator } from '@/validators/linkValidator';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const validate = CreateLinkValidator.safeParse(await req.json());

    if (!validate.success) {
      return NextResponse.json(
        { success: false, message: 'Validation failed.', errors: parseZodErrors(validate.error as any) },
        { status: 422 }
      );
    }

    const { talents, ...data } = validate.data;
    await db.link.create({
      data: {
        ...data,
        talents: { connect: talents.map((talent) => ({ id: talent })) },
      },
    });

    return NextResponse.json({ success: true, message: 'Link created.' });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Error while creating link, try again later.',
      },
      { status: 500 }
    );
  }
};
