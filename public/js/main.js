let app = null;

fin.System.addListener('application-started', (event) => {
    console.log(event);
    document.getElementById('closeButton').removeAttribute('class');
});


fin.System.addListener('application-closed', (event => {
    console.log(event);
    document.getElementById('closeButton').setAttribute('class', 'hidden');
}));

async function launchSecondApp() {
    app = await fin.Application.startFromManifest('http://localhost:5555/app2.json');
}

async function closeSecondApp() {
    if (app) {
        await app.quit();
    }
}
