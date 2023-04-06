/** @type {import('@lingui/conf').LinguiConfig} */
const config = {
  "locales": ["en", "am"],
  "catalogs": [{
    "path": "src/locales/{locale}",
    "include": ["src"]
  }],
}

export default config;
