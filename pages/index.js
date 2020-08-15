import { EmptyState, Layout, Page } from '@shopify/polaris';

// The App Bridge Resource Picker lets embedded apps easily give merchants a way to select resources from their store. The sample embedded app loads the resource picker from the title bar and empty state to let merchants select products.
import { ResourcePicker } from '@shopify/app-bridge-react';
// Using localStorage store_get and store_set to persist data across the app. Remember to refresh if sth doesnt work. 
import store from 'store-js';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import ResourceListWithProducts from '../components/ResourceList';


const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';


const CREATE_SCRIPTTAG = gql`
  mutation scriptTagCreate($input: ScriptTagInput!){
      scriptTagCreate(input: $input) {
        scriptTag {
          id
        }
        userErrors {
          field
          message
        }
      }
  }`;
     
//  Read on TextStyle positive prop variation here: 
//  https://polaris.shopify.com/components/titles-and-text/text-style 

class Index extends React.Component {

  state = { open: false };
  

  render () {
    const emptyState = !store.get('ids');
    let installScriptTag = !store.get('scripttag');
    const scriptTagInput = {
      src: 'https://raw.githubusercontent.com/devdomsos/shopify-social-proof-app/master/jsCounterScript.js', 
      displayScope: 'ONLINE_STORE',
    };

    return (
     
            <Page>
              <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={this.state.open}
                onSelection={ (resources) => {

                  this.handleSelectionOfProducts(resources)
                  

            
                }}
                onCancel={() => this.setState({ open: false })}
              />

            {/* conditional that switches views based on whether there are IDs stored */}
            {emptyState ? (
              <Layout>
                <EmptyState
                  heading="Make your store look like a busy bazaar! "
                  action={{
                    content: 'Select products',
                    // onAction: () => console.log('click from index.js'),
                    onAction: () => this.setState({ open: true }),
                  }}
                  image={img}
                >
                  <p>Select products to change their price temporarily.</p>
                </EmptyState>
              </Layout>
               ) : (
              <ResourceListWithProducts />
              )}
            </Page>
           
            );
      }
      handleSelectionOfProducts = (resources) => {

        const idsFromResources = resources.selection.map( product => product.id)

        this.setState({ open: false })
        console.log(idsFromResources)
        store.set('ids', idsFromResources);
      
      };
}      
  export default Index;