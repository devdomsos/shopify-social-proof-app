import { EmptyState, Layout, Page } from '@shopify/polaris';

// The App Bridge Resource Picker lets embedded apps easily give merchants a way to select resources from their store. The sample embedded app loads the resource picker from the title bar and empty state to let merchants select products.
import { ResourcePicker } from '@shopify/app-bridge-react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

     
//  Read on TextStyle positive prop variation here: 
//  https://polaris.shopify.com/components/titles-and-text/text-style 

class Index extends React.Component {

  state = { open: false };


  render () {
    return (
            <Page>
              <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={this.state.open}
                onSelection={(resources) => this.handleSelectionOfProducts(resources)}
                onCancel={() => this.setState({ open: false })}
              />
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
            </Page>
            );
      }
      handleSelectionOfProducts = (resources) => {

        const idsFromResources = resources.selection.map( product => product.id)

        this.setState({ open: false })
        console.log(idsFromResources)
      };
}      
  export default Index;