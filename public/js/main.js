async function reloadWindow() {
    fin.Window.getCurrentSync().reload();
}

async function launchChildWindow() {
    fin.Window.create({url: 'http://localhost:5555/child.html', name: Math.random().toString()});
}

async function launchSecondApp() {
    fin.Application.startFromManifest('http://localhost:5555/app2.json');
}