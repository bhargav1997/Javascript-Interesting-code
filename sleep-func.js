
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

async function sleep1(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    });
}


 let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100
 
