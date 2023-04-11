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


    const linkStyle = {
        textDecoration: "none",

        marginLeft: '1vw',

        display: "flex",
        alignItems: "center",
        flexDirection: "row",

        transition: "all 0.75s ease",

        fontSize: "110%",
        fontWeight: "700",
        fontFamily: "Gill Sans",
        color: "rgb(0, 90, 0)",
    };

    const iconStyle = {
        fontSize: "150%",
    }


    return (
        <div className="navigation">

            <nav className={check ? "leftMenuInactive" : "leftMenuActive"} onMouseEnter={() => setCheck(false)} onMouseLeave={() => setCheck(true)} >

                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="sectionMenu">

                    <div className="menu">
                        <Link to="/toPageHome" style={linkStyle} > <AiFillHome style={iconStyle} /> <p>&nbsp;&nbsp;Ana Sayfa </p> </Link>
                    </div>
                    <div className="menu">
                        <Link to="/PageTactic" style={linkStyle} > <TbSoccerField style={iconStyle} /> <p>&nbsp;&nbsp;Taktik / Diziliş </p> </Link>
                    </div>
                    <div className="menu">
                        <Link to="/PageInformation" style={linkStyle} > <RiInformationFill style={iconStyle} /> <p>&nbsp;&nbsp;Oyuncu Bilgileri </p> </Link>
                    </div>
                    <div className="menu">
                        <Link to="/PageAdd" style={linkStyle} > <MdOutlineAddCircle style={iconStyle} /> <p>&nbsp;&nbsp;Oyuncu Ekleme </p> </Link>
                    </div>

                </div>

            </nav>

            <Outlet />
        </div>
    )
}
