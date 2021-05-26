import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY = gql`
query { ping }
`;

const QUERY2 = gql`
query ($id: ID! ){ user(id:$id){ id name }}
`;

const App: React.FC = () => (
  <>
  <Query query = {QUERY}>
    {({ data, loading , error}: any) => {
      if(loading)
      return <p>Loading...</p>;
      else if (error || !data)
        return <p>error!</p>
      else 
        return <p>{data.ping}</p>
    }}
  </Query>
  <Query query = {QUERY2} variables={{ id: "7"}}>
  {({ data, loading , error}: any) => {
    if(loading)
    return <p>Loading...</p>;
    else if (error || !data)
      return <p>error!</p>
    else 
      return <p>{data.user.id} - {data.user.name}</p>
  }}
</Query>
</>
)

export default App;
