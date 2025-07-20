import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import '../assets/style.css'

export default function mainlayout() {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content-wrapper">
        <div className="main-content">
          <div className="breadcrumd">Breadcrumd</div>
          <div className="inner-page">

            <Outlet />
          </div>

        </div>
        <Sidebar />
      </div>
    </div>
  )
}
