import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../client/store/configure-store';
import { StaticRouter } from 'react-router-dom';
import Routing from '../client/components/routing';
// import rootSaga from '../client/sagas/rootSaga';

const renderHTML = (html, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta charset="UTF-8">
      <title></title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script type="text/javascript" src="/main.bundle.js"></script>
    </body>
    </html>
  `
}


const serverRenderer = (req, res) => {
  
    const store = configureStore();
    const context = {};

    console.log(req.url);

    const app = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Routing />
        </StaticRouter>
      </Provider>
    );
    
    store.runSaga().done.then(() => {

      const htmlString = renderToString(app);

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(context.url);
      }

      const preloadedState = store.getState();

      res.send(renderHTML(htmlString, preloadedState));

    })

    // Do first render, starts initial actions.
    renderToString(app);

    // When the first render is finished, send the END action to redux-saga.
    store.close();
    
    
}

module.exports = serverRenderer;
