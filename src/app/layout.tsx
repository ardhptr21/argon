import GlobalProvider from '@/components/GlobalProvider';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='max-h-screen overflow-hidden'>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
