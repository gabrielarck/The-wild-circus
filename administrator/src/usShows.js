import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput,Filter, Pagination } from 'react-admin';


const UsShowsPagination = (props) => (
    <Pagination
    rowsPerPageOptions= {
        [
            5, 10, 25, 50, 100
        ]
    }{...props}
    />
)

const UsShowsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);
export const UsShowsList = (props) => (
    <List filters={<UsShowsFilter />} {...props} pagination={<UsShowsPagination />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="prix" />
            <TextField source="dateStart" />
            <TextField source="dateEnd" />
            <TextField source="image" />
            <DateField source="published_at" />
            <TextField source="average_note" />
            <TextField source="views" />
            <EditButton basePath="/usShows" />
        </Datagrid>
    </List>
);

const UsShowsTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const UsShowsEdit = (props) => (
    <Edit title={<UsShowsTitle />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="description" options={{ multiLine: true }}/>
            <TextInput source="prix" />
            <TextInput source="dateStart" />
            <TextInput source="dateEnd" />
            <TextInput source="image" />
            <DateInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
            <TextInput disabled label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);

export const UsShowsCreate = (props) => (
    <Create title="Create a UsShows" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" options={{ multiLine: true }}/>
            <TextInput source="prix" />
            <TextInput source="dateStart" />
            <TextInput source="dateEnd" />
            <TextInput source="image" />
            <TextInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
        </SimpleForm>
    </Create>
);