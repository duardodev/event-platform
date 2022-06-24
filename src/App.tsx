import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';

import { Router } from './components/Router';
import { Platform } from './pages/Platform';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
