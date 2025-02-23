module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Aagnes`,
    description: 'Aagnes es una oficina de diseño, mobiliario e interiores con base en Guadalajara, México.',
    url: `https://aagnes.mx`,
    siteUrl: `https://aagnes.mx`,
    image: './src/images/aagnes_meta.png',
    menuLinks: [
      {
        name: 'Espacio',
        link: '/espacio'
      },
      {
        name: 'Estudio',
        link: 'about'
      }
    ],
    og: {
      siteName: 'Aagnes',
    },
  },
  plugins: ["gatsby-plugin-react-helmet",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: "src/images/icon.png",
      name: "Aagnes",
      short_name: "Aagnes",
      start_url: "/",
      background_color: "#faf9f5",
      theme_color: "#000000",
      display: "browser",
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'sources',
      path: `${__dirname}/src/sources`,
    },
  },
  `gatsby-plugin-mdx`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'press',
      path: `${__dirname}/src/sources/press`,
    },
  },
  'gatsby-plugin-postcss',
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  ]
};