function launchClient() {
    return fin.Application.startFromManifest('http://localhost:5555/client.json')
}

function launchProvider() {
    return fin.Application.startFromManifest('http://localhost:5555/provider.json')
}

window.addEventListener('DOMContentLoaded', async () => {
    fin.InterApplicationBus.Channel.onChannelConnect(console.log);
    fin.InterApplicationBus.Channel.onChannelDisconnect(console.log);
})
