import React, { Component } from 'react';
import Scale from './Scale.js'
import "./styles.css"

class App extends Component {

  renderScale = (category,value) => {

    let string = category;
    let id = string.replace(/\s+/g,""); 
      return (
        <Scale id={id} category={category} value={value} />
      ) 
  }
  render() {
    return (
      <div className="callout" >
        {this.renderScale("Fire Risk",1)}
        {this.renderScale("Flood Risk",5)}
        {this.renderScale("Hurricane Risk",8)}
        {this.renderScale("Storm Risk",9)}
        {this.renderScale("Crime Rate",2)}
      </div>
    );
  }
}

export default App;
