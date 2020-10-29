import App, {Container} from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {};
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        // This exposes the query to the user
        pageProps.query = ctx.query;
        return {pageProps};
    }
    render() {
        const { Component, apollo, pageProps} = this.props;
        
        const {Component} = this.props;
        return(

            <Container>
                <ApolloProvider client={this.props.apollo}>
                <Page>
                <Component/>
                </Page>
                </ApolloProvider>
            </Container>
        );
    }

}

export default withData (MyApp);