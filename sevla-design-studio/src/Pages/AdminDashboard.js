import * as React from "react";
import { Admin, Resource } from 'react-admin';
import ProductsList from "../components/Admin/AdminProductList";
import dataProvider from "../components/Admin/ProductDataProvider";
import ProductsCreate from "../components/Admin/AdminProductCreate";
import MyLayout from "../components/Admin/MyLayout";
import ProductsEdit from "../components/Admin/AdminProductEdit";

const productData = dataProvider;

const AdminDashboard = () => (
    <Admin basename="/admin" layout={MyLayout} dataProvider={productData}>
        <Resource name="dashboard" list={ProductsList} 
            create={ProductsCreate} edit={ProductsEdit} recordRepresentation="ProductName" />
    </Admin>
);


export default AdminDashboard;