//
// This script simulates a series of logging calls from an application.
//


var log;

// Populate the log variable with an instance of  Log object.
log = new Log();
log.warning('FC-Coffee', 'The coffee is stale.');

log.debug('FC-Coffee', 'Begin makeCoffee()');
log.info('FC-Coffee', 'Disposing of old grounds and filter.');
log.info('FC-Coffee', 'Inserting new filter.');
log.info('FC-Coffee', 'Grinding beans.');

log.info('FC-BeanGrinder', 'Initializing GrindBot3000.');
log.warning('FC-BeanGrinder', 'No response from GrindBot3000. Retrying.');
log.info('FC-BeanGrinder', 'Initializing GrindBot3000.');
log.info('FC-BeanGrinder', 'Grinding...');
log.info('FC-BeanGrinder', 'Grind finished in 33 seconds.');

log.info('FC-Coffee', 'Adding coffee grounds.');
log.info('FC-Coffee', 'Heating water.');
log.warning('FC-Coffee', 'Water took over five minutes to heat. The coffee maker may require servicing.');
log.info('FC-Coffee', 'Hot water, meet coffee grounds. I will give you guys five minutes alone.');
log.debug('FC-Coffee', 'End makeCoffee()');

log.error('FC-Kitchen', 'Something terrible happened!');