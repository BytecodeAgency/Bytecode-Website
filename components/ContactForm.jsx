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

const StyledNotification = styled.div`
    color: white;
    padding: 4rem;
    &.success {
        background: green;
    }
    &.error {
        background: red;
    }
`;

const Notification = ({ type, message }) => (
    <StyledNotification className={type}>{message}</StyledNotification>
);

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.getNotifications = this.getNotifications.bind(this);
        this.addNotification = this.addNotification.bind(this);
        this.clearNotifications = this.clearNotifications.bind(this);
        this.generateInputField = this.generateInputField.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.sendData = this.sendData.bind(this);
        this.state = {
            notifications: [],
            contact: '',
            email: '',
            phone: '',
            content: '',
        };
    }

    getNotifications() {
        const { notifications } = this.state;
        return notifications.map(notification => (
            <Notification
                type={notification.type}
                message={notification.message}
            />
        ));
    }

    addNotification(type, message) {
        const { notifications } = this.state;
        notifications.push({
            type,
            message,
        });
        this.setState({ notifications });
    }

    clearNotifications() {
        this.setState({ notifications: [] });
    }

    generateInputField(inputFieldType, inputFieldName, inputFieldPlaceholder) {
        // eslint-disable-next-line react/destructuring-assignment
        const value = this.state[inputFieldName];
        return (
            <InputField
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
    }

    handleSend() {
        /* eslint-disable object-curly-newline */
        const { contact, email, phone, contents } = this.state;
        const sendData = { contact, email, phone, contents };
        /* eslint-enable */

        if (!contact || !email || !phone || !contents) {
            this.addNotification('error', 'Vul alle verplichte velden in');
        } else {
            this.sendData(sendData);
        }
    }

    sendData(sendData) {
        axios
            .post('/post', sendData)
            .then(res => {
                this.clearNotifications();
                this.addNotification('success', 'Bericht succesvol verzonden!');
                console.log(res); // eslint-disable-line
            })
            .catch(err => {
                this.addNotification('error', 'Er ging iets fout...');
                console.log(err); // eslint-disable-line
            });
    }

    render() {
        return (
            <ContactFormContainer>
                {this.getNotifications()}
                {this.generateInputField('text', 'contact', 'Naam')}
                {this.generateInputField('email', 'email', 'Emailadres')}
                {this.generateInputField('tel', 'phone', 'Telefoonnummer')}
                <InputTextArea
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
