import PageDescription from "../components/pageDescription"
import Link from "next/link";


export default function HomePage(props){

  
    const textos = [
        'Esta es una aplicación que te permite crear Checklists para tus tareas diarias usando el ChatBot.',
        'En la sección <strong>Crear To-Do</strong> podrás crear una lista de tareas apoyándote en la IA. Puedes probar a hacerle preguntas del tipo... <span className="italic">¿Cómo hacer un bizcocho?</span>, <span className="italic">¿Cómo reparar una rueda de bici pinchada?</span>...'
    ]
    


    return (
        <>
            <PageDescription title="¡Bienvenido!" texts={textos} />
            <Link href={"/create"}><button className="p-2 my-16 px-6 mx-auto block border-2 rounded-md bg-indigo-600 text-white font-bold">Empezar a Crear To-Dos</button></Link>
        </>
    )
}