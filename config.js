const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://narfreadme.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'narfreadme.scg',
    logoLink: 'https://narfreadme.com',
    title:
      "<a href='https://narfreadme.com'><img class='img-responsive' src='narfreadme.svg' alt='Learn logo' /></a>",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/joebiden" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'narfreadme', link: 'https://narfreadme.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://narfreadme.com'>graphql </a><div class='greenCircle'></div><a href='https://narfreadme.com/'>react</a>",
  },
  siteMetadata: {
    title: 'Narf Readme',
    description: 'All the readmes',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
