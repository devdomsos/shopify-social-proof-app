// I am creating this file because Next.js uses an App component to pass down classes to the other files in my app so that I dont have to add imports in each file when building components. 

import App from 'next/app';
import Head from 'next/head';
// Add the Polaris app provider component
import { AppProvider } from '@shopify/polaris';
// Add Polaris styles as well. Next.js can take care of passing them down to other components
import '@shopify/polaris/dist/styles.css';
// Add the Translations prop
//The translation prop is now required on the AppProvider. Translations are in shopify/polaris/locales. I can import and consume the languages there through the i18n prop. 
import translations from '@shopify/polaris/locales/en.json';
// Shopify App Bridge is a JavaScript library that seamlessly integrates your app into Shopify user interfaces, including the web admin, mobile app, and POS.
import { Provider } from '@shopify/app-bridge-react';
// Add your Shopify API key and the shopOrigin using js-cookie, and the forceRedirect prop to the AppProvider component
import Cookies from 'js-cookie';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';



const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  },
});


class MyApp extends App {
  render() {

    // deconstruct props. console.log(this.props)
    const { Component, pageProps } = this.props;
  
    const configForAppBridge = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
    return (
      <React.Fragment>
        <Head>
          <title>BusyStore App</title>
          <meta charSet="utf-8" />
        </Head>
        {/* Wrapping the Component with the <AppProvider> component. Passing down the translations from Polaris. */}
        <Provider config={configForAppBridge}>
            <AppProvider i18n={translations} >
              <ApolloProvider client={client}>
                  <Component {...pageProps} />
              </ApolloProvider>
            </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;