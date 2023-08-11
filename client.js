const DATA = {};

DATA.generate_period = 3;
DATA.send_period = 4;
DATA.generate_period_2 = 2;
DATA.send_period_2 = 3;

const delay = (delaySec) => {
   return new Promise(resolve => setTimeout(resolve, delaySec * 1000));
}


const myWs = new WebSocket('ws://64d6077116cca64bd6ac6f6f--storied-choux-49f73e.netlify.app/:9000');
myWs.onopen = function () {
    console.log('I am connected');
};

const wsSendCoordinates = async (e) => {
    await delay(DATA.generate_period);
    let interval;

    if (interval) clearTimeout(interval)

    interval = setInterval(() => {
        myWs.send(JSON.stringify({action: 'COORD', data: ''}));
    }, DATA.send_period * 1000);
}

const workerCPUEvent = async () => {
    await delay(DATA.generate_period_2);
    let interval;

    if (interval) clearTimeout(interval)

    interval = setInterval(() => {
        myWs.send(JSON.stringify({action: 'CPU', data: 'go'}));
    }, DATA.send_period * 1000);

}




document.addEventListener("mousemove", wsSendCoordinates, false);