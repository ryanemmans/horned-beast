import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './header';
import Main from './main';
import SelectedBeast from './selectedBeast';
import Footer from './footer';
import beastImages from './data.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastImages: beastImages,
      enlargeBeast: true, // change to false
    };
  }

  closeHandler = () => {
    this.setState({ enlargeBeast: false });
  }

  enlargeHandler = () => {
    // alert(beastInfo);
    this.setState({
      enlargeBeast: true,
      display: this.beastImages
    });
  }

  // enlarge = (beast) => {
  //   let beasts = this.state.beastImages.map( (b))
  //     if(b.name === beastImages) {
  //       b.modal;

  //     }
  //     return b;
  //   });
  //   this.setState({beastImages: beasts});
  // }

  render() {
    return (
      <>
        <Header title="Gallery of Horns!" />
        <Main message="Vote For Your Favorite Horned Beasts"
          beastImages={this.state.beastImages}
          onEnlarge={this.enlargeHandler} />
        <SelectedBeast show={this.state.enlargeBeast} onClose={this.closeHandler} />
        <Footer author="Author: Ryan Emmans" />
      </>
    );
  }
}
