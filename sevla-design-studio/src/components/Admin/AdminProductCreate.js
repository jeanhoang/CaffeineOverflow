import React from 'react';
import { Create, SimpleForm, TextInput, SaveButton, Toolbar } from 'react-admin';


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

//Create tool bar to edit style for Save Button
const PostCreateToolbar = props => (
  <Toolbar {...props}>
      <SaveButton sx={{width: 200}}/>
  </Toolbar>
);

const ProductsCreate = () => {
  return (
    <Create redirect="show" sx={{display: 'flex', justifyContent:'center', alignItems:'center', margin: 'auto'}}>
      <SimpleForm toolbar={<PostCreateToolbar />} sx={{width: 800, alignItems:'center', display: 'flex', padding:'auto'}}>
        <TextInput source="ProductName" validate={validateTextInput} />
        <TextInput source="ProductDescription" validate={validateTextInput} sx={{width: 300}}/>
        <TextInput multiline source="ProductLongDescription" validate={validateTextInput} sx={{width: 500}}/>
        <TextInput source="ProductPrice" validate={validateNum} s/>
        <TextInput source="ProductSize" sx={{width: 150}}/>
        <TextInput source="ProductType" validate={validateTextInput}sx={{width: 150}}/>
        <TextInput source="ProductQuantity" validate={validateNum}sx={{width: 150}}/>
        <TextInput source="ProductImg" validate={validateTextInput} />
      </SimpleForm>
    </Create>
  )
}

export default ProductsCreate;