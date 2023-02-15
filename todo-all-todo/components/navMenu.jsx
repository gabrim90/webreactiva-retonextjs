import createClient from '../utils/supabase-server'
import NavLink from './navLink'

const menu = [
    {
        title: 'Crear To-Do',
        path: '/create'
    },
    {
        title: 'Mis listas creadas',
        path: '/lists'
    }
]

export default async function NavMenu(props){

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const navLinks = menu.map((item,index)=>{
        return(
            <li key={index} className="my-1 w-full">
                <NavLink path={item.path} title={item.title}/>
            </li>

        )

    })

    return(

        <div className="sticky top-0 w-full">
            <p className='text-2xl'>Hola {user?.email}</p>
            <hr className="my-4 border-b-1 border-indigo-500"/>

            <ul className="flex flex-row md:flex-col overflow-hidden content-center justify-between">                    
            {navLinks}
            </ul>
        </div>
    )
}