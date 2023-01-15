import Head from "./head"
import '../styles/globals.css'
import SearchForm from "../components/SearchForm"

export default function MainPage() {
  return (
    <>
    <Head></Head>
    <main >
      <header className="h-16 conainer mx-auto drop-shadow-md bg-gray-100 flex flex-col align-middle justify-center">
      <h1 className="text-center text-2xl">Todo al ToDo</h1>
      </header>
      <SearchForm />
      
    </main>
    </>
    )
}