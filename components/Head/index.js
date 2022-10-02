import NextHead from "next/head";

const Head = ({
  title,
  description,
  author,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:image" content={ogImage} />
    <meta name="robots" content="follow, index" />
  </NextHead>
);

Head.defaultProps = {
  author: "YOUR_NAME",
  description:
    "A highly opinionated and complete starter for Next.js projects ready to production. Includes Typescript, Styled Components, Prettier, ESLint, Husky, SEO, and more.",
  keywords:
    "next, starter, typescript, styled components, prettier, eslint, husky, seo",
  ogDescription:
    "A highly opinionated and complete starter for Next.js projects ready to production. Includes Typescript, Styled Components, Prettier, ESLint, Husky, SEO, and more.",
  ogImage: "https://next-starter-ebon.vercel.app/images/og.png",
  ogTitle: "Next Starter ⚡️: Ready to production",
  ogUrl: "https://next-starter-ebon.vercel.app/",
  title: "Next Starter",
};

export default Head;
