const getSubscriptionUrl = async (ctx, accessToken, shop) => {
    const query = JSON.stringify({
      query: `mutation {
        appSubscriptionCreate(
            name: "BusyStore Charge"
            returnUrl: "${process.env.HOST}"
            test: true
            lineItems: [
            {
              plan: {
                appUsagePricingDetails: {
                    cappedAmount: { amount: 1, currencyCode: USD }
                    terms: "$1 for every month"
                }
              }
            }
            {
              plan: {
                appRecurringPricingDetails: {
                    price: { amount: 1, currencyCode: USD }
                }
              }
            }
            ]
          ) {
              userErrors {
                field
                message
              }
              confirmationUrl
              appSubscription {
                id
              }
          }
      }`
    });
  
    const response = await fetch(`https://${shop}/admin/api/2019-10/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-Shopify-Access-Token": accessToken,
      },
      body: query
    })
  
    const responseJson = await response.json();
    const confirmationUrl = responseJson.data.appSubscriptionCreate.confirmationUrl
    return ctx.redirect(confirmationUrl)
  };
  
  module.exports = getSubscriptionUrl;