module.exports = {
  siteMetadata: {
    title: 'Tomasz Myśliwiec - Front-end Developer | Web Developer',
    description: 'Nazywam się Tomasz Myśliwiec i jestem Front-end / Web Developerem. Zajmuję kodowaniem stron i aplikacji internetowych.',
    author: 'Tomasz Myśliwiec',
    ogImageUrl: 'http://mysliwiec.pro/img/social.png',
    siteUrl: 'https://mysliwiec.pro/'

  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-5968901-19',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-root-import',
    // {
    //   resolve: 'gatsby-plugin-layout',
    //   options: {
    //     component: require.resolve('./src/components/layout/layout.js'),
    //   },
    // },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve('./src/components/layout/layout.js')
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'mysliwiec.pro',
        short_name: 'mysliwiec.pro',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
