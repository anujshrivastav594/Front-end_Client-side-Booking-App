import { createContext, useReducer, useEffect } from "react";

const INITIAL_STATE =  { //JSON.parse(localStorage.getItem("finalState")) || 
    city: undefined,
    dates: [
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ],
    options: {
        adult: 1,
        children: 0,
        room: 1,
      }
}

export const searchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("finalState", JSON.stringify(state));
     },[state])

    return (
    <searchContext.Provider value={{
        city:state.city,
        dates:state.dates, 
        options: state.options, 
        dispatch}}
    >
       {children}
    </searchContext.Provider>
    )
};