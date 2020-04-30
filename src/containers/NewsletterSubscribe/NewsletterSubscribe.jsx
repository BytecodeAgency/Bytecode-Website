import React, { useState } from 'react';
import InputField from '../../components/InputField';
import { NewsletterSubscribeContainer, SubscribeButton } from "./NewsletterSubscribe.components";

const NewsletterSubscribe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const stateChanger = setter => e => setter(e.target.value)
    const canSubmit = name !== "" && email !== "";

    const submit = () => {
        window.alert(`naam ${name} and email ${email}`)
    }

    return (
        <NewsletterSubscribeContainer>
            <InputField type="text" placeholder="Jouw naam" onChange={stateChanger(setName)} value={name} />
            <InputField type="text" placeholder="Jouw emailadres" onChange={stateChanger(setEmail)} value={email} />
            <SubscribeButton onClick={submit} disabled={!canSubmit}>
                Schrijf in
            </SubscribeButton>
        </NewsletterSubscribeContainer>
    )
}

export default NewsletterSubscribe;
