
initChannels();

async function initChannels() {
    const provider = await fin.InterApplicationBus.Channel.create('channelName');
    console.log('channel created')

    provider.onConnection(identity => {
        console.log('Client connected', identity);
    });

    await provider.onDisconnection(evt => {
        console.log('Client disconnected', `uuid: ${evt.uuid}, name: ${evt.name}`);
    })

    await provider.register('provider-action', (payload, identity) => {
       console.log('Action dispatched by client: ', identity);
       console.log('Payload sent in dispatch: ', payload);

       return { echo: payload };
   });
}