const cron = require('node-cron')

console.log('start cron')

cron.schedule('*/2 * * * *', () => {
    console.log('run every 2 minutes');
});
