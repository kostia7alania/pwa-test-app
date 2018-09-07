if ('serviceWorker' in navigator) {
    console.log('+++')
    navigator.serviceWorker
        .register("../sw.js" /*,{scope:'/help/'}*/ ) //контроллировать тока help
        .then(function () {
            console.log('SW WORK!')
        })
        .catch(e => console.log('[SW] err reg sw => ', e))
}
window.addEventListener('beforeinstallprompt', function (event) {
    console.log('==> before install prompt !!!');
    event.preventDefault();
    deferredPrompt = event;
    return false;
})





var promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('резолв в таймауте');
        //reject({code:500, message: 'an error ocurred!'})
    }, 3000);
})





fetch('https://httpbin.org/ip')
    .then(e => {
        console.log(e);
        return e.json();
    })
    .then(e => console.log(e))
    .catch(e => console.log(e))







    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://httpbin.org/ip');
    xhr.responseType = 'json';
    xhr.onload = function(){
        console.log(xhr.response);
    }
    xhr.onerror = function(){
        console.log('err',xhr);
    }
    xhr.send();





fetch('https://httpbin.org/ip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'cors', // [ cors | no-cors ]
        body: {
            message: 'это данные в посте'
        }
    })
    .then(e => {
        console.log(e);
        return e.json();
    })
    .then(e => console.log(e))
    .catch(e => console.log(e))




promise
    .then(function (text) {
        console.log("зен=> " + text);
        return text;
    }, function (err) {
        console.log(err.code, err.message)
    })
    .then(function (newText) {
        console.log('new=>', newText)
    })
console.log('эт после таймаута')