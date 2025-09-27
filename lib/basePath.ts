export const withBase = (p: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${p}`;
