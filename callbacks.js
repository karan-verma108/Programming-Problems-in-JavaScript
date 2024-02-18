const funA = (callback) => {
    console.log(`hello im function a`);
    callback();
}

const funB = () => {
    console.log(`hello im function b`);
}

funA(funB);