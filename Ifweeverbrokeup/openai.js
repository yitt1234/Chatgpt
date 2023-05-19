// openai api key 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
const temp1 = localStorage.getItem('temp');
const wind3 = localStorage.getItem('wind2');
import { Configuration, OpenAIApi } from 'https://cdn.skypack.dev/openai';

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Our local current weather is " + temp1 + "degrees Celsius and wind is " + wind3 + "So What do you recommend for today's outfit?" ,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
}).then((result)=>{
    console.log(result.data.choices[0].text)
$('#gpt').text(result.data.choices[0].text)

})
