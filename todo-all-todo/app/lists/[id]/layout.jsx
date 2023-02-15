import PageDescription from "../../../components/pageDescription"




export default async function DetailLayout({ params, children }) {


  return (
        <>

          <PageDescription title={"Detalle de lista"} texts={["Aquí puedes ver el detalle de la lista seleccionada:"]} />
          <div className="mt-10 md:mr-20">
          {children}
          </div>
        </>
      )

}
