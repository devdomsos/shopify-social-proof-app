require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { 
  SHOPIFY_API_SECRET_KEY, 
  SHOPIFY_API_KEY
} = process.env;

const getSubscriptionUrl = require('./server/getSubscriptionUrl');
const createScriptTag = require('./server/createScriptTag');

const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
// adding the app 

app.prepare().then(() => {
    // adding middleware and koa 
    const server = new Koa();
    server.use(session({ secure: true, sameSite: 'none' }, server));
    server.keys = [SHOPIFY_API_SECRET_KEY];

     // The createShopifyAuth functions take the Shopify API key and the Shopify API secret key from your .env file, and trigger the authentication screen. The function provides you the afterAuth, where you can use your own logic or redirect. The verifyRequest redirects users to the OAuth route if they haven’t been authenticated.
    server.use(
        createShopifyAuth({
          apiKey: SHOPIFY_API_KEY,
          secret: SHOPIFY_API_SECRET_KEY,
          // I am not sure if these are the right ones O.o
          scopes: [
            'read_products', 
            'write_products', 
            'write_script_tags', 
            'read_script_tags', 
            'read_themes', 
            'write_themes', 
            'read_product_listings', 
            'write_product_listings' 
          ],


          async afterAuth(ctx) {
            const { shop, accessToken } = ctx.session;
            // Because this app is loaded in an iframe it's important to set your cookies to use sameSite and secure for the app to load in Google Chrome.
            ctx.cookies.set('shopOrigin', shop, {
              httpOnly: false,
              secure: true, 
              sameSite: 'none'
            });
            
            
            await getSubscriptionUrl(ctx, accessToken, shop)
            await createScriptTag(accessToken, shop)
          },
        }),
      );
      server.use(graphQLProxy({version: ApiVersion.January20}));
      server.use(verifyRequest());

    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
      return
    });
    server.listen(port, () => {
        console.log(`> Server is Ready on http://localhost:${port}`);
      });

});