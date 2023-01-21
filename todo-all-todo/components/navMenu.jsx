import createClient from '../utils/supabase-server'


export default async function NavMenu(props){
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()



    return(

        <div className="sticky top-0 w-full">
            <p className='text-2xl'>Hola {user?.email}</p>
            <hr className="my-4 border-b-1 border-indigo-500"/>

            <ul className="flex sm:flex-col overflow-hidden content-center justify-between">                    
            <li><a href="/">Inicio</a></li>
            <li><a href="/create">Crear To-Do</a></li>
            <li><a href="/view" >Ver mis To-Dos</a></li>
            </ul>
        </div>
    )
}