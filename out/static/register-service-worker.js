/* eslint-disable no-restricted-globals, no-undef, no-console, prettier/prettier, max-len */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/static/service-worker.js', {
            scope: '/static/',
        })
        .then(reg => console.log(`Service worker registered. Scope is ${reg.scope}`))
        .catch(err => `Error while registering service worker: ${err}`);
} else {
    console.log('Service worker not found in navigator');
}
