const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Ueno Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ueno-gatsby-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: 'F2FFFD',
        theme_color: 'F2FFFD',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      },
    },
  ],
};
