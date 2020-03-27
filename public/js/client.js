initChannel('channel1');
initChannel('channel2');
initChannel('channel3');

async function initChannel(name) {
    const el = document.getElementById(name);
    const provider = await fin.InterApplicationBus.Channel.connect(name);
    
    console.log('connected', provider);
    el.setAttribute('class', 'green');

    provider.onDisconnection(channelInfo => {
        el.setAttribute('class', 'yellow');
        console.log('disconnected', channelInfo);
        initChannel(name);
    })
}