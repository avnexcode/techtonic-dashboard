import React from "react";
import Head from "next/head";
import { env } from "@/configs/env";

export const HeadMetaData: React.FC<{
  title?: string;
  metaDescription?: string;
  // ogImageUrl?: string;
  pathname?: string;
}> = ({
  title = "",
  metaDescription,
  // ogImageUrl = env.NEXT_PUBLIC_OG_IMAGE_URL,
  pathname = "",
}) => {
  const defaultTitle = env.NEXT_PUBLIC_APP_NAME ?? "APP";
  const defaultTitleContent = title
    ? title + " | " + defaultTitle
    : defaultTitle;

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : env.NEXT_PUBLIC_BASE_URL;

  const pageUrl = new URL(pathname, baseUrl).toString();

  return (
    <Head>
      <title>{defaultTitleContent}</title>
      <link rel="icon" href="/favicon.ico" />

      {/* metadata */}
      <meta name="title" content={defaultTitleContent} />
      <meta name="description" content={metaDescription} />
      {/* <meta name="og:image" itemProp="image" content={ogImageUrl} /> */}
      <meta property="og:url" content={pageUrl} />

      <meta property="og:type" content="website" />
      {/* <meta property="og:image" itemProp="image" content={ogImageUrl} /> */}
      <meta property="og:title" content={defaultTitleContent} />
      <meta property="og:description" content={metaDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={defaultTitleContent} />
      {/* <meta name="twitter:image" content={ogImageUrl} /> */}
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  );
};
