import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  applicationName: 'Tra cứu nhà mạng',
  title: 'Tra cuu nha mang',
  description: 'Generated by create next app',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'iOS tra cứu nhà mạng',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'openGraph siteName tra cứu nhà mạng',
    title: {
      default: 'openGraph title tra cứu nhà mạng',
      template: 'openGraph title template tra cứu nhà mạng',
    },
    description: 'openGraph description ',
  },
  twitter: {
    card: 'summary',
    title: {
      default: 'twitter title tra cứu nhà mạng',
      template: 'twitter title template tra cứu nhà mạng',
    },
    description: 'twitter description tra cứu nhà mạng',
  },
};

export const viewpoty: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='ltr'>
      {/* <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </head> */}
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
