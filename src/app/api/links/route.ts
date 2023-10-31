import { db } from '@/lib/db';
import { parseZodErrors } from '@/utils/zodUtils';
import { CreateLinkValidator } from '@/validators/linkValidator';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  const search = params.get('search') || '';
  const page = Number(params.get('page')) || 1;
  const limit = Number(params.get('limit')) || 10;

  try {
    const count = await db.link.count({ where: { slug: { contains: search } } });

    const links = await db.link.findMany({
      where: { slug: { contains: search } },
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

    return NextResponse.json({ success: true, message: 'Links fetched.', data: links, meta });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Error while fetching links, try again later.',
      },
      { status: 500 }
    );
  }
};

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
