import { Box, Button, FormHelperText, TextField, Typography, Chip, Avatar} from '@mui/material';
import {useState, useEffect} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";


export default function Chat(){

    const [message, setMessage] = useState([{
        
        name: "Ceca",
        message: `Hey Jenny! I'm excited to help you learn more about making your home more sustainable. If you haven't already,
        Al please go to your profile and tell me a little bit about your goals and experience so that I can tailor the
        experience to your needs. Then you can ask me anything you want about sustainability at home`,
        type: 'answer'
    }])
    const [user, setUser] = useState();
    useEffect(() =>{
        const user = localStorage.getItem("user");
        axios.get(`/api/user/${user}`)
        .then(res => setUser(res.data.data.name))
        .catch(error => console.log(error));
    },[])

    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const response = openai.listEngines();

    var prompt_bases = {
        home: "home",
        general: "general",
        beko: "The following is the description of Beko an AI assistant who is an expert in designing sustainable homes. The AI assistant is for people who are renvoating or buying a new home and want to learn more about how to make sustainable choices throughout the process:  Journey:\n Their journey started in 1955 when large home appliances first became a fixture in every household. Over the past 60 years, they've made it a point to change the lives of their customers with innovating products that both meet their needs and are more sustainable for the environment. Their desire to innovate for the good of their customers and the environment has already taken quite them a long way. They are a global brand which operates in more than 135 countries today. They are also the fastest-growing brand in the European large white goods market with a wide range of innovative and sustainable products. All these experiences and their brand heritage has made them one of the top 3 large home appliance brands in Europe*. And they keep innovating for an even healthier generation and a healthier planet.\nPurpose: Their aim is to empower new generations to live healthier. They want to inspire everyone to Live like a Pro. A Pro is not necessarily a professional athlete. Everyone can be a Pro, each in their own way, from the way they handle family matters to the way they cook or protect environment. Inspired by their passion to impact people’s lives through their technologies, they want to democratize the healthy lifestyle. This can be through products which support healthy lifestyle or which help to save time for healthy activities or with technologies that are more sustainable for healthier environment and so healthier people.\n Initiative: Their First Global Initiative to fight childhood obesity: #EatLikeAPro In 2017, they launched a global initiative to combat the dramatic rise in the rates of childhood obesity across the globe: Eat Like A Pro. The objective of #EatLikeAPro is to help parents in getting the children to eat healthier. Knowing that children always do what their heroes do, they joined forces with famous athletes from all around the world to show how the biggest stars got to where they are by using every health benefit to maximize their performance.\nWork: At Beko they're developing appliances that reduce energy consumption and waste. In 2020, their production plants became carbon neutral and they'll be continuing to invest in renewable energy and energy efficiency to product our environment in the decades to come. Because a healthy planet, means a healthy future. They are making efforts to reduce marine pollution by transforming recycled fishing nets and industrial thread waste into high performance, thermally resistant oven parts. Tons of fishing nets and lines are lost every year and this equipment will continue to trap marine animals for many decades to come. By upcycling these nets and using them in their RecycledNet® ovens, they can begin to take small steps to restore the health of our oceans, helping to protect endangered species in the process. At Beko, they are continually working to make their appliances more environmentally friendly, reducing running costs in the process. Whilst their RecycledTub® washing machines and washer dryers use recycled plastic bottles in their tubs, their RecycledNet® ovens feature parts made from recycled fishing nets and industrial thread waste. They remain committed to developing products that tackle the challenges facing our planet today, protecting our environment for future generations.\n The AI assistant is supportive and encouraging when talking with users and tries to help them learn about sustainable living. If the topic is about materials the assistant will direct the user to https://www.barbuliannodesign.com/post/eco-friendly-building-materials-list. If the topic is about appliances the assistant will direct the user to https://www.beko.co.uk/ and https://www.beko.co.uk/support/buying-guides. If the topic is about lighting the assistant will direct the user to https://www.lightology.com/index.php?module=how_to&sub=sustainable-lighting-tips. If the topic is about heating and cooling the assistant will direct the user to https://home.howstuffworks.com/home-improvement/construction/green/10-green-heating-and-cooling-technologies.htm \n\nThe following is a conversation with Beko and a human:"
      };
      var bases_json = JSON.parse(JSON.stringify(prompt_bases));
      var prompt = "";
      
      //this will be the message than the use types and enters into the chat box
      const user_message = "what is climate change";
      
      //this function will take in the user message and assign the classification that it is most likely related to.
      //will return the label/class that is selected
       async function classify(message) {
        const openai = new OpenAIApi(configuration);
        const response = await openai.createClassification({
          search_model: "davinci",
          model: "davinci",
          examples: [
            ["What is climate change?", "general"],
            ["Tell me about global warming", "general"],
            ["why should we be sustainable", "general"],
            ["What is sustainability", "general"],
            ["what affects the climate?", "general"],
            ["Why shoul I care about climate change?", "general"],
            ["What can I do to be more sustainable?", "general"],
            ["What can I do to reduce my carbon footprint?", "general"],
            ["What is a carbon footprint?", "general"],
            ["I want to reduce my carbon footprint", "general"],
            ["Give me some resources to learn more about the future of climate change", "general"],
            ["Give me some resources to learn more about the climate change trends", "general"],
            ["Who are the experts in climate change?", "general"],
            ["Which country is the most sustainable?", "general"],
            ["how does climate change affect the environment?", "general"],
            ["how does CO2 affect the environment", "general"],
            ["does thesun cause climate change", "general"],
            ["what will climate change do to my home", "general"],
            ["How will climate change affect my home?", "general"],
            ["will my home be impacted by climate change", "general"],
            ["what will climate change do to my home", "general"],
            ["I want to reduce my house hold energy consumption", "home"],
            ["I want to reduce my energy consumption", "home"],
            ["I want to reduce my house hold carbon footprint", "home"],
            ["How do I to reduce my house hold energy consumption", "home"],
            ["What can I do to reduce my house hold energy consumption", "home"],
            ["What can I do to reduce my house hold carbon footprint", "home"],
            ["Which part of my house uses the most energy?", "home"],
            ["Which appliance is the worst for the environment", "home"],
            ["What parts of my house contribute to the carbon footprint?", "home"],
            ["Is my fridge bad for the environment", "home"],
            ["Is my stove bad for the environment", "home"],
            ["Is my oven bad for the environment", "home"],
            ["Is my toaster bad for the environment", "home"],
            ["Is my microwave bad for the environment", "home"],
            ["Is my dishwasher bad for the environment", "home"],
            ["Is my washing machine bad for the environment", "home"],
            ["Is my dryer bad for the environment", "home"],
            ["Is my blender bad for the environment", "home"],
            ["I want to buying a new home", "home"], 
            ["I want to getting a new house", "home"], 
            ["I want to household carbon footprint", "home"], 
            ["I want to household energy consumption", "home"], 
            ["How do I reduce energy consumption", "home"], 
            ["How do I live more sustainably", "home"], 
            ["How do I make my house better for the world", "home"], 
            ["How do I make my house more efficient", "home"], 
            ["How do I live good for the world", "home"], 
            ["How do I buying a new home", "home"], 
            ["How do I getting a new house", "home"], 
            ["How do I household carbon footprint", "home"], 
            ["How do I household energy consumption", "home"], 
            ["Tell me how to reduce energy consumption", "home"], 
            ["Tell me how to live more sustainably", "home"], 
            ["Tell me how to make my house better for the world", "home"], 
            ["Tell me how to make my house more efficient", "home"], 
            ["Tell me how to live good for the world", "home"], 
            ["Tell me how to buying a new home", "home"], 
            ["Tell me how to getting a new house", "home"], 
            ["Tell me how to household carbon footprint", "home"], 
            ["Tell me how to household energy consumption", "home"], 
            ["Give me information about how to reduce energy consumption", "home"], 
            ["Give me information about how to live more sustainably", "home"], 
            ["Give me information about how to make my house better for the world", "home"], 
            ["Give me information about how to make my house more efficient", "home"], 
            ["Give me information about how to live good for the world", "home"], 
            ["Give me information about how to buying a new home", "home"], 
            ["Give me information about how to getting a new house", "home"], 
            ["Give me information about how to household carbon footprint", "home"], 
            ["Give me information about how to household energy consumption", "home"], 
            ["Teach me about reduce energy consumption", "home"], 
            ["Teach me about live more sustainably", "home"], 
            ["Teach me about make my house better for the world", "home"], 
            ["Teach me about make my house more efficient", "home"], 
            ["Teach me about live good for the world", "home"], 
            ["Teach me about buying a new home", "home"], 
            ["Teach me about getting a new house", "home"], 
            ["Teach me about household carbon footprint", "home"], 
            ["Teach me about household energy consumption", "home"], 
            ["What should I do about reduce energy consumption", "home"], 
            ["What should I do about live more sustainably", "home"], 
            ["What should I do about make my house better for the world", "home"], 
            ["What should I do about make my house more efficient", "home"], 
            ["What should I do about live good for the world", "home"], 
            ["What should I do about buying a new home", "home"], 
            ["What should I do about getting a new house", "home"], 
            ["What should I do about household carbon footprint", "home"], 
            ["What should I do about household energy consumption", "home"], 
            [" reduce energy consumption", "home"], 
            [" live more sustainably", "home"], 
            [" make my house better for the world", "home"], 
            [" make my house more efficient", "home"], 
            [" live good for the world", "home"], 
            [" buying a new home", "home"], 
            [" getting a new house", "home"], 
            [" household carbon footprint", "home"], 
            [" household energy consumption", "home"], 
            ["I want to be sustainable", "general"], 
            ["I want to reduce my carbon footprint", "general"], 
            ["I want to save the environment", "general"], 
            ["I want to help the planet", "general"], 
            ["I want to be good for earth", "general"], 
            ["I want to save the trees", "general"],
            ["I dont know about appliances", "beko"], 
            ["I dont know about fridges", "beko"], 
            ["I dont know about washers", "beko"], 
            ["I dont know about dishwashers", "beko"], 
            ["I dont know about laundry machines", "beko"], 
            ["I dont know about sustainable appliances", "beko"], 
            ["I dont know about vaccums", "beko"], 
            ["I dont know about microwaves", "beko"], 
            ["I dont know about home electronis", "beko"], 
            ["I dont know about kitchen appliances", "beko"], 
            ["I dont know about appliance information", "beko"], 
            ["tell me about appliances", "beko"], 
            ["tell me about fridges", "beko"], 
            ["tell me about washers", "beko"], 
            ["tell me about dishwashers", "beko"], 
            ["tell me about laundry machines", "beko"], 
            ["tell me about sustainable appliances", "beko"], 
            ["tell me about vaccums", "beko"], 
            ["tell me about microwaves", "beko"], 
            ["tell me about home electronis", "beko"], 
            ["tell me about kitchen appliances", "beko"], 
            ["tell me about appliance information", "beko"], 
            ["give me resources on appliances", "beko"], 
            ["give me resources on fridges", "beko"], 
            ["give me resources on washers", "beko"], 
            ["give me resources on dishwashers", "beko"], 
            ["give me resources on laundry machines", "beko"], 
            ["give me resources on sustainable appliances", "beko"], 
            ["give me resources on vaccums", "beko"], 
            ["give me resources on microwaves", "beko"], 
            ["give me resources on home electronis", "beko"],
            ["give me resources on kitchen appliances", "beko"],
              ["give me resources on appliance information", "beko"],
              ["how do I pick appliances", "beko"], 
              ["how do I pick fridges", "beko"], 
              ["how do I pick washers", "beko"], 
              ["how do I pick dishwashers", "beko"], 
              ["how do I pick laundry machines", "beko"], 
              ["how do I pick sustainable appliances", "beko"], 
              ["how do I pick vaccums", "beko"], 
              ["how do I pick microwaves", "beko"], 
              ["how do I pick home electronis", "beko"], 
              ["how do I pick kitchen appliances", "beko"], 
              ["how do I pick appliance information", "beko"], 
              ["what is the best company for appliances", "beko"], 
              ["what is the best company for fridges", "beko"], 
              ["what is the best company for washers", "beko"], 
              ["what is the best company for dishwashers", "beko"], 
              ["what is the best company for laundry machines", "beko"], 
              ["what is the best company for sustainable appliances", "beko"], 
              ["what is the best company for vaccums", "beko"], 
              ["what is the best company for microwaves", "beko"], 
              ["what is the best company for home electronis", "beko"], 
              ["what is the best company for kitchen appliances", "beko"], 
              ["what is the best company for appliance information", "beko"], 
              ["where can I go to learn more about appliances", "beko"], 
              ["where can I go to learn more about fridges", "beko"], 
              ["where can I go to learn more about washers", "beko"], 
              ["where can I go to learn more about dishwashers", "beko"], 
              ["where can I go to learn more about laundry machines", "beko"], 
              ["where can I go to learn more about sustainable appliances", "beko"], 
              ["where can I go to learn more about vaccums", "beko"], ["where can I go to learn more about microwaves", "beko"], ["where can I go to learn more about home electronis", "beko"], ["where can I go to learn more about kitchen appliances", "beko"], ["where can I go to learn more about appliance information", "beko"], ["who is an indutry leader in appliances", "beko"], ["who is an indutry leader in fridges", "beko"], ["who is an indutry leader in washers", "beko"], ["who is an indutry leader in dishwashers", "beko"], ["who is an indutry leader in laundry machines", "beko"], ["who is an indutry leader in sustainable appliances", "beko"], ["who is an indutry leader in vaccums", "beko"], ["who is an indutry leader in microwaves", "beko"], ["who is an indutry leader in home electronis", "beko"], ["who is an indutry leader in kitchen appliances", "beko"], ["who is an indutry leader in appliance information", "beko"]
          ],
          query:message,
          labels: ["general", "home", "beko"],
        });
        return response.label;
        
      }
      
      //this function takes in the class/label that was produced from the classify function and formats the prompt 
      //with information from the above dictionary based on which class it is.
      //will return a string that is the prommpt for the completion function
      function formatPrompt(classification){
        if (classification == "General") {
          prompt += bases_json.general;
        }
        else if (classification == "Home"){
          prompt += bases_json.home;
        }
        else{
          prompt += bases_json.beko;
        }
        prompt += `\nUser:${user_input}\nAI:`
        return prompt
      }
      
      //this function takes in the prompt that was built using the classify and formatPrompt 
      //functions and send it to the /completion API endpoint to get the text that will be the AI response to the user.
      //will return a string that is the text that should be sent back to the user from the AI bot in the chat windwo
      async function completion(prompt){
        const completion = await openai.createCompletion("text-davinci-002", {
          prompt: prompt,
          max_tokens: 120,
        });
        return completion.data.choices[0].text;
      }
      
      //uses all of the functions together to take in the user message from the chat window and return the AI bot response.
      function getResponse(message) {
        const classification = classify(message);
        return response = completion(formatPrompt(classification));
      }
      

    const formik = useFormik({
        initialValues: {
          message: '',
          submit: null
        },
        validationSchema: Yup.object({
          message: Yup
            .string()
            .max(255)
            .required('message is required')
        }),
        onSubmit: async (values, helpers) => {
          try {
              setMessage(prev => [...prev, {
                  name: user,
                  message: values.message,
                  type: 'question'
              }])

              setMessage(prev => [...prev, {
                name: "Ceca",
                message: "I am Ceca",
                type: 'answer'
            }])

            values.message = ""
            const a = getResponse(values.message)
            console.log(a);
          } catch (err) {
            console.error(err);
    
            if (isMounted()) {
              helpers.setStatus({ success: false });
              helpers.setErrors({ submit: err.message });
              helpers.setSubmitting(false);
            }
          }
        }
      });

  return (
    
    <Box 
    sx={{
        minWidth:"100%",
        minHeight: "100vh",
    }}>
      
      {message.length ? 
      message.map(msg => {
          return (<>
          {
              msg.type === 'question' ?
              <Box
              sx={{
                  align: 'right'
              }}
              key={msg.title}
              >
              <Chip
                avatar={<Avatar sx={{ bgcolor: "#81c784" }} alt={msg.name.slice(0,1)} src="/static/images/avatar/1.jpg" />}
                label=
                {msg.message}
                variant="outlined"
                sx={{
                    m: 2
                }}
              />
                </Box> :
                <Box 
                key={msg.title}
                sx={{
                    align: 'left'
                }}>
                    <Chip sx={{color: 'white' , backgroundColor: '#42a5f5', m: 1}} 
                    avatar={<Avatar sx={{ bgcolor: "#ba68c8" }} alt={msg.name.slice(0,1)} src="/static/images/avatar/1.jpg" />}
                    label=
                    {msg.message}
                    variant="outlined"
                    />
                </Box>
          }
          </>
          )
      }) : null}<form
      noValidate
      onSubmit={formik.handleSubmit}
      
    >
      <TextField
        error={Boolean(formik.touched.message && formik.errors.message)}
        fullWidth
        helperText={formik.touched.message && formik.errors.message}
        label="message"
        margin="normal"
        name="message"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <Box sx={{ mt:2, mb: 5 }}>
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Send
        </Button>
      </Box>
    </form>
    
    </Box>
  );
};