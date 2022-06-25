module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/dhandstg/react_app_wf_test",
    plugins: ["@semantic-release/commit-analyzer",
              "@semantic-release/release-notes-generator",
              "@semantic-release/github"
             ]
}