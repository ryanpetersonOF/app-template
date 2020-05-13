fin.desktop.main((args)=>{
    console.log(args);
    console.log(window.location);

    fin.Application.getCurrentSync().setTrayIcon('http://localhost:5555/favicon.ico');
})