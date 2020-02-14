import React from 'react';
import { render, getByLabelText, getAllByLabelText, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import MutationObserver from "mutationobserver-shim";

test('firstName, lastName, email, message are rendered', () => {
    const { getByLabelText } = render(<ContactForm />);
    console.log(getByLabelText);

    getByLabelText(/first Name/i);
    getByLabelText(/last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});



