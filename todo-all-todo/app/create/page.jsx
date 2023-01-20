import SearchForm from "../../components/searchForm"
import PageDescription from "../../components/pageDescription"

export default function MainPage() {
  const textos = [
    'Escribe a continuación una pregunta y nuestros <strong>Oompa Loompa</strong> te darán sugerencias sobre como proceder.'
  ]
  return (
      <>
      <PageDescription title="Creación de To-Do" texts={textos} />

      <SearchForm />
      </>
    )
}