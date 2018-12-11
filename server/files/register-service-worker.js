/* eslint-disable no-restricted-globals, no-undef, no-console, prettier/prettier, max-len */
/* Service worker conflicts with serving pdf's. When that's fixed we'll reregister service workers.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/service-worker.js', {
        scope: '/',
    })
        .then(reg => console.log(`Service worker registered. Scope is ${reg.scope}`))
        .catch(err => `Error while registering service worker: ${err}`);
    } else {
    console.log('Service worker not found in navigator');
}
*/

// Removes old service workers
if ('serviceWorker' in navigator) {
    console.log('Service worker in navigator');
    navigator.serviceWorker.getRegistrations()
        .then(registrations => {
            console.log('sw\'s found, now removing them');
            registrations.forEach(registration => {
                console.log('Removing sw:');
                console.log(registration);
                registration.unregister();
                console.log('Removed sw!');
            });
        });
}
