import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  

  constructor(){
    super()
    console.log("hello i am a constructor from news ")
    this.state={

      articles: [""],
      loading: false,
      page :1
      
    }
  }

  async componentDidMount(){
    console.log("cdm")
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&pageSize=${this.props.pageSize}`
  
      let data= await fetch(url);
      let parseData=await data.json()
      console.log(parseData)
      console.log("parseData")


      this.setState({articles: parseData.articles,totalResults:parseData.totalResults})

  }


  handleNextClick= async()=>{
    console.log("next")
    if(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize))
    {

    }
    else{

    

      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        
        let data= await fetch(url);
        let parseData=await data.json()
        console.log(parseData)
        console.log("parseData")

      this.setState({


        page:this.state.page+1,
        articles:parseData.articles

      })
  }
    
  }
  handlePrevClick=async()=>{
    console.log("prev ")

    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
  
      let data= await fetch(url);
      let parseData=await data.json()
      console.log(parseData)
      console.log("parseData")

    this.setState({


      page:this.state.page-1,
      articles:parseData.articles

    })


  }



  render() {



    console.log("render");
    return (

      

          <div className="container">
            <h2 className="text-center my-4">the daily prophet- daily headlines</h2>
            {/* <Spinner /> */}
            <div className="row" >
            {this.state.articles.map((element)=>{
                    return    <div className="col-sm" key= {element.url}>
                      <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} newsUrl={element.url} imageUrl={element.urlToImage}/>
                      </div>

            })}

            <div className="contanior d-flex justify-content-between ">

            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; prev</button>
            <button type="button" disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
            </div>
              
            </div>
            
          </div>


    );
  }
}

export default News;
