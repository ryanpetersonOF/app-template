fin.desktop.main((args)=>{
    console.log(args);
    console.log(window.location);

    fin.Application.getCurrentSync().setTrayIcon('http://localhost:5555/favicon.ico');

    // system panel mock
    
    // const baseUrl = window.location.href.replace(/\/(index.html)?$/, '');
    // fin.Application.getCurrentSync().setTrayIcon(`${baseUrl}/favicon.ico`);
})