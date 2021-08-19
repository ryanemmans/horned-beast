import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';// import Data from './data.json';
import beastImages from './data.json';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastImages: beastImages,
    };
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
        <Main message="Click On Images to Vote For Your Favorite Horned Beasts"
          beastImages={this.state.beastImages} />
        <Footer author="Author: Ryan Emmans" />
      </>
    );
  }
}
