// Remove these to see changes!
initChannel('channel1');
initChannel('channel2');
initChannel('channel3');

async function initChannel(name) {
    await fin.InterApplicationBus.Channel.create(name);
    console.log(`channel ${name} created`);
}