import { config } from "dotenv"
config()

/* old version
// import { Configuration, OpenAIApi } from "openai"

// const openai = new OpenAIApi(new Configuration({
//     apiKey: process.env.API_KEY
// }))
*/

import { OpenAI } from "openai"
import readline from "readline"

const openai = new OpenAI({ 
    apiKey: process.env.API_KEY
})

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt()
userInterface.on('line', async input => {
    const res = await openai
    // .createChatCompletion({
    .chat.completions.create({
        model: "gpt-3.5-turbo",
        // model: "text-embedding-3-small",
        messages: [{ role: "user", content: input }],
    })
    res.choices.forEach(out => console.log(out.message))
    userInterface.prompt()
    // .then(res => {
    //     // console.log(res.data.choices[0].message.content)
    //     console.log(res)
    //     res.choices.forEach(out => console.log(out.message))
    // })
})

