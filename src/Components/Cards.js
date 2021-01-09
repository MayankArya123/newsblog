import React ,{useContext, useState} from 'react'
import { Link  }from 'react-router-dom'
//import {Article} from '../Components/Article'


// import {ReactComponent as Hindu} from '../Images/hindulogo.svg'

import {  Row, Col , Pagination } from 'antd';
import { Card } from 'antd';
import  {NewsContext } from '../App';

const { Meta } = Card;

 export const Cards=()=>{

     const {Articles,Loading} = useContext(NewsContext)
      const [readMore,setReadMore]=useState(false);
      const [ShowPage1data,setShowPage1data ] = useState(true)
      const [ShowPage2data,setShowPage2data ] = useState(false)
      const [ShowPage3data,setShowPage3data ] = useState(false)
      const [ShowPage4data,setShowPage4data ] = useState(false)
     
     // var x=null
      const onChange=(pageNumber)=>{

        console.log('page',pageNumber)

        if(pageNumber === 1){
            setShowPage1data(true)
            setShowPage2data(false)
            setShowPage3data(false)
            setShowPage4data(false)
        }
        if(pageNumber === 2){
          console.log('h2')
            setShowPage2data(true)
            setShowPage1data(false)
            setShowPage3data(false)
            setShowPage4data(false)
        }
        if(pageNumber === 3){
            setShowPage3data(true)
            setShowPage1data(false)
            setShowPage2data(false)
            setShowPage4data(false)
        }
        if(pageNumber === 4){
            setShowPage4data(true)
            setShowPage2data(false)
            setShowPage3data(false)
            setShowPage1data(false)
        }


         

      }
   
      //const linkName=readMore?'Read Less << ':'Read More >>'
     

     // console.log('in cardC',Articles)

    //   const onChange=checked =>{
    //     setLoading( !checked )
    //   }

    return ( Loading ? <div className="loading_home">
           <h2>please wait data is loading  ...</h2>
      </div> :
      <div className="block featureBlock  bgGray">
      <div className="container-fluid custom">
      <Row gutter={[16, 16]}>
        { ShowPage1data && Articles.slice(0,3).map((EA,index)=>{
            return (  
             
            <Col span={8} >
          
            <Card key={index.title} className="card"
            hoverable
            style={{ width: 400 }}
            cover={<img alt="example" src={EA.urlToImage}  />}
          >



            <Meta name={EA.name} title={EA.title} description={EA.description} />

            <Link to={`/Article/${EA.title}`} className="nav-link"> Read</Link>
         
          </Card>
 
         </Col > 
            )
        }) }
        { ShowPage2data && Articles.slice(3,6).map((EA,index)=>{
            return (  

              
             
            <Col span={8} >
          
            <Card key={index.title}
            hoverable
            style={{ width: 400 }}
            cover={<img alt="example" src={EA.urlToImage}  />}
          >
            <Meta title={EA.title} description={EA.description} />
       
            <Link to={`/Article/${EA.title}`} className="nav-link"> Read</Link>
         
          </Card>
 
         </Col > 
            )
        }) }
        { ShowPage3data && Articles.slice(6,9).map((EA,index)=>{
            return (  
             
            <Col span={8} >
          
            <Card key={index.title}
            hoverable
            style={{ width: 400 }}
            cover={<img alt="example" src={EA.urlToImage}  />}
          >
            

            <Meta title={EA.title} description={EA.description} />
        
            <Link to={`/Article/${EA.title}`} className="nav-link"> Read</Link>
         
          </Card>
 
         </Col > 
            )
        }) }
        { ShowPage4data && Articles.slice(9,10).map((EA,index)=>{
            return (  
             
            <Col span={8} >
          
            <Card key={index.title}
            hoverable
            style={{ width: 400 }}
            cover={<img alt="example" src={EA.urlToImage}  />}
          >

         
            <Meta title={EA.title} description={EA.description} />
         
            <Link to={`/Article/${EA.title}`} className="nav-link"> Read </Link>
         
          </Card>
 
         </Col > 
            )
        }) }
        </Row>
        <Pagination total={30} onChange={onChange} />
      </div>
   </div> 
    )

 }

