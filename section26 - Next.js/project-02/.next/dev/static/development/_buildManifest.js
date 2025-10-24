self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/news": [
    "static/chunks/pages/news.js"
  ],
  "/news/[newsId]": [
    "static/chunks/pages/news/[newsId].js"
  ],
  "/test": [
    "static/chunks/pages/test.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/api/hello",
    "/news",
    "/news/[newsId]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()