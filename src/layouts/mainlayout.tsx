import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import '../assets/style.css'
import '../assets/style1.css'

export default function mainlayout() {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content-wrapper">
       
        <Sidebar />
        <div className="main-content">
          <div className="breadcrumd">Breadcrumd</div>
          <div className="inner-page">

            <Outlet />
          </div>

        </div>
      </div>
    </div>
  )
}
