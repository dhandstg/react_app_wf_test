const core = require('@actions/core');
const github = require('@actions/github');

try
{   
    const githubToken = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const assignees = core.getInput('assignees');
    
    /*const octokit =  new github.getOctokit(githubToken);
    const newIssue = new octokit.issues();
    const response = newIssue.create({
        ...github.context.repo,
        title,
        body,
        assignees: assignees ? assignees.split('\n') : undefined

    });
    */
   // Octokit.js
// https://github.com/octokit/core.js#readme
    
    const octokit = new github.getOctokit(githubToken);
    response = null;
    send_post(octokit, github, title, body, assignees).then(resp => core.setOutput('issue', JSON.stringify(resp.data)));
    
}
catch (error) {
    core.setFailed(error.message);
}

async function send_post(octokitObj, githubObj, title, body, assignees)
{
    await octokitObj.request(`POST /repos/${githubObj.context.repo.owner}/${githubObj.context.repo.repo}/issues`, {
        owner: `${githubObj.context.repo.owner}`,
        repo: `${githubObj.context.repo.repo}`,
        title: `${title}`,
        body: `${body}`,
        assignees: assignees ? assignees.split('\n') : undefined
    })
}