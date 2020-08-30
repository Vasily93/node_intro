const program = require('commander');
const log = console.log;

program
    .arguments('<query>')
    .option('-l, --limit <limit>', 'Limit return count')
    .action(search)
    .parse(process.argv)

    function search(query) {
        log(query);
        log(program.limit);
    }