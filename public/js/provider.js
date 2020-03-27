initChannels();

async function initChannels() {
    // Remove me to make all of your problems go away
    await fin.InterApplicationBus.Channel.create('channelNamexyz');

    const provider = await fin.InterApplicationBus.Channel.create('channelName');
    console.log('channel created')

    provider.onConnection(identity => {
        console.log('Client connected', identity);
    });

    await provider.onDisconnection(evt => {
        console.log('Client disconnected', `uuid: ${evt.uuid}, name: ${evt.name}`);
    });
}