//import logo from './logo.svg';
import React ,{useState } from 'react'
import './App.css';
import  { Article}  from './Components/Article'
import  { Home}  from './Components/Home'
import { BrowserRouter as Router , Route }  from "react-router-dom"



const NewsContext = React.createContext()

  export const App=()=> {
  const [Articles , setArticles] = useState([])
  const [Loading , setLoading] = useState(true)
  return (
    
          <div>
          <NewsContext.Provider value={{Articles,setArticles,Loading,setLoading}} >

          <Router>
          <div className="container">
        
             <br/>
             <Route  path="/" exact component={Home}/>
             <Route  path="/Article/:source" exact component={Article}/>
           </div>
        </Router>
       
          </NewsContext.Provider>
          </div>
     
        
        
         
  );
};
    export   {NewsContext}
