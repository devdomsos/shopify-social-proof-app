
const createScriptTag = async (accessToken, shop) => {
    const query = JSON.stringify({
      query: `mutation scriptTagCreate($input: ScriptTagInput!) {
        scriptTagCreate(input: $input) {
          userErrors {
            field
            message
          }
          scriptTag {
            id
          }
        }
      }`
    });
  
    const response = await fetch(`https://${shop}/admin/api/2020-07/script_tags.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "X-Shopify-Access-Token": accessToken,
      },
      body: query
    })
  
    const responseJson = await response.json();
    console.log('responseJson from createScriptTag', responseJson)
   
  };
  
  module.exports = createScriptTag;