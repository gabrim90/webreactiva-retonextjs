"use client"
import React, { useState, useEffect } from "react"
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


export default function SearchForm(){
  const [inputText, setInputText] = useState("")
  const [responseText, setResponseText] = useState("")
  const [submittedLoading, setSubmittedLoading] = useState(false)
  const [ideasList, setIdeasList] = useState([])
  
  
  const handleInputChange = (event)=>{
        setInputText(event.target.value)
    }
      
  const handleSubmit = (event)=>{
        console.log(`Request text: ${inputText}`)
        setSubmittedLoading(true)
        requestOpenAI()
    }
  const requestOpenAI = async () =>{
    postData('/api/openai', { promptText: inputText })
    .then((data) => {
        console.log(data)
        setResponseText(data.response)
        setSubmittedLoading(false)

    });
  }

  useEffect(() => {
    if(responseText) {
        
        const listItems = responseText.split("\n").filter((element)=>{
            return element!==""
        })
        setIdeasList(listItems)


    }
  }, [responseText])
  

  return(
    <section>
      <div className="grid grid-cols-5 py-2">
        <input type="text" placeholder="Escribe aquí tu sugerencia" className="col-span-4 px-2 m-2 border-2 rounded-md" value={inputText} onChange={handleInputChange}/>
        <button type="submit" className="px-2 m-2 border-2 rounded-md" onClick={handleSubmit}>Enviar</button>
    </div>
    {submittedLoading && 
        <div className="p-4 m-4">Los oompa loompa están procesando tu petición para {inputText}</div>
    }

<div className="m-4">

        {ideasList.map(item => 
                <div className="flex items-center mb-4 w-full">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">{item}</label>
                </div>
            
            )}
</div>
  </section>
  )
}
