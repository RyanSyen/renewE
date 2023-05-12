import { Inter } from "next/font/google";

import "./globals.css";

/*
  This is the root layout where its shared across all pages in the app. Root layout must contain html and body tags. The root layout is a server component and cannot be set to a client component. Ref: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
*/

/*
  The Metadata API is used to define app metadata to improve SEO. This app is using STATIC config-based metadata and file-based metadata. Here are some file conventions:

  opengraph-image.(jpg|png|svg)
  twitter-image.(jpg|png|svg)
  favicon.ico
  icon.(ico|jpg|png|svg)
  sitemap.(xml|js|jsx|ts|tsx)
  robots.(txt|js|jsx|ts|tsx)
  manifest.(json|js|jsx|ts|tsx)

  ref: https://nextjs.org/blog/next-13-3#file-based-metadata-api
  ref: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata#file-based-metadata
*/

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Renew E",
  description: "Informative Website About Renewable Energy",
};

// eslint-disable-next-line prettier/prettier
const RootLayout = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
