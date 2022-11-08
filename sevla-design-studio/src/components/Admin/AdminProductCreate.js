import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const ProductsCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="ProductName" />
        <TextInput multiline source="ProductDescription" />
        <TextInput multiline source="ProductLongDescription" />
        <TextInput source="ProductPrice" />
        <TextInput source="ProductSize" />
        <TextInput source="ProductType" />
        <TextInput source="ProductQuantity" />
        <TextInput source="ProductImg" />
      </SimpleForm>
    </Create>
  )
}

export default ProductsCreate;