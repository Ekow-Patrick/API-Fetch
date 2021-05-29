import React, { Component } from 'react'

export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Reviews:[]
        }
    }
    componentDidMount(){
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=E3qeuh8lvKMPNYwEHDpcwogDkNihLZjh")
        .then((res) => res.json())
        .then((res) =>{
            console.log(res.results)
            this.setState({Reviews: res.results})
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
              <h1>New York Movie Reviews</h1>  
              <hr />
              <div>
                 {this.state.Reviews.map((reviews) =>
                 <div>
                     <p><b>Byline:</b> {reviews.byline}</p>
                     <p><b>Title:</b>: {reviews.display_title}</p>
                     <p><b>Headline:</b>: {reviews.headline}</p>
                     <p><b>Publication Date:</b>: {reviews.publication_date}</p>
                     <p><b>Short Summary:</b>: {reviews.summary_short}</p>
                     <hr />
                 </div>)} 
              </div>
            </div>
        )
    }
}
