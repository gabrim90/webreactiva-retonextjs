export default function PageDescription(props) {

    const mappedTexts = props.texts.map((text, index) => {
      return (
        <> 
            <p key={index} className="text-lg mb-2 px-1" dangerouslySetInnerHTML={{ __html: text }}></p>      
        </>      
      )
    })

    return (
        <>
            <h1 className="text-2xl mb-4 px-1">{props.title}</h1>
            <hr className="my-4 border-b-1 border-indigo-500"/>
            {mappedTexts}
        </>
    );
}