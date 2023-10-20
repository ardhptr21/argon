import { db } from '@/lib/db';
import { parseZodErrors } from '@/utils/zodUtils';
import { CreateTalentValidator } from '@/validators/talentValidator';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  const search = params.get('search') || '';
  const page = Number(params.get('page')) || 1;
  const limit = Number(params.get('limit')) || 10;

  try {
    const count = await db.talent.count({ where: { name: { contains: search } } });

    const talents = await db.talent.findMany({
      where: { name: { contains: search } },
      take: limit,
      skip: (page - 1) * limit,
      orderBy: { createdAt: 'desc' },
    });

    const meta = {
      total: count,
      page,
      limit,
      totalPages: Math.ceil(count / limit),
    };

    return NextResponse.json({ success: true, message: 'Talents fetched.', data: talents, meta });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Error while fetching talents, try again later.',
      },
      { status: 500 }
    );
  }
};

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
    return NextResponse.json(
      {
        success: false,
        message: 'Error while creating talent, try again later.',
      },
      { status: 500 }
    );
  }
};
