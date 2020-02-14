import React from 'react';
import { render, getByLabelText, getAllByLabelText, fireEvent, waitForElement } from '@testing-library/react';
import ContactForm from './ContactForm';
import MutationObserver from "mutationobserver-shim";
import { act } from 'react-dom/test-utils';

test('firstName, lastName, email, message are rendered', () => {
    const { getByLabelText } = render(<ContactForm />);
  

    getByLabelText(/first Name/i);
    getByLabelText(/last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);

    // used this to correct that inputs in ContactForm.js had no id in input to match the htmlFor on the corresponding label
});

test('form submit adds new user profile to list', async () => {
    const { getByLabelText, getByTestId } = render 
    (<ContactForm />);
    const firstNameInput = getByLabelText(/first Name/i);
    const lastNameInput = getByLabelText(/last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    
    fireEvent.change( firstNameInput, {target: {value: 'Tes'}});
    fireEvent.change( lastNameInput, {target: {value: 'TestLastName'}});
    fireEvent.change( emailInput, {target: {value: 'TestEmail'}});
    fireEvent.change( messageInput, {target: {value: 'TestMessage'}});  
   
   
    expect( firstNameInput.value).toBe( 'Tes' );
    // this led to discovering the maxlength on firstName and it was corrected. It was keeping our form from submitting. 
    expect( lastNameInput.value).toBe( 'TestLastName' );
    expect( emailInput.value).toBe( 'TestEmail' );
    expect( messageInput.value).toBe( 'TestMessage' );

    
    fireEvent.click(getByTestId(/submit/i));  
  
    
    const output = await waitForElement( 
        () => getByTestId('formData')
     );
    // 

     expect(output).toBeInTheDocument();
    // const firstNameText = getByTestId("formData");
    // expect(firstNameText).toBeInTheDocument();


});


