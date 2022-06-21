import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8cyxi18q501z2e113dsnw/master',
    cache: new InMemoryCache()
})