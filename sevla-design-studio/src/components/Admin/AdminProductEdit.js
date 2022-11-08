import React from 'react';
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput
} from 'react-admin';

const ProductsEdit = () => {
  return (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="_id" />
            <ReferenceInput source="_id" reference="dashboard" />
            <TextInput source="ProductName" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
  )
}

export default ProductsEdit;