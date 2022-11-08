import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Products from '../../components/Products/Products';

describe('Testing components for Shopping Page', () => {
    //Test if HomePage is rendering 
    test('renders the Products component', () => {
        render(
                <Products />
        );

    });

    
});