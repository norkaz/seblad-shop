import React from 'react';
import { Helmet } from 'react-helmet';
import SideBar from '../sidebar/Side-Bar';
import SideBarOverlay from '../sidebar/Side-Bar-Overlay';
import Header from '../header/Header';
import MainNavigation from '../navigations/mainNavigation/Main-Navigation';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import '../../styles/base.less';
import './Structure.less';




export default function Structure({children}) {
    return (
        <>
        <Helmet>
            <title>Seblad - Keramik</title>
        </Helmet>
        <div id="wrapper">
            <div id="main">        
                <Header/>
                <MainNavigation type="horizontal"/>
                <Content>
                    {children}
                </Content>
                <Footer/>
            </div>
            <SideBar type="left">
                <MainNavigation type="vertical"/>
            </SideBar> 
            {/* <SideBar type="right">
                <MainNavigation type="vertical"/>
            </SideBar>  */}
            <SideBarOverlay/>
        </div>
        </>
    )
}
