export default function Header(props) {

    return(
        <header className="h-16 conainer mx-auto drop-shadow-md bg-gray-100 flex flex-col align-middle justify-center">
        <h1 className="text-center text-2xl">{props.title}</h1>
        </header>

    )

}