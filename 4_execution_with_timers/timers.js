// setImmediate is twice as fast as setTimeout set to 0 sec 


setTimeout(() => console.log('timeout'), 0);

setInterval(() => console.log('interval'), 2000);

setImmediate(() => console.log('immediate'));