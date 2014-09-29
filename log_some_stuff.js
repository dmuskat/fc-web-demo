//
// This script simulates a series of logging calls from an application.
//

var log;

// TODO: Populate the log variable with an instance of your Log object.
log = new Log();
log.warning('SofoKitchen', 'The coffee is stale.');

log.debug('SofoCoffee', 'Begin makeCoffee()');
log.info('SofoCoffee', 'Disposing of old grounds and filter.');
log.info('SofoCoffee', 'Inserting new filter.');
log.info('SofoCoffee', 'Grinding beans.');

log.info('SofoBeanGrinder', 'Initializing GrindBot3000.');
log.warning('SofoBeanGrinder', 'No response from GrindBot3000. Retrying.');
log.info('SofoBeanGrinder', 'Initializing GrindBot3000.');
log.info('SofoBeanGrinder', 'Grinding...');
log.info('SofoBeanGrinder', 'Grind finished in 33 seconds.');

log.info('SofoCoffee', 'Adding coffee grounds.');
log.info('SofoCoffee', 'Heating water.');
log.warning('SofoCoffee', 'Water took over five minutes to heat. The coffee maker may require servicing.');
log.info('SofoCoffee', 'Hot water, meet coffee grounds. I will give you guys five minutes alone.');
log.debug('SofoCoffee', 'End makeCoffee()');

log.error('SofoKitchen', 'Something terrible happened!');