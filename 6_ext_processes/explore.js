const { exec, spawn } = require('child_process');
const log = console.log;

// const cmd = 'ls -la /';
// const child = exec(cmd, (err, stdout, stderr) => {
//     if(err) {
//         log(`stdout: ${stdout}`);
//         log(`stderr: ${stderr}`);
//     }
// });
// log(child);

const node = spawn('node', ['-v']);
node.stdout.on('data', (data) => {
    log(data.toString())
});

//thise modules useful for scalability