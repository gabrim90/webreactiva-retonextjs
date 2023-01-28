import createClient from '../utils/supabase-server'

const  fetchList = async (userId="", limit=100) =>{
    const supabase = createClient()

    if(userId!==""){
        const { data, error } = await supabase.from('lists').select().eq('user_id',userId).order('created_at', { ascending: false }).limit(limit)
        return data
    }else{
        const { data, error } = await supabase.from('lists').select().order('created_at', { ascending: false }).limit(limit)
        return data
    }


}



export default async function CreatedLists(props){
    const userId = props.userId !== undefined ? props.userId : ""
    const itemsList = await fetchList(userId, props.limit)

    const createdLists = itemsList.map((list,index) => {
            return (
                <li key={index} className="my-2" >
                    🗒  <a className="hover:underline hover:underline-offset-1" href={`/lists/${list.id}`} title={list.title}>{list.title}</a>
                </li>
            )
        })


    return (<ul>{createdLists}</ul>)

}