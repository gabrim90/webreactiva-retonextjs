import PageDescription from "../components/pageDescription"



export default function HomePage(props){
    const textos = [
        'Esta es una aplicación que te permite crear Checklists para tus tareas diarias usando el ChatBot GTP.',
        'En la sección <a href="">Crear</a> podrás crear una lista de tareas apoyándote en la IA. Puedes probar a hacerle preguntas del tipo... <span className="italic">¿Cómo hacer un bizcocho?</span>, <span className="italic">¿Cómo reparar una rueda de bici pinchada?</span>...'
    ]
    
    return (
        <>
            <PageDescription title="¡Bienvenido!" texts={textos} />
        </>
    )
}