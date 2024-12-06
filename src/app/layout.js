import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://adityavadalkar.github.io'),
  title: "Aditya Vadalkar - Software Engineer & AI Developer",
  description: "Portfolio of Aditya Vadalkar - Software Engineer specializing in AI, Machine Learning, and Full Stack Development. View projects and experience.",
  keywords: ["Aditya Vadalkar", "Software Engineer", "AI Developer", "Machine Learning", "Full Stack Developer", "USC Graduate", "Los Angeles"],
  openGraph: {
    title: "Aditya Vadalkar - Software Engineer & AI Developer",
    description: "Portfolio of Aditya Vadalkar - Software Engineer specializing in AI, Machine Learning, and Full Stack Development.",
    url: 'https://adityavadalkar.github.io',
    siteName: 'Aditya Vadalkar Portfolio',
    images: [
      {
        url: '/Profile pic.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aditya Vadalkar - Software Engineer & AI Developer",
    description: "Portfolio of Aditya Vadalkar - Software Engineer specializing in AI, Machine Learning, and Full Stack Development.",
    images: ['/Profile pic.jpg'],
  },
  verification: {
    google: 'google4eb90cc9a6d1866d', // Add this after getting it from Google Search Console
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Aditya Vadalkar's portfolio showcasing skills and projects in software engineering, AI, and more." />
        <meta name="keywords" content="Aditya Vadalkar, portfolio, software engineer, AI, machine learning, projects, game developer" />
        <meta name="author" content="Aditya Vadalkar" />
        <meta property="og:title" content="Aditya Vadalkar - Portfolio" />
        <meta property="og:description" content="Aditya Vadalkar's portfolio showcasing skills and projects in software engineering, AI, and more." />
        <meta property="og:image" content="./Profile pic.jpg" />
        <meta property="og:url" content="https://adityavadalkar.github.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aditya Vadalkar Portfolio" />
        <title>Aditya Vadalkar - Portfolio</title>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.io",
              "@type": "Person",
              "name": "Aditya Vadalkar",
              "url": "https://adityavadalkar.github.io/",
              "sameAs": [
                "https://github.com/adityavadalkar",
                "https://linkedin.com/in/aditya-vadalkar"
              ],
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "RTI International"
              }
            }
          `}
        </script>
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
