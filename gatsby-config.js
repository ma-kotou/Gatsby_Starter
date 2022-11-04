module.exports = {
  siteMetadata: {
    title: 'Gatsby_Starter',
    description: 'EmotionでのノーマルなGatsbyStarter',
    author: 'Mai_K',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: './src/images',
        },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    //blog
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`,`.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth:630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options:{
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      }
    },
  ],
}
