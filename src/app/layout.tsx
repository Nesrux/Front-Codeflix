import './globals.css';

export const metadata = {
  title: 'Codeflix',
  description: 'Clone do netflix',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-[#141414] text-white scrollbar-hide'>{children}</body>
    </html>
  );
}
