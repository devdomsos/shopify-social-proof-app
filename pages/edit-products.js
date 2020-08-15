import {
    Card,
    DisplayText,
    Form,
    FormLayout,
    Layout,
    Page,
    PageActions,
    TextField
  } from '@shopify/polaris';

  
  class EditProduct extends React.Component {
    state = {
      maxValueProduct: '',
      minValueProduct: '',
      script: ''  
    };
  
  
    render() {
      const { name, maxValueProduct, minValueProduct } = this.state;
  
      return (
        <Page>
          <Layout>
            <Layout.Section>
              <DisplayText size="large">{name}</DisplayText>
              <Form>
                <Card sectioned>
                  <FormLayout>
                    <FormLayout.Group>
                      <TextField
                        
                        value={minValueProduct}
                        onChange={this.handleChange('minValueProduct')}
                        label="Min Value"
                        type="value"
                      />
                      <TextField
                        
                        value={maxValueProduct}
                        onChange={this.handleChange('maxValueProduct')}
                        label="Max Value"
                        type="value"
                      />
                    </FormLayout.Group>
                    <p>
                      Set values for the counter specific only for this product
                    </p>
                  </FormLayout>
                </Card>
                <PageActions
                  primaryAction={[
                    {
                      content: 'Save',
                      onAction: () => {
                        console.log('submitted');
                      }
                    }
                  ]}
                  secondaryActions={[
                    {
                      content: 'Remove the values'
                    }
                  ]}
                />
              </Form>
            </Layout.Section>
          </Layout>
        </Page>
      );
    }
  
    handleChange = (field) => {
      return (value) => this.setState({ [field]: value });
    };
  
   
  }
  
  export default EditProduct;