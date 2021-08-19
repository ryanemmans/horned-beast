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
      enlargeBeast: false,
    };
  }

  closeHandler = () => {
    this.setState({ enlargeBeast: false });
  }

  enlargeHandler = (selection) => {
    // alert(beastInfo);
    this.setState({
      enlargeBeast: true,
      display: selection,
    });
  }

  render() {
    return (
      <>
        <Header title="Gallery of Horns!" />
        <Main message="Vote For Your Favorite Horned Beasts"
          beastImages={this.state.beastImages}
          onEnlarge={this.enlargeHandler} />
        {this.state.display ? <SelectedBeast display={this.state.display}
          show={this.state.enlargeBeast} onClose={this.closeHandler} /> : null}
        <Footer author="Author: Ryan Emmans" />
      </>
    );
  }
}
