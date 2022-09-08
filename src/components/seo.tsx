import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const Seo = ({
  author = "",
  description = "",
  keywords = [""],
  title = "",
  slug = "",
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const seo = {
    author: author ?? site.siteMetadata.author,
    description: description ?? site.siteMetadata.description,
    keywords: keywords ?? site.siteMetadata.keywords,
    title: `${title}${
      site.siteMetadata.siteTitle && ` | ${site.siteMetadata.siteTitle}`
    }`,
    url: slug
      ? `${site.siteMetadata.siteUrl}${slug}`
      : site.siteMetadata.siteUrl,
  }

  return (
    <React.Fragment>
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />

      {/* Primary Meta Tags */}
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      <meta
        name="keywords"
        content={seo.keywords ? seo.keywords.join(", ") : undefined}
      />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {/* <meta property="og:image" content={seo.image} /> */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
    </React.Fragment>
  )
}
