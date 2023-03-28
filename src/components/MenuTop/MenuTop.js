import "./MenuTop.scss"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {Menu, Layout} from "antd"
import { BellOutlined } from "@ant-design/icons"
import { BarChartOutlined, BarsOutlined } from "@ant-design/icons/lib/icons"

export const MenuTop = (props) => {
    const {Top} = Layout;
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems=[
        {
            key:"/",
            icon: <BellOutlined />,
        },
        {
            key:"/",
            icon: <BarChartOutlined />,
        },
        {
            key:"/",
            icon: <BarsOutlined />,
        }
    ]
    const menuClick =(e)=>{
        const path=e.path
        console.log("di clic en el menu" + path);
        navigate(path);
    };
    return (
        <Top className="menu-top" Collapsed ={props.menuCollapsed}>
            <Menu
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                onClick= {menuClick}
                items={menuItems}
            />
        </Top>
    )
}
