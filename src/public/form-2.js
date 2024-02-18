const refForm = document.querySelector("feedback-form")
const pr = new Promise((res, rej) =>{
    if (true) {
        res('123')
    }else{
        rej('123')
    }
})
pr.then((t)=>{
    setTimeout(() => {
        console.log(t);
    }, 5000);
}).then(() => console.log('это финал'))