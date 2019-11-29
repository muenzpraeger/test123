const core = require('@actions/core');

async function run() {
    try {
        console.log(core.getInput('json'));
        const jsonResponse = JSON.parse(core.getInput('json'));
        core.info('Status is: ' + jsonResponse);
        core.info('Status is: ' + jsonResponse.status);
        core.info('Username is: ' + jsonResponse.result.username);
        core.setOutput('status', jsonResponse.status === 0 ? true : false);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
