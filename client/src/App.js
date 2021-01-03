import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';

function App() {
  // evn though it said 3000, the proxy setting in package.json will proxy it to 5000
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='posts' list={PostList} />
    </Admin>
  );
}

export default App;
