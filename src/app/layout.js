import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Vadalkar",
  description: "Aditya Vadalkar's portfolio showcasing skills and projects in software engineering, AI, and more.",
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
        <meta property="og:image" content="/Profile pic.jpg" />
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
