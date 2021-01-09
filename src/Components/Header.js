import React ,{useState,useContext,useEffect} from 'react'

import {NewsContext} from '../App'
 //import {ReactComponent as IndianFlag} from '../Images/indianflag.svg'

import { Menu } from 'antd';

    const AppHeader=(props)=>{

    const {Articles ,setArticles,setLoading } = useContext(NewsContext)
    
    console.log('se',Articles,setArticles)

    useEffect(()=>{

        fetch('http://newsapi.org/v2/top-headlines/?sources=google-news-in&pageSize=7&apiKey=5e7228a424194a288b3d9863cf665008')
        .then(function(response) {
            console.log( 'see',response.json().then((succs)=>{
                console.log('data',succs)
                  if(succs){
                      setArticles(succs.articles)
                      setLoading(false)
                  }
            }).catch((err)=>{
                console.log('error resolving with response promise',err)
            }) )


        }).catch((err)=>{
            console.log('something gone wrong',err)
        })

    },[])

    
   const GetGoogleNewsArticles =()=>{

        console.log('h')
         setLoading(true)
        // var url = 'http://newsapi.org/v2/top-headlines/?' +
        //            'sources=the-hindu&' +
        //           'apiKey=2f92119e03084bbca7b7b60783d48a75';
        // var req = new Request(url);

        fetch('http://newsapi.org/v2/top-headlines/?sources=google-news-in&pageSize=7&apiKey=5e7228a424194a288b3d9863cf665008')
            .then(function(response) {
                console.log( 'see',response.json().then((succs)=>{
                    console.log('data',succs)
                      if(succs){
                          setArticles(succs.articles)
                          setLoading(false)
                      }
                }).catch((err)=>{
                    console.log('error resolving with response promise',err)
                }) )


            }).catch((err)=>{
                console.log('something gone wrong',err)
            })

     }

     const GetHinduNewsArticles =()=>{

        setLoading(true)

        console.log('h')
        // var url = 'http://newsapi.org/v2/top-headlines/?' +
        //            'sources=the-hindu&' +
        //           'apiKey=2f92119e03084bbca7b7b60783d48a75';
        // var req = new Request(url);

        fetch('http://newsapi.org/v2/top-headlines/?sources=the-hindu&pageSize=7&apiKey=5e7228a424194a288b3d9863cf665008')
            .then(function(response) {
                console.log( 'see',response.json().then((succs)=>{
                    console.log('data',succs)
                      if(succs){
                          setArticles(succs.articles)
                          setLoading(false)
                      }
                }).catch((err)=>{
                    console.log('error resolving with response promise',err)
                }) )
            }).catch((err)=>{
                console.log('something gone wrong',err)
            })

     }
     const GetTimesofIndiaNewsArticles =()=>{

        setLoading(true)

        console.log('h')
        // var url = 'http://newsapi.org/v2/top-headlines/?' +
        //            'sources=the-hindu&' +
        //           'apiKey=2f92119e03084bbca7b7b60783d48a75';
        // var req = new Request(url);

        fetch('http://newsapi.org/v2/top-headlines/?sources=the-times-of-india&pageSize=7&apiKey=5e7228a424194a288b3d9863cf665008')
            .then(function(response) {
                console.log( 'see',response.json().then((succs)=>{
                    console.log('data',succs)
                      if(succs){
                          setLoading(false)
                          setArticles(succs.articles)
                      }
                }).catch((err)=>{
                    console.log('error resolving with response promise',err)
                }) )
            }).catch((err)=>{
                console.log('something gone wrong',err)
            })

     }

    return (
         <div className="container-fluid">
            <div className="header">
            
             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
               <Menu.Item key="1" onClick={()=> GetGoogleNewsArticles()}> Google News </Menu.Item>
               <Menu.Item key="2" onClick={()=> GetHinduNewsArticles()}> Hindu News </Menu.Item>
               <Menu.Item key="3" onClick={()=> GetTimesofIndiaNewsArticles()}> The Times of India </Menu.Item>

               <Menu.Item  className="india_logo"> INDIA </Menu.Item>
            
             </Menu>
         
            </div>
         </div>

    )


}
 export default AppHeader

// const mapStateToProps = state => {
//     return {
//       count: state.counter.count,
//     }
//   }
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       increaseCounter: () => dispatch(increaseCounter()),
  
//       decreaseCounter: () => dispatch(decreaseCounter()),
//     }
//   }

  //export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)