'use client'
import {useState} from "react"
import supabase from '../utils/supabase-browser'

export default function Login() {
  const [userEmail, setUserEmail]=useState("")

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
        email: userEmail,
        options: {
          emailRedirectTo: 'https://example.com/welcome'
        }
      })    
    if (error) {
      console.log({ error })
    }
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.log({ error })
    }
  }

  return (
    <main className="antialiased bg-gray-200 text-gray-900 font-sans">
        <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4">Todo Al To-do</span>      
            <form className="mb-4" action="/" method="post">
            <div className="mb-4 md:w-full">
                <label for="email" className="block text-xs mb-1">Username or Email</label>
                <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" value={userEmail} onChange={event=>setUserEmail(event.target.value)} placeholder="Username or Email" />
            </div>
            <div className="mb-6 md:w-full">
                <label for="password" className="block text-xs mb-1">Password</label>
                <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" />
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded" onClick={handleLogin}>Login</button>
            </form>
            <a className="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
        </div>
       </div>
    </main>
  )
}