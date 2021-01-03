import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

// Has the keep email as TextInput, There is not EmailInput
const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
