import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StartingPageContent from '../../components/StartingPage/StartingPageContent';
import HomePage from '../HomePage';


describe('HomePage component', () => {
    //Test if HomePage is rendering 
    test('renders the Home Page', () => {
        render(
            <HomePage />
        );

    });

    //Test if HomePage component is rendering StartingPage component
    test('renders StartingPage content', () => {
        render(
            <StartingPageContent />
        );

    });

    
});