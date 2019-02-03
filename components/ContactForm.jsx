import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Container, Row, Col } from '../lib/Grid';
import theme from '../styles/theme';
import TextBlock from './TextBlock';
import Wrapper from './Wrapper';

const ContactFormContainer = styled.div`
    background: none;
`;

const InputField = styled.input`
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid ${theme.colors.lightgray};
    margin-bottom: 1.5rem;
    width: 100%;
`;

const SendButton = styled.button`
    display: inline-block;
    background: transparent;
    padding: 0.8rem 3.6rem;
    border-color: ${theme.colors.tertiary};
    border-style: solid;
    border-width: 0.1rem;
    border-radius: 10rem;
    transition: all 0.2s ease;
    margin-top: 3rem;
    &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
    }
`;

const InputTextArea = styled.textarea`
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid ${theme.colors.white};
    color: white;
    margin-bottom: 2rem;
    width: 100%;
    min-height: 20rem;
`;

const StyledNotification = styled.div`
    color: white;
    padding: 3rem;
    &.success {
        background: ${theme.colors.primary};
    }
    &.error {
        background: ${theme.colors.tertiary};
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
                className="form"
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
            .then(() => {
                this.clearNotifications();
                this.addNotification('success', 'Bericht succesvol verzonden!');
            })
            .catch(() => {
                this.addNotification('error', 'Er ging iets fout...');
            });
    }

    render() {
        return (
            <Wrapper>
                <Container fluid>
                    <Row>
                        <Col offset={({ md: 1 }, { lg: 0.75 })} md={12} lg={8}>
                            <TextBlock
                                subtitle="We staan voor je klaar"
                                headingType="h2"
                                title="Stuur ons een berichtje"
                            />
                            <ContactFormContainer>
                                {this.getNotifications()}
                                {this.generateInputField(
                                    'text',
                                    'contact',
                                    'Naam',
                                )}
                                {this.generateInputField(
                                    'email',
                                    'email',
                                    'Emailadres',
                                )}
                                {this.generateInputField(
                                    'tel',
                                    'phone',
                                    'Telefoonnummer',
                                )}
                                <InputTextArea
                                    name="contents"
                                    placeholder="Bericht"
                                    onChange={this.handleInput}
                    value={this.state.contents} // eslint-disable-line
                                    className="form"
                                />
                                <SendButton
                                    className="button"
                                    onClick={this.handleSend}
                                >
                                    Verzenden
                                </SendButton>
                            </ContactFormContainer>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}

export default ContactForm;
