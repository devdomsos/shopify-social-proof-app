1. What is Social Proof for Ecommerce?

    Social Proof is when people assume that your product is great based on the actions of other people. People value the opinions of others, and you can leverage this to build trust and store credibility. By doing this you can capitalize on the current traffic beter and increase conversions (so they say) :) 

2. The idea behind this BusyStore App. 

    The idea was to build a Shopify integrated app with Visitor and Product Viewer Counter and allow people who sell on Shopify (Merchants) to show such counter on their product pages. The counter whould show fake viewer count. 

    The following app is still work in progress. The components necessary to call it 'ready' are not there yet as the task proven to be more complicated for my current skillset. 

    Idea for MVP: 
        m) Integrates with Shopify and charges Merchants for installation - Done
        v) Shows a Merchant Dashboard where they can switch between glogal settings and product selector. - Done
        p) Display JavaScript Counter when user switches between states in React Component and remove the JS script from the store if the Merchant uninstalls the app - couldn't get that done. 
        

---------------------------------------------------------------

How to run the app:

1. Expose your dev environment

When authenticating merchants, Shopify redirects from the app authorization prompt back to your app. Your app needs an HTTPS address to be able to do this. Since your localhost:3000 isn’t a public address, you’ll use ngrok to create a secure tunnel from the public internet to your local machine.

    Create a secure tunnel from the public internet to your local machine in the terminal: 
    a)   npm install ngrok -g
    b)   ngrok http 3000
    

2. Copy the HTTPS version of the forwarding URL from your ngrok and paste it in the forwarding URL into the App URL field when you go to the Partner Dashboard -> All Apps -> App Setup -> App URL + Allowed redirection URL(s)

3. Copy HTTPS version of the forwarding URL from your ngrok and paste it in the env file in HOST variable 