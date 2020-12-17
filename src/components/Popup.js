import React, {Component} from 'react';
import './Images.css';

class App extends Component {
  render(){
    return (
      <div className="popupParrent">
          <div className="popupImage">
              <button
                className="imageClosingButtion"
                onClick={this.props.closePopup}
              >
                  x
              </button>
              <img src={this.props.popImageUrl}/>

          </div>
      </div>
    );
  }
}

export default App;
