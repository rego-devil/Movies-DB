import React from 'react';
import { renderToString } from 'react-dom/server';
import { MainPage } from '../client/pages/';
import { Provider } from 'react-redux';
import store from '../client/store/configure-store';
import { StaticRouter } from 'react-router-dom';

const SimpleComponent = () => (
  <div>
    <span>Ура</span>
  </div>
)

const renderHTML = (html, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta charset="UTF-8">
      <title></title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script type="text/javascript" src="/javascript.bundle.js"></script>
    </body>
    </html>
  `
}


export const serverRenderer = () => {
    return (req, res) => {

      const context = {};

      const app = (
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <MainPage />
          </StaticRouter>
        </Provider>
      );

      const htmlString = renderToString(app);

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(context.url);
      }

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));
    }
}
