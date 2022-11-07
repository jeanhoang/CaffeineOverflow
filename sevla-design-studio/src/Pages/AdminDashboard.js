import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import ProductsList from "../components/Products/AdminProductList";
import dataProvider from "../components/Products/ProductDataProvider";
import ProductsCreate from "../components/Products/AdminProductCreate";


const productData = dataProvider;

const AdminDashboard = () => (
    <Admin basename="/admin" dataProvider={productData}>
        <Resource name="products" list={ProductsList} create={ProductsCreate} />
    </Admin>
);


export default AdminDashboard;