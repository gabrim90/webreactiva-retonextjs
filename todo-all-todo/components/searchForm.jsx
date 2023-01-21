"use client"
import React, { useState, useEffect } from "react"
import createClient from '../utils/supabase-browser'

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
  const [titleList, setTitleList] = useState("")
  const [responseText, setResponseText] = useState("")
  const [ideasList, setIdeasList] = useState([])
  const [submittedLoading, setSubmittedLoading] = useState(false)
  const [textValidationError, setTextValidationError] = useState(false)
  
  
  const handleInputChange = (event)=>{
        setInputText(event.target.value)
    }
      
  const handleSubmit = (event)=>{
        console.log(`Request text: ${inputText}`)
        if(inputText.length>=10){
          setTextValidationError(false)
          setSubmittedLoading(true)
          requestOpenAI()
          setTitleList(`ToDos list sobre ${inputText}`)
        }else{
          setTextValidationError(true)

        }
        

    }
  const requestOpenAI = async () =>{
    postData('/api/openai', { promptText: inputText })
    .then((data) => {
        console.log(data)
        setResponseText(data.response)
        setSubmittedLoading(false)

    });
  }
  const  handleSaveList = async (event)=>{
  
    console.log(`title list: ${titleList}`)
    const listData = {
      title: titleList,
      points: ideasList
    }

    postData('/api/lists', { list: listData })
    .then((data) => {
        console.log(data)
  
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
    <section className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-5 py-2">
        <input type="text" placeholder="Escribe aquí tu sugerencia" className="col-span-4 px-2 m-2 border-2 rounded-md" value={inputText} onChange={handleInputChange} disabled={submittedLoading}/>
        <button type="submit" className="p-2 m-2 border-2 rounded-md bg-red-600 text-white font-bold" onClick={handleSubmit} disabled={submittedLoading} >Enviar</button>
    </div>
    {submittedLoading && 
        <div className="my-4 px-1 text-lg"><p>🤖 El ChatBotGPT están procesando tu petición para <span className="font-bold">{inputText}</span></p></div>
    }
    {textValidationError && 
        <div className="m-4 text-red-600 font-bold"><p>Debes introducir un texto más largo para poder hacer la petición</p></div>
    }


{ideasList.length > 0 && 
  <>
              <hr className="my-4 border-b-1 border-indigo-500"/>

<div className="mx-2 my-4">
          <p className="text-lg">👉🏼 Estos son los pasos sugeridos para <span className="font-bold">{inputText}</span></p></div>
          <div className="px-4">
          {ideasList.map(item => 
                <div  className="flex mb-4 w-full items-start">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 pt-1" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900">{item}</label>
                </div>
            
            )} 
            </div>
              <hr className="my-4 border-b-1 border-indigo-500"/>

        <div className="m-4">

          <p className="text-lg">💾 Puedes guardar esta lista dándole un nombre y pulsando en guardar</p>
        <div className="grid grid-cols-5 py-2 my-2">
        <input type="text" placeholder="Nombre de la lista " value={titleList} className="col-span-4 px-2 m-2 border-2 rounded-md" onChange={event => setTitleList(event.target.value)} />
        <button type="submit" className="p-2 m-2 border-2 rounded-md bg-green-600 text-white font-bold"  onClick={handleSaveList} >Guardar lista</button>
    </div>
        
        </div>
        
        </>
        }  
  </section>
  )
}
