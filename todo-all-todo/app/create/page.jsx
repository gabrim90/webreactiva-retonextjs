import SearchForm from "../../components/searchForm";
import PageDescription from "../../components/pageDescription";

export default function MainPage() {
  const textos = [
    "Escribe a continuación una pregunta y el <strong>ChatBot</strong> te creará una checklist a tu medida.",
  ];
  return (
    <>
      <PageDescription title="Creación de To-Do" texts={textos} />

      <SearchForm />
    </>
  );
}
