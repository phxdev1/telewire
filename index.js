require("dotenv").config
const core = require('@actions/core');
const Bot = require('node-telegram-bot-api');
const {
    INPUT_STATUS: ipstatus,
    INPUT_TOKEN: tgtoken,
    INPUT_CHAT: chatid,
    INPUT_IU_TITLE: ititle,
    INPUT_IU_NUM: inum,
    INPUT_IU_ACTOR: iactor,
    INPUT_IU_BODY: ibody,
    INPUT_PR_NUM: pnum,
    INPUT_PR_STATE: prstate,
    INPUT_PR_TITLE: ptitle,
    INPUT_PR_BODY: pbody,
    INPUT_COMMIT_MESSAGE: commitMessage,
    GITHUB_REPOSITORY: repo,
    GITHUB_ACTOR: ghactor,
    GITHUB_SHA: sha,
    GITHUB_WORKFLOW: ghwrkflw
} = process.env;

const bot = new Bot(tgtoken)

const evresp = () => {

    if (ipstatus == "success") {

        return `
Build Automation
-------------------------
*🟢 Build Succeeded*

\`Repository:  ${repo}\` 
        
By:            *${ghactor}* 
Message:    ${commitMessage}
        
[Link to Repo ](https://github.com/${repo}/)

`} else {
        return `
Build Automation
-------------------------
*🔴 BUILD FAILED* 
        
\`Repository:  ${repo}\` 
        
By:            *${ghactor}* 
Message:    ${commitMessage}
        
[Link to Repo ](https://github.com/${repo}/)
`}
}

const output = evresp()
bot.sendMessage(chatid, output, { parse_mode: "Markdown" })
