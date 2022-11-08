import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserProfile from '../../components/Profile/UserProfile';

describe('Testing components for ProfilePage', () => {
    //Test if HomePage is rendering 
    test('renders the UserProfile component', () => {
        render(
                <UserProfile/>
        );

    });

    
});