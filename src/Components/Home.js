import React from 'react'
import {Cards} from '../Components/Cards'
import 'antd/dist/antd.css';

import  AppHeader from './Header'
import { Layout, Menu, Breadcrumb  } from 'antd';
const { Header ,Footer } = Layout;

export const Home=()=>{


    return (
        <Layout className="layout">
        <Header>
            <AppHeader/>
         </Header>
        <Cards/>
      </Layout >
    )


}