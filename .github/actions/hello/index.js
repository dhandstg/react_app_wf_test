const core = require('@actions/core');
const github = require('@actions/github');

try
{
    const name = core.getInput('who-to-greet');
    console.log(`Hello, ${name}`);
    const time = new Date();
    core.setOutput("time", time.toTimeString);
    //Let's checl what is inside the github object!
    console.log(JSON.stringify(github, null, '\t'))

    //In order to force-fail an action, we
    //have to call a function in the core
    //package: core.setFailed()
}
catch (error) {
    core.setFailed(error.message);
}

