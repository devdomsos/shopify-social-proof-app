import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    TextField,
    SettingToggle, 
    TextStyle
  } from '@shopify/polaris';

class AnnotatedLayout extends React.Component {
    state = {
        minValue: '',
        maxValue: '',
        enabled: false,
    }; 
    // componentDidMount() {
    //   const script = document.createElement("script");
    //   script.src = "../jsCounterScript.js";
    //   script.async = true;
    //   document.body.appendChild(script);
    //   console.log('componentDidmount', script)
    // }

    render() {
        const { minValue, maxValue, enabled } = this.state;
        const contentStatus = enabled ? 'Disable' : 'Enable';
        const textStatus = enabled ? 'enabled' : 'disabled';


        return (
            <Page>
              <Layout>
                <Layout.AnnotatedSection
                  title="Show How Busy Your Store Is"
                  description="Enter Below Minimum Value and Maximum Value. Within the provided range the app will generate a random number of viewers on your product pages"
                >
                  <Card sectioned>
                    <Form onSubmit={this.handleSubmit}>
                      <FormLayout>
                        <TextField
                          value={minValue}
                          onChange={this.handleChange('minValue')}
                          label="Enter Minimum Value"
                          type="minVal"
                        />
                        <TextField
                          value={maxValue}
                          onChange={this.handleChange('maxValue')}
                          label="Enter Maximum Value"
                          type="maxVal"
                        />
                        <Stack distribution="trailing">
                  
                          <Button primary submit>
                            Save
                          </Button>

                
                        </Stack>
                      </FormLayout>
                    </Form>
                
                  </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection
                           title="Example:"
                           description="This product is being watched by "
                            
                       >  
                       <Card>
                         
                       </Card>
                       </Layout.AnnotatedSection>
                <Layout.AnnotatedSection
                    title="Turn On/Off BusyStore App"
                    // description="Temporarily disable all Sample App price updates"
                >
                    <SettingToggle
                    action={{
                        content: contentStatus,
                        onAction: this.handleToggle,
                    }}
                    enabled={enabled}
                    >
                    BusyStore App is{' '}
                    <TextStyle variation="strong">{textStatus}</TextStyle>.
                    </SettingToggle>
                </Layout.AnnotatedSection>
              </Layout>
            </Page>
          );
    }
    handleToggle = () => { 
        this.setState(({enabled}) => { 
            return {enabled: !enabled};
        })
    }

    // TODO: Clear inputs
    handleSubmit = (e) => {
      e.preventDefault();
        this.setState({
          minValue: this.state.minValue,
          maxValue: this.state.maxValue,
        });
    

        console.log('submission', this.state);
        this.setState({
          minValue:'',
          maxValue:'',
        });
      };
    
      handleChange = (field) => {
        return (value) => this.setState({ [field]: value });
      };

      // generateViewers = () => {
      //   const minVal = this.state.minValue;
      //   const maxVal = this.state.maxValue;
      //   console.log(minVal, maxVal)
      // }

} 

export default AnnotatedLayout;