import PageDescription from "../../../components/pageDescription"
import createClient  from "../../../utils/supabase-server"
import PointsList from "../../../components/pointsList"


export async function fetchList(listId="") {
  const endpoint = `${process.env.HOST}/api/detail/${listId}`
  
//  console.log("🚀 ~ file: layout.jsx:6 ~ fetchList ~ endpoint", endpoint)
  const response = await fetch(endpoint, { cache: 'no-store' });
  const data = await response.json();
//  console.log("🚀 ~ file: layout.jsx:9 ~ fetchList ~ data", data)
  return data;
}


export default async function ListDetail({params}) {
  const { id } = params
  const textos = []
  const fetchedData = await fetchList(id)
  const list = fetchedData[0]
  return (
      <>
        <PageDescription title={list.title} texts={textos} titleSize="text-xl" />
        <PointsList pointsList={list.points} /> 

      </>
    )
}
