const core = require('@actions/core');
const github = require('@actions/github');

try
{   
    const githubToken = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const assignees = core.getInput('assignees');

    const octokit =  new github.getOctokit(githubToken);
    const newIssue = new octokit.issues();
    const response = newIssue.create({
        ...github.context.repo,
        title,
        body,
        assignees: assignees ? assignees.split('\n') : undefined

    });

    core.setOutput('issue', JSON.stringify(response.data));
}
catch (error) {
    core.setFailed(error.message);
}