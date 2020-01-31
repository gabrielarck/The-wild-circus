import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import { UsShowsList, UsShowsEdit, UsShowsCreate } from './usShows';

const App = () => (
  <div className="App">
    <Admin  authProvider={authProvider} dataProvider={jsonServerProvider("http://localhost:5000/api/v1")}>
        <Resource name="usShows" list={UsShowsList} edit={UsShowsEdit} create={UsShowsCreate} icon={GroupWorkIcon}/>
    </Admin>
  </div>
);
export default App;
