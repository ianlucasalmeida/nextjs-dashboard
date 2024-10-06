// Code: Font Configuration
import { Inter, Lusitana, Ubuntu_Mono } from 'next/font/google';
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const inter = Inter({ subsets: ['latin'] });

export const ubuntuMono = Ubuntu_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
});

