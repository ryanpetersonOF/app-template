initChannels();

const body = document.body;

async function initChannels() {
    const provider = await fin.InterApplicationBus.Channel.connect('channelName');
    console.log('connected', provider);
    body.setAttribute('class', 'green');

    provider.onDisconnection(channelInfo => {
        body.setAttribute('class', 'yellow');
        console.log('disconnected', channelInfo);
        initChannels();
    })
}