import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function inputHandler(string) {
    return string
        .split(' ')
        .map(item => item.split('').reverse().join(''))
        .reverse()
        .join(' ');
}

rl.on('line', inputData => {
    process.stdout.write(inputHandler(inputData))
})