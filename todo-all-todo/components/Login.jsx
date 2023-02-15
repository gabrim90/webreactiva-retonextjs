"use client";
import { useState } from "react";
import supabase from "../utils/supabase-browser";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [mailSended, setMailSended] = useState(false);

  const handleLogin = async () => {
    setMailSended(true);

    let loginData = { email: userEmail };
    // loginData.options = {
    //   emailRedirectTo: "http://localhost:3000",
    // };

    const { data, error } = await supabase.auth.signInWithOtp(loginData);
    if (error) {
      // console.log({ error })
      setMailSended(false);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      // console.log({ error })
    }
  };

  return (
    <main className="antialiased bg-gray-200 text-gray-900 font-sans">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4 text-center">
            🤖 Todo Al To-do ✔︎
          </span>

          {!mailSended && (
            <>
              <p className="my-4">
                Introduce tú email y te llegará un enlace para acceder.
              </p>
              <form className="mb-4" action="/" method="post">
                <div className="mb-4 md:w-full">
                  <label htmlFor="email" className="block text-xs mb-1">
                    Email
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    value={userEmail}
                    onChange={(event) => setUserEmail(event.target.value)}
                    placeholder="Username or Email"
                  />
                </div>
                <button
                  className="w-full p-2 border-2 rounded-md bg-indigo-600 text-white font-bold"
                  onClick={handleLogin}
                >
                  Acceder
                </button>
              </form>
            </>
          )}
          {mailSended && (
            <>
              Se ha enviado un email con el enlace de acceso. Por favor, revisa
              tu <strong>Bandeja de entrada</strong> o tu{" "}
              <strong>carpeta de spam</strong>.
            </>
          )}
        </div>
      </div>
    </main>
  );
}
