const API = 'https://type.fit/api/quotes';

class App extends React.Component {
  
state = {
  quote: [{
      text: 'Lorem Ipsum de fou malade',
      author: 'No lo sé'
  }],
  index: 0
}
  
  componentDidMount() {
    //call API and update state
    fetch(API).then(res => res.json())
      .then(res => {
      this.setState({
        quote: res
      }, this.getRandomIndex);
    })
  }
  
  getRandomIndex = () => {
    const { quote } = this.state;
    
    if(quote.length > 0) {
      const index = Math.floor(Math.random()* quote.length)
      this.setState({
        index
      });
    }
  }
  
  render() {
   const { quote, index } = this.state;
   const quotes = quote[index];

   const tweetURL = `https://twitter.com/intent/tweet?text=${quotes.text}-${quotes.author}`;
 
   return (
   <div  className='wrapper d-flex align-items-center justify-content-center'>
         <div id="quote-box" className="col-xs-6 box p-5 rounded">
             {
             quotes && <div>
                        
                         <h5><cite id="text"><i className='fas fa-quote-left fa-2x'></i> {quotes.text}</cite></h5>
                         <br />
                         <p id="author">- {quotes.author || "Anonyme"}</p>    
                       </div>
              }
           <div className="d-flex justify-content-between">
             <a href={tweetURL} className='btn btn-primary' id="tweet-quote"><i className='fab fa-twitter'></i> Tweet</a>
             <button id="new-quote" className="btn btn-primary" onClick={this.getRandomIndex}><i className='fas fa-random'></i> New quote</button>   
           </div>
         </div>
       </div>
     )};
  
}

ReactDOM.render(<App />, document.getElementById('app'));