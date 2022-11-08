import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthForm from '../../components/Auth/AuthForm';

describe('Testing components for AuthPage', () => {
    //Test if HomePage is rendering 
    test('renders the Authform component', () => {
        render(
            <BrowserRouter>
                <AuthForm />
            </BrowserRouter>
        );

    });

    
});