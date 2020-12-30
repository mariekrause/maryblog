const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mariekrause/Desktop/maryblog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mariekrause/Desktop/maryblog/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/mariekrause/Desktop/maryblog/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/mariekrause/Desktop/maryblog/src/pages/contact.js"))),
  "component---src-pages-contact-new-js": hot(preferDefault(require("/Users/mariekrause/Desktop/maryblog/src/pages/contact_new.js"))),
  "component---src-pages-impressum-js": hot(preferDefault(require("/Users/mariekrause/Desktop/maryblog/src/pages/impressum.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/mariekrause/Desktop/maryblog/src/pages/index.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/mariekrause/Desktop/maryblog/src/templates/blogTemplate.js")))
}

