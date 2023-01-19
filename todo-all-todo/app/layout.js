import Head from "./head"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Head></Head>
      </head>
      <body>
        <Header title="Todo al To-Do"/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
