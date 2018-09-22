const axios = require('axios');

const validateHandlePost = (contact, email, phone, contents, res) => {
    if (!contact || !email || !phone || !contents) {
        res.status(400).send({ error: 'Voer alle velden in' });
        return false;
    }
    return true;
};

const handleError = res => {
    res.status(500).send({ error: 'Er ging iets fout op onze server' });
};

const createMessage = (contact, email, phone, contents) =>
/* eslint-disable */
`@channel *Goed nieuws!*
Er is een nieuw bericht via het Bytecode.nl contactformulier!

Naam: ${contact}
Email: <mailto:${email}|${email}>
Telefoon: ${phone}

Bericht:
${contents}`;
/* eslint-enable */

const validateDataAndSendMessage = async (req, res) => {
    const { contact, email, phone, contents } = req.body; // eslint-disable-line
    if (validateHandlePost(contact, email, phone, contents, res) === false) {
        return;
    }

    const webhookUrl = process.env.CONTACT_FORM_WEBHOOK;
    const payload = { text: createMessage(contact, email, phone, contents) };
    try {
        const messageToWebhook = await axios.post(webhookUrl, payload);
        res.sendStatus(messageToWebhook.status);
    } catch (e) {
        handleError(res);
    }
};

const handlePost = (req, res) => {
    try {
        validateDataAndSendMessage(req, res);
    } catch (e) {
        handleError(res);
    }
};

module.exports = handlePost;
