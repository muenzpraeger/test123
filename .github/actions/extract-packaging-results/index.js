const core = require('@actions/core');

async function run() {
    try {
        console.log(core.getInput('json'));
        const jsonResponse = core.getInput('json');
        core.info('Status is: ' + jsonResponse);
        core.setOutput('status', jsonResponse.status === 0 ? true : false);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
