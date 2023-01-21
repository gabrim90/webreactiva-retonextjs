import PageDescription from "../components/pageDescription"


export default function HomePage(props){

  
    const textos = [
        'Esta es una aplicación que te permite crear Checklists para tus tareas diarias usando el ChatBot GPT.',
        'En la sección <a href="">Crear</a> podrás crear una lista de tareas apoyándote en la IA. Puedes probar a hacerle preguntas del tipo... <span className="italic">¿Cómo hacer un bizcocho?</span>, <span className="italic">¿Cómo reparar una rueda de bici pinchada?</span>...'
    ]
    


    return (
        <>
            <PageDescription title="¡Bienvenido!" texts={textos} />
            <button className="p-2 my-16 px-6 mx-auto block border-2 rounded-md bg-red-600 text-white font-bold"><a href="/create" >Empezar</a></button>
        </>
    )
}