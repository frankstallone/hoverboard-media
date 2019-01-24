const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Hoverboard Media | Delivering enterprise WordPress hosting for small businesses', // Navigation and Site Title
  siteTitleAlt: 'Hoverboard Media', // Alternative Site title for SEO
  siteTitleShort: 'Hoverboard Media', // short_name for manifest
  siteHeadline: 'Delivering enterprise WordPress hosting for small businesses', // Headline for schema.org JSONLD
  siteUrl: 'https://hoverboardmedia.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Delivering enterprise WordPress hosting for small businesses',
  author: 'Frank Stallone', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@frankstallone', // Twitter Username
  ogSiteName: 'frankstallone', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
