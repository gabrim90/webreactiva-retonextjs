import Head from "./head"
import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Head></Head>
      </head>
      <body className="flex flex-col h-screen justify-between">
        <Header title="Todo al To-Do"/>
        <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
            <div className="sm:w-1/2 lg:w-1/3 w-full flex-shrink flex-grow-0 p-4">
                <div className="sticky top-0 p-4 w-full">
                    <ul className="flex sm:flex-col overflow-hidden content-center justify-between">                      
                      <li><a href="/">Inicio</a></li>
                      <li><a href="/create">Crear To-Do</a></li>
                      <li><a href="/view" >Ver mis To-Dos</a></li>
                    </ul>
                </div>
            </div>
            <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
            {children}
            </main>
            <div className="sm:w-1/2 lg:w-1/3 w-full flex-shrink flex-grow-0 p-4">
              Últimas preguntas realizadas
            </div>
        </div>
        <Footer />  
      </body>
    </html>
  )
}
