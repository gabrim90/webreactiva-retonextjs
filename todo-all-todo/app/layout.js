import 'server-only'
import CreatedLists from '../components/createdLists'

import Head from "./head"
import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/globals.css'
import SupabaseListener from '../components/supabase-listener'
import createClient from '../utils/supabase-server'
import Login from '../components/Login'
import NavMenu from '../components/navMenu'

export const revalidate = 0

export default async function RootLayout({ children }) {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()



  return (
    <html>
      <head>
        <Head></Head>
      </head>
      <body className="flex flex-col h-screen justify-between">
      {!session &&

        <><Login></Login></>}
      
      {session &&

        <>

        <SupabaseListener accessToken={session?.access_token} />

        <Header title="Todo al To-Do"/>
        <div className="w-full flex flex-col lg:flex-row flex-grow overflow-hidden">
            <div className="lg:w-1/2 w-full flex-shrink flex-grow-0 p-3">
              <NavMenu />
            </div>
            <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
            {children}
            </main>
            <div className="lg:w-1/2 w-full flex-shrink flex-grow-0 p-3">
              <div className="sticky top-0 w-full">
                <p className='text-2xl'>Últimas ToDos generadas</p>
                <hr className="my-4 border-b-1 border-indigo-500"/>
                <CreatedLists />
                <ul className="flex sm:flex-col overflow-hidden content-center justify-between">                    
                <li></li>
                </ul>
              </div>

            </div>
        </div>
        <Footer />  
        </>}
      </body>
    </html>
  )
}
