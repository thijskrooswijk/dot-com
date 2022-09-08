import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const Seo = ({
  author = "",
  description = "",
  keywords = [""],
  title = "",
  slug = "",
}) => {
  const uuid = React.useId()
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
      <title key={uuid}>{seo.title}</title>
      <link key={uuid} rel="canonical" href={seo.url} />

      {/* Primary Meta Tags */}
      <meta key={uuid} name="title" content={seo.title} />
      <meta key={uuid} name="description" content={seo.description} />
      {/* <meta key={uuid} name="image" content={seo.image} /> */}
      <meta
        key={uuid}
        name="keywords"
        content={seo.keywords ? seo.keywords.join(", ") : undefined}
      />

      {/* Open Graph / Facebook  */}
      <meta key={uuid} property="og:type" content="website" />
      <meta key={uuid} property="og:url" content={seo.url} />
      <meta key={uuid} property="og:title" content={seo.title} />
      <meta key={uuid} property="og:description" content={seo.description} />
      {/* <meta key={uuid} property="og:image" content={seo.image} /> */}

      {/* Twitter */}
      <meta key={uuid} name="twitter:card" content="summary_large_image" />
      <meta key={uuid} name="twitter:creator" content={seo.author} />
      <meta key={uuid} name="twitter:url" content={seo.url} />
      <meta key={uuid} name="twitter:title" content={seo.title} />
      <meta key={uuid} name="twitter:description" content={seo.description} />
      {/* <meta key={uuid} name="twitter:image" content={seo.image} /> */}
    </React.Fragment>
  )
}
