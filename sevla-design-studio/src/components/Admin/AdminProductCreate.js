import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const ProductsCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="ProductName" />
        <TextInput multiline source="ProductDescription" />
        <TextInput source="ProductPrice" />
        <TextInput source="ProductQuantity" />
      </SimpleForm>
    </Create>
  )
}

export default ProductsCreate;