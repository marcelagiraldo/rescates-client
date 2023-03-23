import Layout from "antd/es/layout/layout";
import React, { useState } from 'react'
import { MenuTop } from '../components/MenuTop/MenuTop';

export const LayoutGeneral = (props) => {
    const {children} = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    return (
        <Layout>
            <MenuTop menuCollapsed = {menuCollapsed}/>
            {children}
        </Layout>
    )
}

