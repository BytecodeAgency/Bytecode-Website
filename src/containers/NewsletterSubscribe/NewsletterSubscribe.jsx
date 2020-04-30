import React, { useState } from 'react';
import InputField from '../../components/InputField';
import {
    NewsletterSubscribeContainer,
    NewsletterSubscribeForm,
    SubscribeButton,
} from './NewsletterSubscribe.components';

const NewsletterSubscribe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const stateChanger = setter => e => setter(e.target.value);
    const canSubmit = name !== '' && email !== '';

    return (
        <NewsletterSubscribeContainer>
            <h4>Schrijf je in voor onze nieuwsbrief!</h4>
            <p>
                Maandelijks brengen wij een interessante en leerzame nieuwsbrief
                uit met onder andere onze ‘Bytecast’, nieuwe artikelen of
                e-books, en natuurlijk updates over ons team en werkzaamheden.
            </p>
            <NewsletterSubscribeForm
                action="https://bytecode.us4.list-manage.com/subscribe/post"
                method="POST"
                noValidate
            >
                <input
                    type="hidden"
                    name="u"
                    value="8442e1debdc9af183ff9fdc66"
                />
                <input type="hidden" name="id" value="ae42f56e38" />
                <InputField
                    type="text"
                    name="MERGE1"
                    id="MERGE1"
                    placeholder="Voornaam"
                    onChange={stateChanger(setName)}
                    value={name}
                />
                <InputField
                    type="text"
                    name="MERGE0"
                    id="MERGE0"
                    placeholder="Emailadres"
                    onChange={stateChanger(setEmail)}
                    value={email}
                />
                <SubscribeButton
                    type="submit"
                    disabled={!canSubmit}
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                >
                    Schrijf in
                </SubscribeButton>
            </NewsletterSubscribeForm>
        </NewsletterSubscribeContainer>
    );
};

export default NewsletterSubscribe;
