import React, {Component} from 'react';
import "./Images.css"
import Popup from "./Popup"

class Images extends Component {
  constructor(props){
    super(props)
    this.state={
      imageUrl: "",
      imageUrlArray: [
        "https://www.capoziogallery.com/joe/Icon1.jpg",
        "https://www.capoziogallery.com/joe/japdance1.jpg",
        "https://www.capoziogallery.com/joe/ofhorseandman_lrg.jpg",
        "https://www.capoziogallery.com/joe/Ritual1.jpg",
        "https://www.capoziogallery.com/joe/Sibyl1.jpg",
        "https://www.capoziogallery.com/joe/Trio1.jpg",
        "https://www.capoziogallery.com/joe/warrior_sml.jpg",
      ],
      showModal: false,
      popImageUrl: ""
    }
  }
  imageSubmitter = (e) => {
    e.preventDefault();
    let imageUrlsArray = this.state.imageUrlArray;
    imageUrlsArray.push(this.state.imageUrl)
    this.setState({
      imageUrlsArray: imageUrlsArray
    })
  }
  handleLinkChange = (e) => {
    e.preventDefault();
    this.setState({
      imageUrl: e.target.value
    })
  }

  handlePopup = (url) => {
    this.setState({
      showModal: !this.state.showModal,
      popImageUrl: url
    })

  }


  render() {
    let imageUrlArray = this.state.imageUrlArray;
    const images = imageUrlArray.map((url, index) => {
      return(
        <img 
          className="singleImage"
          src={url}
          key={index}
          onClick={() => this.handlePopup(url)}
        />
      )
    })
    return (
      <div className="Images">
        <form onSubmit={this.imageSubmitter}>
          <input 
            type="text"
            placeholder="Please insert image url"
            onChange={this.handleLinkChange}
          />
          <button type="Submit" className="submitButton">Submit Image</button>

        </form>
        {images}
        {this.state.showModal ? (
          <Popup 
            popImageUrl={this.state.popImageUrl}
            closePopup={this.handlePopup}
          />

        ) : null}
      </div>
    );
  }

}

export default Images;
