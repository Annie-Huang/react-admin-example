import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin';

// Without the range.js, you will get error of: "The Content-Range header is missing in the HTTP Response.
// The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination."
const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <DateField source='publishedAt' />
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  );
};

export default PostList;
