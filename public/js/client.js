initChannels();

async function initChannels() {
    const provider = await fin.InterApplicationBus.Channel.connect('channelName');
    console.log('connected');

    provider.onDisconnection(channelInfo => {
        // handle the channel lifecycle here - we can connect again which will return a promise
        // that will resolve if/when the channel is re-created.
        console.log('disconnect', channelInfo);
    })
}