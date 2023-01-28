import createClient from '../utils/supabase-server'

const  fetchList = async (userId="") =>{
    const supabase = createClient()

    if(userId!==""){
        const { data, error } = await supabase.from('lists').select().eq('user_id',userId)
        return data
    }else{
        const { data, error } = await supabase.from('lists').select()
        return data
    }


}



export default async function CreatedLists(props){
    const userId = props.userId !== undefined ? props.userId : ""
    const itemsList = await fetchList(userId)

    const createdLists = itemsList.map((list,index) => {
            return (
                <li key={index} className="my-2" >
                    🗒  <a className="hover:underline hover:underline-offset-1" href={`/lists/${list.id}`} title={list.title}>{list.title}</a>
                </li>
            )
        })


    return (<ul>{createdLists}</ul>)

}