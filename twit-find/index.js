const program = require('commander');
const Twit = require('twit');
const options = Object.assign({'timeout_ms': 60 * 1000},
                                require('./node_modules/credentials.json'))
const log = console.log;


const client = new Twit(options);

program
    .arguments('<query>')
    .option('-l, --limit <limit>', 'Limit return count')
    .action(search)
    .parse(process.argv)

    function search(query) {
        client.get('search/tweets', 
                {q: 'Elon Musk'},
                (err, data, response) => {
                    if(err) {
                        throw Error(err);
                    }
                    // log(data)
                    const tweets = data.statuses.map(obj => obj.text);
                    log(tweets);
                })    
    }