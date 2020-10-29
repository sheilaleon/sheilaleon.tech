import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
          navigationLinks {
            link
            label
          }
          socialLinks {
            link
            label
            icon
          }
          description
          image
          imageSecure
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
