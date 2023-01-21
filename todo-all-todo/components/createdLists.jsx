import createClient from '../utils/supabase-server'

export default async function CreatedLists(props){
    const supabase = createClient()
    const { data, error } = await supabase.from('lists').select()
    console.log(data)

    const createdLists = data.map((list) => {
        return (
            <li key={list.id}>
                <a href={`/lists/${list.id}`}>{list.title}</a>
            </li>
        )
    })



    return (<>{createdLists}</>)

}