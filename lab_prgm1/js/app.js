if ('serviceWorker' in navigator) {     
    navigator.serviceWorker.register('sw.js').then(reg => {
        console.log("service worker registration done",reg.scope)
    }).catch(err => {
        console.log("service worker is not registered", err)
    }) 
    } 
