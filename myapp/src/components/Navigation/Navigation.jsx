import { useContext } from "react";
import { Link, Outlet } from "react-router-dom"

import ContentContext from "../../context/ContentContext";

import "../../style/Menu/Navigation.css"

import Logo from "../../Image/7ye-7-logo kopyası/png/logo-no-background.png"
import { AiFillHome } from "react-icons/ai";
import { TbSoccerField } from "react-icons/tb";
import { RiInformationFill } from "react-icons/ri";
import { MdOutlineAddCircle } from "react-icons/md";


export default function Navigation() {

    const { check, setCheck } = useContext(ContentContext)


    return (
        <div className="navigation">

            <nav className={check ? "leftMenuInactive" : "leftMenuActive"} onMouseEnter={() => setCheck(false)} onMouseLeave={() => setCheck(true)} >

                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="sectionMenu">

                    <div className="menu">
                        <Link to="/toPageHome" className="link" >
                            <AiFillHome className="icon" />
                            <p>Ana Sayfa </p>
                        </Link>
                    </div>
                    <div className="menu">
                        <Link to="/PageTactic" className="link" >
                            <TbSoccerField className="icon" />
                            <p>Taktik / Diziliş </p>
                        </Link>
                    </div>
                    <div className="menu">
                        <Link to="/PageInformation" className="link" >
                            <RiInformationFill className="icon" />
                            <p>Oyuncu Bilgileri </p>
                        </Link>
                    </div>
                    <div className="menu">
                        <Link to="/PageAdd" className="link" >
                            <MdOutlineAddCircle className="icon" />
                            <p>Oyuncu Ekleme </p>
                        </Link>
                    </div>

                </div>

            </nav>

            <Outlet />
        </div>
    )
}
