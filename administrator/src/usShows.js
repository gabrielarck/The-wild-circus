import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';


export const UsShowsList = (props) => (
    <List {...props} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="tilte" />
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

const UsShowsTilte = ({ record }) => {
    return <span>Post {record ? `"${record.tilte}"` : ''}</span>;
};

export const UsShowsEdit = (props) => (
    <Edit tilte={<UsShowsTilte />} {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="tilte" />
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
    <Create tilte="Create a UsShows" {...props}>
        <SimpleForm>
            <TextInput source="tilte" />
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