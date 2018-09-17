import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContactFormContainer = styled.div`
    background: darkgreen;
    margin: 2rem;
    width: 100%;
`;

const InputField = styled.input`
    background: darkorange;
    margin: 2rem;
    width: 100%;
`;

const InputTextArea = styled.textarea`
    background: darkblue;
    color: white;
    margin: 2rem;
    width: 100%;
`;

const SendButton = styled.button`
    background: red;
    color: white;
    padding: 2rem;
`;

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.generateInputField = this.generateInputField.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.state = {};
    }

    generateInputField(inputFieldType, inputFieldName, inputFieldPlaceholder) {
        // eslint-disable-next-line react/destructuring-assignment
        const value = this.state[inputFieldName];
        return (
            <InputField
                required
                type={inputFieldType}
                name={inputFieldName}
                placeholder={inputFieldPlaceholder}
                value={value}
                onChange={this.handleInput}
            />
        );
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name);
        console.log(e.target.value);
    }

    handleSend() {
        const sendData = {
            /* eslint-disable */
            contact: this.state.contact,
            email: this.state.email,
            phone: this.state.phone,
            contents: this.state.contents,
            /* eslint-enable */
        };

        // TODO: Add field validation

        axios
            .post('/post', sendData)
            .then(res => {
                console.log(res); // eslint-disable-line
            })
            .catch(err => {
                console.log(err); // eslint-disable-line
            });
    }

    render() {
        return (
            <ContactFormContainer>
                {this.generateInputField('text', 'contact', 'Naam')}
                {this.generateInputField('email', 'email', 'Emailadres')}
                {this.generateInputField('tel', 'phone', 'Telefoonnummer')}
                <InputTextArea
                    required
                    name="contents"
                    placeholder="Bericht"
                    onChange={this.handleInput}
                    value={this.state.contents} // eslint-disable-line
                />
                <SendButton onClick={this.handleSend}>Verzenden</SendButton>
            </ContactFormContainer>
        );
    }
}

export default ContactForm;
