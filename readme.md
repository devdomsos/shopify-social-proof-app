How to run the app:

1. Expose your dev environment

When authenticating merchants, Shopify redirects from the app authorization prompt back to your app. Your app needs an HTTPS address to be able to do this. Since your localhost:3000 isn’t a public address, you’ll use ngrok to create a secure tunnel from the public internet to your local machine.

    Create a secure tunnel from the public internet to your local machine in the terminal: 
    a)   npm install ngrok -g
    b)   ngrok http 3000
    

2. Copy the HTTPS version of the forwarding URL from your ngrok and paste it in the forwarding URL into the App URL field when you go to the Partner Dashboard -> All Apps -> App Setup -> App URL + Allowed redirection URL(s)

3. Copy HTTPS version of the forwarding URL from your ngrok and paste it in the env file in HOST variable 