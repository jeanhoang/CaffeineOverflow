import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthForm from '../../components/Auth/AuthForm';
import ItemForm from '../../components/Products/Items/ItemForm';

describe('Testing components for DetailProductPage', () => {
    //Test if HomePage is rendering 
    test('renders the ItemForm component', () => {
        render(
            <ItemForm/>
        );

    });

    
});