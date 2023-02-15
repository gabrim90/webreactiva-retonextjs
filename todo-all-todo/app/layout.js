import 'server-only'
import CreatedLists from '../components/createdLists'

import Head from "./head"
import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/globals.css'
import SupabaseListener from '../components/supabase-listener'
import createClient from '../utils/supabase-server'
import Login from '../components/login'
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

        <Header title="🤖 Todo Al To-do ✔︎"/>
        <div className="w-full flex flex-col lg:flex-row flex-grow overflow-auto">
            <div className="lg:w-1/2 w-full flex-shrink flex-grow-0 p-3">
              <NavMenu />
            </div>
            <main role="main" className="w-full flex-grow p-3 ">
            {children}
            </main>
            <div className="lg:w-1/2 w-full flex-shrink flex-grow-0 p-3">
              <div className="sticky top-0 w-full">
                <p className='text-2xl'>Últimas 5 ToDos generadas</p>
                <hr className="my-4 border-b-1 border-indigo-500"/>
                <CreatedLists limit={5} />
              </div>

            </div>
        </div>
        <Footer />  
        </>}
      </body>
    </html>
  )
}
