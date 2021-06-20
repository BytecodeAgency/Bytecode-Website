import React, { useState } from 'react';
import { Subtitle } from '../../components/Typography/Typography';
import {
    NewsletterSubscribeExtendedContainer,
    NewsletterSubscribeExtendedForm,
    NewsletterSubscribeExtendedInputField,
    SubscribeExtendedButton,
} from './NewsletterSubscribeExtended.components';

interface ContainerProps {
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <NewsletterSubscribeExtendedContainer>{children}</NewsletterSubscribeExtendedContainer>
    );
};

const NewsletterSubscribeExtended: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const stateChanger = (
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => (e: React.ChangeEvent<HTMLInputElement>) => setter(e.target.value);
    const canSubmit = name !== '' && email !== '';

    return (
        <Container>
            <Subtitle>Nieuwsbrief</Subtitle>
            <h3 style={{ margin: ".66em 0" }}>Abonneer je op onze nieuwsbrief</h3>
            <p style={{ margin: "2em 0" }}>
                Maandelijks brengen wij een interessante en leerzame nieuwsbrief
                uit met onder andere onze ‘Bytecast’, nieuwe artikelen of
                e-books, en natuurlijk updates over ons team en werkzaamheden.
            </p>
            <NewsletterSubscribeExtendedForm
                action="https://bytecode.us4.list-manage.com/Subscribe/post"
                method="POST"
                noValidate
            >
                <input
                    type="hidden"
                    name="u"
                    value="8442e1debdc9af183ff9fdc66"
                />
                <input type="hidden" name="id" value="ae42f56e38" />
                <NewsletterSubscribeExtendedInputField
                    type="text"
                    name="MERGE1"
                    id="MERGE1"
                    placeholder="Naam"
                    onChange={stateChanger(setName)}
                    value={name}
                />
                <NewsletterSubscribeExtendedInputField
                    type="text"
                    name="MERGE0"
                    id="MERGE0"
                    placeholder="E-mailadres"
                    onChange={stateChanger(setEmail)}
                    value={email}
                />
                <SubscribeExtendedButton
                    type="submit"
                    disabled={!canSubmit}
                    value="SubscribeExtended"
                    name="SubscribeExtended"
                    id="mc-embedded-SubscribeExtended"
                >
                    Abonneer
                </SubscribeExtendedButton>
            </NewsletterSubscribeExtendedForm>
        </Container>
    );
};

export default NewsletterSubscribeExtended;
