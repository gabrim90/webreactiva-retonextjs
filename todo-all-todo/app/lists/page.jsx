import PageDescription from "../../components/pageDescription"
import CreatedLists from "../../components/createdLists"
import createClient from "../../utils/supabase-server"

export default async function ViewLists() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const textos = []
  return (
      <>
      <PageDescription title="Aquí están tus listas creadas" texts={textos} />
      <CreatedLists userId={user.id} />
      </>      
    )
}