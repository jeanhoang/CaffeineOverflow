import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

//Ensure all input fields are required 
const required = (message = 'Required') =>
  value => value ? undefined : message;

//Ensure price, quantity are numbers
const number = (message = 'Must be a number') =>
  value => value && isNaN(Number(value)) ? message : undefined;

//Ensure inputs must be filled
const validateTextInput = [required()];

//Ensure price, quantity inputs are required and are numbers
const validateNum = [required(), number()];

const ProductsCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="ProductName" validate={validateTextInput} />
        <TextInput multiline source="ProductDescription" validate={validateTextInput} />
        <TextInput multiline source="ProductLongDescription" validate={validateTextInput} />
        <TextInput source="ProductPrice" validate={validateNum} />
        <TextInput source="ProductSize" />
        <TextInput source="ProductType" validate={validateTextInput} />
        <TextInput source="ProductQuantity" validate={validateNum} />
        <TextInput source="ProductImg" validate={validateTextInput} />
      </SimpleForm>
    </Create>
  )
}

export default ProductsCreate;