import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Admin, Resource} from 'react-admin';

describe('Testing components for Admin Dashboard', () => {
    //Test if HomePage is rendering 
    test('renders the Admin and Resource componentw', () => {
        render(

            <Admin>
                <Resource></Resource>
            </Admin>
        );

    });

    
});