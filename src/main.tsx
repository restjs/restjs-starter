import React from 'react';
import {Application, Router, Get} from '@restjs/core';
import MainController from "./controllers/MainController";

const app : React.ReactElement = (
    <Application
        onListen={()=>{
            console.log('Rest-JS app is running on : http://localhost:3000');
        }}
    >
        <Router path="/" controller={MainController}>
            <Get path="/" handle="index"/>
        </Router>
    </Application>
)

Application.run(app);
