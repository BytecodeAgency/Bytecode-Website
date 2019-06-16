import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from '../lib/Grid';
import theme from '../styles/theme';
import TextBlock from './TextBlock';

const ContactFormContainer = styled.div`
    padding: 5rem 0;
`;

const InputField = styled.input`
    background: none;
    outline: none;
    border: none;
    border-bottom: 2px solid ${theme.colors.lightgray};
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    color: ${theme.colors.white};
    font-size: 2.4rem;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        border-bottom: 2px solid ${theme.colors.primary};
    }
    &.error {
        border-bottom: 2px solid ${theme.colors.tertiary};
    }
`;

const SendButton = styled.button`
    display: inline-block;
    background: transparent;
    padding: 0.8rem 3.6rem;
    border-color: ${theme.colors.tertiary};
    color: ${theme.colors.tertiary};
    border-style: solid;
    border-width: 0.1rem;
    border-radius: 10rem;
    transition: all 0.2s ease;
    margin-top: 3rem;
    &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        cursor: pointer;
    }
`;

const ErrorMessage = styled.div`
    font-size: 1.5rem;
    color: ${theme.colors.tertiary};
`;

const InputTextArea = styled.textarea`
    background: none;
    outline: none;
    border: none;

    border-bottom: 2px solid ${theme.colors.white};
    margin-bottom: 2rem;
    width: 100%;
    min-height: 20rem;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        border-bottom: 2px solid ${theme.colors.primary};
    }
    &.error {
        border-bottom: 2px solid ${theme.colors.tertiary};
    }
    &.text {
        font-family: ${theme.typography.form.font};
        color: ${theme.colors.white};
        font-size: 2.4rem;
    }
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

/* eslint-disable indent, prettier/prettier, implicit-arrow-linebreak */
const sendFormInformation = async sendData =>
    axios
        .post('localhost:3000/contact', sendData)
        .then(() => true)
        .catch(false);
/* eslint-enable */

const handleSend = formValues => {
    const { contents, contact, email, phone } = formValues;
    const sendData = { contact, email, phone, contents };

    return sendFormInformation(sendData);
};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.getNotifications = this.getNotifications.bind(this);
        this.addNotification = this.addNotification.bind(this);
        this.clearNotifications = this.clearNotifications.bind(this);
        this.state = {
            notifications: [],
        };
    }

    getNotifications() {
        const { notifications } = this.state;
        return notifications.map(notification => (
            <Notification
                key={notification.type + toString(Math.random() * 100)}
                type={notification.type}
                message={notification.message}
                onTimeout={this.clearNotifications}
                timeout={7000}
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

    renderText() {
        const { hideText } = this.props;
        if (!hideText) {
            return (
                <TextBlock
                    subtitle="We staan voor je klaar"
                    headingType="h2"
                    title="Stuur ons een berichtje"
                />
            );
        }
        return '';
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col offset={({ md: 1 }, { lg: 0.75 })} md={12} lg={8}>
                        <ContactFormContainer>
                            {this.renderText()}
                            {this.getNotifications()}
                            <Formik
                                initialValues={
                                    ({ contact: '' },
                                    { email: '' },
                                    { phone: '' },
                                    { contents: '' })
                                }
                                onSubmit={async (values, actions) => {
                                    const {
                                        contact,
                                        email,
                                        phone,
                                        contents,
                                    } = values;
                                    if (await handleSend(values)) {
                                        this.addNotification(
                                            'success',
                                            'Je bericht is verstuurd!',
                                        );
                                        setTimeout(() => {
                                            this.clearNotifications();
                                        }, 5000);
                                        actions.resetForm({
                                            contact: '',
                                            email: '',
                                            phone: '',
                                            contents: '',
                                        });
                                    } else {
                                        this.addNotification(
                                            'error',
                                            'Iets ging fout...',
                                        );
                                    }
                                    setTimeout(() => {
                                        actions.setSubmitting(false);
                                    }, 500);
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                        .email()
                                        .required('verplicht'),
                                    contact: Yup.string()
                                        .max(64)
                                        .min(2)
                                        .required('verplicht'),
                                    phone: Yup.number().required('verplicht'),
                                    contents: Yup.string().required(
                                        'verplicht',
                                    ),
                                })}
                            >
                                {props => {
                                    const {
                                        values,
                                        touched,
                                        errors,
                                        dirty,
                                        isSubmitting,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        handleReset,
                                    } = props;
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <InputField
                                                id="contact"
                                                placeholder="Naam"
                                                type="text"
                                                aria-label="contact"
                                                value={values.contact}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.contact &&
                                                    touched.contact
                                                        ? 'text-input error'
                                                        : 'text-input'
                                                }
                                            />
                                            {/* eslint-disable indent */
                                            errors.contact &&
                                                touched.contact && (
                                                    <ErrorMessage>
                                                        {errors.contact}
                                                    </ErrorMessage>
                                                ) /* eslint-enable */}
                                            <InputField
                                                id="email"
                                                placeholder="Email"
                                                type="text"
                                                aria-label="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.email &&
                                                    touched.email
                                                        ? 'text-input error'
                                                        : 'text-input'
                                                }
                                            />
                                            {errors.email && touched.email && (
                                                <ErrorMessage>
                                                    {errors.email}
                                                </ErrorMessage>
                                            )}
                                            <InputField
                                                id="phone"
                                                placeholder="Telefoonnummer"
                                                type="text"
                                                aria-label="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.phone &&
                                                    touched.phone
                                                        ? 'text-input error'
                                                        : 'text-input'
                                                }
                                            />
                                            {errors.phone && touched.phone && (
                                                <ErrorMessage>
                                                    {errors.phone}
                                                </ErrorMessage>
                                            )}
                                            <Field
                                                component={InputTextArea}
                                                id="contents"
                                                placeholder="Bericht"
                                                aria-label="message"
                                                value={values.contents}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.contents &&
                                                    touched.contents
                                                        ? 'text error'
                                                        : 'text'
                                                }
                                            />
                                            {/* eslint-disable indent */
                                            errors.contents &&
                                                touched.contents && (
                                                    <ErrorMessage>
                                                        {errors.contents}
                                                    </ErrorMessage>
                                                    /* eslint-enable */
                                                )}
                                            <SendButton
                                                type="submit"
                                                disabled={
                                                    !dirty || isSubmitting
                                                }
                                            >
                                                Verzenden
                                            </SendButton>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </ContactFormContainer>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactForm;
