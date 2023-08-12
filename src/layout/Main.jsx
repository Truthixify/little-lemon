import { Outlet } from "react-router-dom"
import Footer from "../componenets/Footer"
import Navbar from "../componenets/Navbar"

const Main = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Main