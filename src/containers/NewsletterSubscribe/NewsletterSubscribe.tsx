import React, { useState } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/InputField' was resolved ... Remove this comment to see the full error message
import InputField from '../../components/InputField';
import {
    NewsletterSubscribeContainer,
    NewsletterSubscribeForm,
    SubscribeButton,
} from './NewsletterSubscribe.components';

const NewsletterSubscribe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const stateChanger = (setter: any) => (e: any) => setter(e.target.value);
    const canSubmit = name !== '' && email !== '';

    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NewsletterSubscribeContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h4>Schrijf je in voor onze nieuwsbrief!</h4>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p>
                Maandelijks brengen wij een interessante en leerzame nieuwsbrief
                uit met onder andere onze ‘Bytecast’, nieuwe artikelen of
                e-books, en natuurlijk updates over ons team en werkzaamheden.
            </p>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <NewsletterSubscribeForm
                action="https://bytecode.us4.list-manage.com/subscribe/post"
                method="POST"
                noValidate
            >
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <input
                    type="hidden"
                    name="u"
                    value="8442e1debdc9af183ff9fdc66"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <input type="hidden" name="id" value="ae42f56e38" />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <InputField
                    type="text"
                    name="MERGE1"
                    id="MERGE1"
                    placeholder="Voornaam"
                    onChange={stateChanger(setName)}
                    value={name}
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <InputField
                    type="text"
                    name="MERGE0"
                    id="MERGE0"
                    placeholder="Emailadres"
                    onChange={stateChanger(setEmail)}
                    value={email}
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
