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
                <TextInput source="ProductName" />
                <TextInput multiline source="ProductDescription" />
                <TextInput multiline source="ProductLongDescription" />
                <TextInput source="ProductPrice" />
                <TextInput source="ProductSize" />
                <TextInput source="ProductType" />
                <TextInput source="ProductQuantity" />
                <TextInput source="ProductImg" />
            </SimpleForm>
        </Edit>
    )
}

export default ProductsEdit;