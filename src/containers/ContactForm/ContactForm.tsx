/* eslint-disable react/destructuring-assignment */
// Ignore all ESLint issues as we have a TODO to rewrite this file
/* eslint-disable react/prop-types, no-unused-vars, @typescript-eslint/no-unused-vars, react/no-unescaped-entities */
// TODO: rewrite all components to have proper typing
// TODO: Change class to be const Component = props => <JSX />
import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import TextBlock from '../TextBlock/TextBlock';
import InputField from '../../components/InputField';
import {
    ContactFormContainer,
    InputTextArea,
    StyledNotification,
} from './ContactForm.components';
import Button from '../../components/Button/Button';

interface NotificationProps {
    type: string;
    message: string;
}
const Notification: React.FC<NotificationProps> = ({ type, message }) => (
    <StyledNotification className={type}>{message}</StyledNotification>
);

const initialFormValues = {
    contact: '',
    email: '',
    phone: '',
    contents: '',
};
interface NotificationType {
    type: string;
    message: string;
}
const ContactForm: React.FC<Record<string, never>> = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    // eslint-disable-next-line prettier/prettier
    const [notifications, setNotifications] = useState<NotificationType[]>([]);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value,
        });
    };
    const submit = async () => {
        setNotifications([]);
        await axios
            .post('https://api.bytecode.nl/contact', { ...formValues })
            .then(() => {
                setFormValues(initialFormValues);
                setNotifications([
                    ...notifications,
                    { type: 'success', message: 'Je bericht is verstuurd' },
                ]);
            })
            .catch(() => {
                setNotifications([
                    ...notifications,
                    { type: 'error', message: 'Iets ging fout...' },
                ]);
            });
    };
    return (
        <ContactFormContainer>
            <TextBlock
                subtitle="We staan voor je klaar"
                headingType="h2"
                title="Stuur ons een berichtje"
            />
            {notifications.map((notification: NotificationType) => (
                <Notification
                    key={notification.type + uuidv4().toString()}
                    type={notification.type}
                    message={notification.message}
                />
            ))}
            <form>
                <InputField
                    id="contact"
                    placeholder="Naam"
                    type="text"
                    aria-label="contact"
                    value={formValues.contact}
                    onChange={handleChange}
                />
                <InputField
                    id="email"
                    placeholder="Email"
                    type="text"
                    aria-label="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <InputField
                    id="phone"
                    placeholder="Telefoonnummer"
                    type="text"
                    aria-label="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                />
                <InputTextArea
                    id="contents"
                    placeholder="Bericht"
                    aria-label="message"
                    value={formValues.contents}
                    onChange={handleChange}
                />
                <Button
                    submit
                    onClick={() => submit()}
                    disabled={
                        formValues.contact === '' ||
                        formValues.email === '' ||
                        formValues.phone === '' ||
                        formValues.contents === ''
                    }
                >
                    Verzenden
                </Button>
            </form>
        </ContactFormContainer>
    );
};

export default ContactForm;
