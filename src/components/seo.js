import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
// import favicon from "../images/favicon.png";
function SEO({ description, lang, meta }) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteHeadline
            siteDescription
            siteKeywords
            author
            siteKeywords
            siteUrl
            siteLanguage
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.siteDescription
  const language = site.siteMetadata.siteLanguage || lang;

  return (
    <Helmet
      title={site.siteMetadata.title}
      htmlAttributes={{language,}}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.siteKeywords.join(","),
        },
      ]}
    >
      {/* <link rel="icon" type="image/png" href={favicon} sizes="16x16,32x32,64x64" /> */}
      <script type="application/ld+json">
        {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.anythinksolutions.com",
              "name": "Anythink Solutions",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-303-817-2927",
                "email": "info@anythinksolutions.com",
                "contactType": "Information"
              }
            }
          `}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO;