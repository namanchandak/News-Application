import React, { Component } from 'react'

export class NewsItem extends Component {

render() {

    


    let {title,description, imageUrl,newsUrl}= this.props;

    return (
      <div className='my-3'>

                <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2022-12/c5dc7c5c-9796-4ddc-988a-8519b7d297f0.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title"> {title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-success">know more</a>
                </div>
                </div>

      </div>
    )
  }
}

export default NewsItem