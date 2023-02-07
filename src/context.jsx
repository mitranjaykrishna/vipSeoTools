import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import ServicesData from "./ServicesData";

const AppContext=React.createContext();

const initialState={
    heroTopData:"",
    logoImage:"", 
    heroPara:"",
    groupButton1:"",
    groupButton2:"",
    pageImage:"",
    services: [],
}

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const updateHomePage=()=>
    {
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
                heroTopData:"We are",
                logoImage:"./images/logo.png", 
                heroPara:"Best, Reliable Group Buy Services",
                groupButton1:"Login",
                groupButton2:"Register",
                pageImage:"./images/hero.svg",
            },
        });
    };

    const updateAboutPage=()=>
    {
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                heroTopData:"About Us",
                logoImage:"./images/logo.png" ,
                heroPara:"Before using our tools you should know who we are and how can we help. You may not trust us because of any past experience or because some of your friends got scammed from some group buy tools. But to be honest it's not their mistake. Many companies use unethical ways to because of this they don't last long. To avoid any such things from happening to any of our customers we do our work in an ethical way. We buy the tool at real prices and share it with a group of people. This makes it affordable for everyone and accessible from anywhere in this world. So instead of spending thousands of money on buying one tool, you are going to get multiple tools for a cheap price. We understand that budget matters a lot for you this is why we are here to help you save lots of money every month.",
                groupButton1:"Contact Us",
                groupButton2:"Services",
                pageImage:"./images/about.svg",
            },
        });
    };

    const getServices=()=>
    {
        return dispatch({
            type:"SERVICES_UPDATE",
            payload:ServicesData,
        });
    }

    useEffect(() => getServices(),[]);
    
    return (
        <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
        {children}
        </AppContext.Provider>
    
    );
};


const useGlobalContext=()=>{
    return useContext(AppContext);
};
export { AppProvider, useGlobalContext} ;