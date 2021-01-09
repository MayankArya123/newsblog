import React,{useEffect,useState,useContext} from 'react'
import {NewsContext} from '../App'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

  export const Article =(props)=>{

     console.log('this com params',props.match.params.source)
     

     const {Articles ,setArticles } = useContext(NewsContext)

     const [Article,setArticle] = useState([])
     const [source,setSource] = useState(props.match.params.source)

     useEffect(()=>{

      var CorrectOne=Articles.filter((EI)=>{
           return EI.title === source
      })

      if(CorrectOne) {
          setArticle(CorrectOne)
          console.log(CorrectOne)
      }
      else {
           console.log('n')
      }
     },[source])

    

return (
  Article.length > 0 &&   
     <Layout>

      <Content >
      <img src={Article[0].urlToImage} />
     <h2>{Article[0].title}</h2>
      <p>{Article[0].content}</p>
     </Content>
     </Layout> 
          

)

}