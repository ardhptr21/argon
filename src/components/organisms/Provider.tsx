'use client';

import { PropsWithChildren } from 'react';

export default function Provider({ children, provider: Provide }: PropsWithChildren & { provider: any }) {
  return <Provide>{children}</Provide>;
}
