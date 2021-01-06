import {fireEvent, render, screen} from '@testing-library/react';
import LoginButton from './LoginButton.js';

describe('LoginButton', () => {
    //define test spec
    it('should render Log In inside the button', () => {
        render(<LoginButton />);
        //search for HTML element with 'Log In' text (generated by LoginButton.js)
        const loginButton = screen.getByText('Log In');

        //define assertion, or what we expect to find from getByText above, i.e. loginButton is not undefined
        expect(loginButton).toBeDefined();
    })

    //we can have multiple it() to test different parts of the component
    it('should trigger props.login when button is clicked', () => {
        const mockLogin = jest.fn(); //jset.fn is a mock function that does nothing
        render(<LoginButton login={mockLogin} />);

        //at this point, button has not been "clicked", so we expect mockLogin not to be called
        expect(mockLogin).not.toBeCalled();

        //fireEvent.click simulates a click on the HTML element containing 'Log In' text
        const loginButton = screen.getByText('Log In');
        fireEvent.click(loginButton);

        //button has been "clicked" by fireEvent, so we expect mockLogin to be called
        expect(mockLogin).toBeCalled();
    })
})