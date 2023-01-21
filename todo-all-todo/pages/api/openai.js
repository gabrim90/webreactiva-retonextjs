import { Configuration, OpenAIApi } from  "openai"

const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default async function handler(req, res) {
    if (req.method === 'POST') {
        // console.log(req.body)
        const promptText = `${JSON.parse(req.body).promptText}. Creame una lista de pasos.`

        // console.log("🚀 ~ file: openai.js:14 ~ handler ~ promptText", promptText)
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: promptText,
            max_tokens: 2000
            });
            // console.log(completion.data.choices[0].text);
    
    
        res.status(200).json({ response: completion.data.choices[0].text})


    } else {
        res.status(500).json({ response: "Should use a POST request"})
      }



    //const reqText = req.body.text

  }