function startservice() {
    fin.Application.startFromManifest('http://localhost:5555/service.json')
}

function startapp() {
    fin.Application.startFromManifest('http://localhost:5555/app2.json')
}

function startapp2() {
    //fin.Window.create({url: "http://localhost:5555/test.html", name:"jalandro", autoShow: true})
    fin.Application.startFromManifest('http://localhost:5555/app3.json')
}
