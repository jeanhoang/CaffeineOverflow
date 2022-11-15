import React from 'react';
import { Edit, SimpleForm, TextInput, Toolbar, SaveButton, minValue, maxValue, maxLength } from 'react-admin';

//Ensure all input fields are required 
const required = (message = 'Required') =>
    value => value ? undefined : message;

//Ensure price, quantity are numbers
const number = (message = 'Must be a number') =>
    value => value && isNaN(Number(value)) ? message : undefined;

//Ensure inputs must be filled
const validateTextInput = [required(), maxLength(200)];

//Ensure inputs must be filled
const validateLongTextInput = [required(), maxLength(1000)];

//Ensure price, quantity inputs are required and are numbers
const validateNum = [required(), number(), minValue(0), maxValue(99999)];

//Create tool bar to edit style for Save Button
const PostCreateToolbar = props => (
    <Toolbar {...props}>
        <SaveButton sx={{ width: 750 }} />
    </Toolbar>
);

const ProductsEdit = () => {
    return (
        <Edit sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
            <SimpleForm toolbar={<PostCreateToolbar />} sx={{ width: 800, alignItems: 'center', display: 'flex', padding: 'auto' }}>
                <TextInput source="ProductName" validate={validateTextInput} sx={{ width: 500 }} />
                <TextInput source="ProductDescription" label="Product short description" validate={validateTextInput} sx={{ width: 500 }} />
                <TextInput multiline source="ProductLongDescription" validate={validateLongTextInput} sx={{ width: 500 }} />
                <TextInput source="ProductPrice" validate={validateNum} sx={{ width: 150 }} />
                <TextInput source="ProductSize" helperText="Optional field." sx={{ width: 150 }} />
                <TextInput source="ProductType" validate={validateTextInput} sx={{ width: 150 }} />
                <TextInput source="ProductQuantity" validate={validateNum} sx={{ width: 150 }} />
                <TextInput multiline source="ProductImg" type="url" label="Product image" helperText="Enter the url to an image." validate={validateLongTextInput} sx={{ width: 770 }} />
            </SimpleForm>
        </Edit>
    )
}

export default ProductsEdit;