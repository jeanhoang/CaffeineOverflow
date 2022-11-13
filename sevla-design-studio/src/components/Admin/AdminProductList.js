import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton
} from 'react-admin';


const ProductsList = (props) => {
    return (
        <>
            <List {...props}>
                <Datagrid>
                    <TextField source='ProductName' />
                    <TextField source='ProductDescription' />
                    <TextField source='ProductPrice' />
                    <TextField source='ProductQuantity' />
                    <EditButton />
                    <DeleteButton />
                </Datagrid>
            </List>
        </>
    )
}

export default ProductsList;