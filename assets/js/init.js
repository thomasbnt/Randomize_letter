console.log('%cDeveloped by Thomas Bnt 🍵\nThis page is Open Source.\nSee https://github.com/thomasbnt/Randomize_letter','color:#314759;font-family:monospace;font-size:.85rem;')
function Load() {
    let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const out = l.charAt(Math.floor(Math.random() * l.length))
    document.getElementById('random').textContent = out
    document.title = out
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(function(reg) {
        console.log('✔ [Service Worker Registered] Offline mode available.\nWith scope: ', reg.scope)
    }).catch(function(err) {
        console.log('ServiceWorker registration failed: ', err)
    })
}

window.addEventListener('beforeinstallprompt', function(e) {
    e.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome)
        if (choiceResult.outcome == 'dismissed') {
            console.log('User cancelled home screen install')
        } else {
            console.log('User added to home screen')
        }
    })
})
