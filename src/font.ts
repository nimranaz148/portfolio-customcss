import { Caveat, Manrope } from 'next/font/google';

export const caveatFont = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: '700',
});

export const interFont = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});
