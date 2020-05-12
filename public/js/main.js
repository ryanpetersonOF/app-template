let app;
let last;
let count = 0;

function startApp() {
    fin.Application.start({url: 'https://google.com', uuid: Math.random().toString(), name: Math.random().toString()}).then(application => app = application);
}

function closeApp() {
    app.quit();
}

function cycle() {
    if (count > 0) {
        last.teardown();
    }

    last = new test(count);
    count++;
}

setInterval(() => {
    document.getElementById('startedListeners').textContent = fin.System.listenerCount('application-started');
    document.getElementById('closedListeners').textContent = fin.System.listenerCount('application-closed');

}, 250)


class test {
    constructor(signature) {
        this.sig = signature;
        this.startRef = this.startListenerFunc.bind(this);
        this.closeRef = this.closedListenerFunc.bind(this);
        fin.System.addListener('application-started', this.startRef).then(() => console.log(this.sig, 'added application-started'));
        fin.System.addListener('application-closed', this.closeRef).then(() => console.log(this.sig, 'added application-closed'));
    }

    startListenerFunc() {
        console.log(this.sig, 'app starting');
        document.getElementById('lastLog').textContent = Date.now();
    }

    closedListenerFunc() {
        console.log(this.sig, 'app closing');
        document.getElementById('lastLog').textContent = Date.now();
    }

    teardown() {
        fin.System.removeListener('application-started', this.startRef).then(() => console.log(this.sig, 'removed application-started'));
        fin.System.removeListener('application-closed',  this.closeRef).then(() => console.log(this.sig, 'removed application-closed'));
    }
}