import * as React from "react";
import { Admin, Resource } from 'react-admin';
import ProductsList from "../components/Admin/AdminProductList";
import dataProvider from "../components/Products/ProductDataProvider";
import ProductsCreate from "../components/Admin/AdminProductCreate";
import MyLayout from "../components/Admin/MyLayout";


const productData = dataProvider;

const AdminDashboard = () => (
    <Admin basename="/admin" layout={MyLayout} dataProvider={productData}>
        <Resource name="products" list={ProductsList} create={ProductsCreate} />
    </Admin>
);


export default AdminDashboard;