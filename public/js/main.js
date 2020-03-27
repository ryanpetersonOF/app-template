function launchClient() {
    return fin.Application.startFromManifest('http://localhost:5555/client.json');
}

function launchProvider() {
    return fin.Application.startFromManifest('http://localhost:5555/provider.json');
}

function launchProvider2() {
    return fin.Application.startFromManifest('http://localhost:5555/provider2.json');
}

