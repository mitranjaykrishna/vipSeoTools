

const reducer = (state,action)=>{

    if(action.type === "HOME_UPDATE")
    {
        return {
            ...state,
            heroTopData: action.payload.heroTopData,
            logoImage: action.payload.logoImage, 
            heroPara: action.payload.heroPara,
            groupButton1: action.payload.groupButton1,
            groupButton2: action.payload.groupButton2,
            pageImage: action.payload.pageImage,
        };

    }
    
    if(action.type === "ABOUT_UPDATE")
    {
        return {
            ...state,
            heroTopData: action.payload.heroTopData,
            logoImage: action.payload.logoImage, 
            heroPara: action.payload.heroPara,
            groupButton1: action.payload.groupButton1,
            groupButton2: action.payload.groupButton2,
            pageImage: action.payload.pageImage,

        };

    }

    return state;
};

export default reducer;