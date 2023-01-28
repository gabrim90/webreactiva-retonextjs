"use client";
import React, { useState, useEffect } from "react";
import createClient from "../utils/supabase-browser";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const waitingTextsList = [
  "🤓 Mantente a la espera... Casi lo tenemos",
  "👾 Parece que el ChatBot está perezoso hoy...",
  "👵🏼 La paciencia es amarga, pero su fruto es dulce... o algo así decía mi abuela",
  "🤺 Ten fé, pequeño padawan...",
  "🖥 Este tiempo lo ibas a desperdiciar igual delante de la pantalla, así que no te muevas...",
];

export default function SearchForm() {
  const [inputText, setInputText] = useState("");
  const [titleList, setTitleList] = useState("");
  const [responseText, setResponseText] = useState("");
  const [ideasList, setIdeasList] = useState([]);
  const [submittedLoading, setSubmittedLoading] = useState(false);
  const [waitingTextsIndex, setWaitingTextsIndex] = useState(0);
  const [textValidationError, setTextValidationError] = useState(false);
  const [showSavedAlert, setShowSavedAlert] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setIdeasList([]);
    setWaitingTextsIndex(0);
  };

  const handleSubmit = (event) => {
    // // console.log(`Request text: ${inputText}`)
    if (inputText.length >= 10) {
      setTextValidationError(false);
      setSubmittedLoading(true);
      setIdeasList([]);
      setWaitingTextsIndex(0);
      setTimeout(() => {
        setWaitingTextsIndex(1);
      }, 3000);
      setTimeout(() => {
        setWaitingTextsIndex(2);
      }, 6000);
      setTimeout(() => {
        setWaitingTextsIndex(3);
      }, 9000);
      setTimeout(() => {
        setWaitingTextsIndex(4);
      }, 12000);
      setTimeout(() => {
        setWaitingTextsIndex(5);
      }, 16000);

      requestOpenAI();
      setTitleList(`ToDos list sobre ${inputText}`);
    } else {
      setTextValidationError(true);
    }
  };
  const requestOpenAI = async () => {
    postData("/api/openai", { promptText: inputText }).then((data) => {
      // // console.log(data)
      setResponseText(data.response);
      setSubmittedLoading(false);
      setWaitingTextsIndex(0);
    });
  };
  const handleSaveList = async (event) => {
    // // console.log(`title list: ${titleList}`)
    const listData = {
      title: titleList,
      points: ideasList,
    };

    postData("/api/lists", { list: listData }).then((data) => {
      setShowSavedAlert(true);
      setTimeout(() => {
        setShowSavedAlert(false);
        setTextValidationError(false);
        setSubmittedLoading(false);
        setIdeasList([]);
        setWaitingTextsIndex(0);
        setInputText("");
      }, 4000);
    });
  };
  useEffect(() => {
    if (responseText) {
      const listItems = responseText.split("\n").filter((element) => {
        return element !== "";
      });
      setIdeasList(listItems);
    }
  }, [responseText]);

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-5 py-2">
        <input
          type="text"
          placeholder="Escribe aquí tu sugerencia"
          className="sm:col-span-4 px-2 m-2 border-2 rounded-md h-12"
          value={inputText}
          onChange={handleInputChange}
          disabled={submittedLoading}
        />
        <button
          type="submit"
          className="p-2 m-2 border-2 rounded-md bg-red-600 text-white font-bold"
          onClick={handleSubmit}
          disabled={submittedLoading}
        >
          Enviar
        </button>
      </div>

      {submittedLoading && (
        <div className="animate-pulse my-4 px-1 text-lg">
          <p>
            {" "}
            🤖 El ChatBotGPT están procesando tu petición para{" "}
            <span className="font-bold">{inputText}</span>.{" "}
          </p>
          <p>
            Puede que tarde unos instantes en función de la carga del ChatBot
          </p>
          {waitingTextsIndex !== 0 && (
            <>
              {waitingTextsList
                .slice(0, waitingTextsIndex)
                .map((item, index) => (
                  <p key={index} className="my-3 pl-2">
                    {item}
                  </p>
                ))}
            </>
          )}
        </div>
      )}
      {textValidationError && (
        <div className="m-4 text-red-600 font-bold">
          <p>
            Debes introducir un texto más largo para poder hacer la petición
          </p>
        </div>
      )}

      {ideasList.length > 0 && (
        <>
          <hr className="my-4 border-b-1 border-indigo-500" />

          <div className="mx-2 my-4">
            <p className="text-lg">
              👉🏼 Estos son los pasos sugeridos para{" "}
              <span className="font-bold">{inputText}</span>
            </p>
          </div>
          <div className="px-4">
            {ideasList.map((item) => (
              <div className="flex mb-4 w-full items-start">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 pt-1"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
          <hr className="my-4 border-b-1 border-indigo-500" />

          <div className="m-4">
            <p className="text-lg">
              💾 Puedes guardar esta lista dándole un nombre y pulsando en
              guardar
            </p>
            {showSavedAlert && (
              <div
                class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 my-4"
                role="alert"
              >
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                </svg>
                <p>
                  La lista se ha guardado correctamente y aparecerá en el
                  listado general.
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-5 py-2 my-2">
              <input
                type="text"
                placeholder="Nombre de la lista "
                value={titleList}
                className="sm:col-span-4 px-2 m-2 border-2 rounded-md h-12"
                onChange={(event) => setTitleList(event.target.value)}
              />
              <button
                type="submit"
                className="p-2 m-2 border-2 rounded-md bg-green-600 text-white font-bold"
                onClick={handleSaveList}
              >
                Guardar lista
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
