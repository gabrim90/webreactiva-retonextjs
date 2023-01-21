import PageDescription from "../../../components/pageDescription"
import createClient  from "../../../utils/supabase-server"
import PointsList from "../../../components/pointsList"

export default async function ListDetail({params}) {
  const supabase = createClient()
  const { id } = params
  const { data, error } = await supabase.from('lists').select().eq('id',id)
  const textos = []
  const currentList = data[0]
  return (
      <>
        <PageDescription title={currentList.title} texts={textos} />
        <PointsList pointsList={currentList.points} />
      </>
    )
}
