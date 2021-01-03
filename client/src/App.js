import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';

// https://github.com/marmelab/react-admin
function App() {
  // evn though it said 3000, the proxy setting in package.json will proxy it to 5000
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='posts' list={PostList} create={PostCreate} />
    </Admin>
  );
}

export default App;
