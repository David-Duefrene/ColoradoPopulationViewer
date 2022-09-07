import ReactDOMServer from "react-dom/server";
import React from "react";
import { a as jsx } from "./chunk-2839ff2c.js";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import "react/jsx-runtime";
const Context = React.createContext(void 0);
function PageContextProvider({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsx(Context.Provider, {
    value: pageContext,
    children
  });
}
function PageShell({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsx(React.StrictMode, {
    children: /* @__PURE__ */ jsx(PageContextProvider, {
      pageContext,
      children
    })
  });
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const {
    Page,
    pageProps
  } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(PageShell, {
    pageContext,
    children: /* @__PURE__ */ jsx(Page, {
      ...pageProps
    })
  }));
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Displays the population of colorado as of 2020 and the projected population out to 2050" />
        <title>Colorado Population Viewer</title>
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {}
  };
}
export {
  passToClient,
  render
};
