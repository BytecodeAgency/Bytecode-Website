// Ignore all ESLint issues as we have a TODO to rewrite this file
/* eslint-disable react/prop-types, no-unused-vars, @typescript-eslint/no-unused-vars, react/no-unescaped-entities */

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import theme from '../../styles/theme';
import TextBlock from '../TextBlock/TextBlock';
import Button from '../../components/Button';

const ContactFormContainer = styled.div`
    padding: 1em 0;
`;

const InputField = styled.input`
    font-size: 1.35rem;
    background: ${theme.colors.secondary};
    border-radius: 0.1em;
    outline: none;
    border: none;
    padding: 0.66em 1em;
    margin: 0 0.1em 1em 0.1em;
    color: ${theme.colors.white};
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

const SendButton = styled(Button)``;

const ErrorMessage = styled.div`
    margin-left: 1.33em;
    color: ${theme.colors.tertiary};
`;

const InputTextArea = styled.textarea`
    font-size: 1.35rem;
    background: ${theme.colors.secondary};
    border-radius: 0.1em;
    outline: none;
    border: none;
    padding: 1em;
    margin: 0 0.1em 1.33em;
    width: 100%;
    min-height: 20em;
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

const sendFormInformation = async sendData =>
    axios
        .post('https://api.bytecode.nl/contact', sendData)
        .then(() => true)
        .catch(false);

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
                        const { contact, email, phone, contents } = values;
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
                            this.addNotification('error', 'Iets ging fout...');
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
                        contents: Yup.string().required('verplicht'),
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
                                        errors.contact && touched.contact
                                            ? 'text-input error'
                                            : 'text-input'
                                    }
                                />
                                {errors.contact && touched.contact && (
                                    <ErrorMessage>
                                        {errors.contact}
                                    </ErrorMessage>
                                )}
                                <InputField
                                    id="email"
                                    placeholder="Email"
                                    type="text"
                                    aria-label="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email
                                            ? 'text-input error'
                                            : 'text-input'
                                    }
                                />
                                {errors.email && touched.email && (
                                    <ErrorMessage>{errors.email}</ErrorMessage>
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
                                        errors.phone && touched.phone
                                            ? 'text-input error'
                                            : 'text-input'
                                    }
                                />
                                {errors.phone && touched.phone && (
                                    <ErrorMessage>{errors.phone}</ErrorMessage>
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
                                        errors.contents && touched.contents
                                            ? 'text error'
                                            : 'text'
                                    }
                                />
                                {errors.content && touched.content && (
                                    <ErrorMessage>
                                        {errors.content}
                                    </ErrorMessage>
                                )}
                                <SendButton
                                    type="submit"
                                    disabled={!dirty || isSubmitting}
                                >
                                    Verzenden
                                </SendButton>
                            </form>
                        );
                    }}
                </Formik>
            </ContactFormContainer>
        );
    }
}

export default ContactForm;
