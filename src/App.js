import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './header';
import Main from './main';
import SelectedBeast from './selectedBeast';
import Footer from './footer';
// import HornsFilter from './hornsFilter';
import beastImages from './data.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastImages: beastImages,
      enlargeBeast: false,
    };
  }

  componentDidMount() {
    const newArray = [];
    beastImages.forEach(beast => {
      beast.likes = 0;
      newArray.push(beast);
    });
    this.setState({
      beastImages: newArray
    });
  }

  addLike = (newCount, title) => {
    const newArray = [];
    this.state.beastImages.forEach(beast => {
      if (beast.title === title) {
        beast.likes = newCount;
      }
      newArray.push(beast);
    });
    this.setState({
      beastImages: newArray
    });
  }

  closeHandler = () => {
    this.setState({ enlargeBeast: false });
  }

  enlargeHandler = (click) => {
    this.setState({
      enlargeBeast: true,
      display: click,
    });
  }

  filterHorns = (selection) => {
    let updatedItems;

    if (selection === 1) {
      updatedItems = beastImages.filter((i) => i.horns === 1);
      this.setState({ beastImages: updatedItems });
    } else if (selection === 2) {
      updatedItems = beastImages.filter((i) => i.horns === 2);
      this.setState({ beastImages: updatedItems });
    } else if (selection === 3) {
      updatedItems = beastImages.filter((i) => i.horns === 3);
      this.setState({ beastImages: updatedItems });
    } else if (selection === 100) {
      updatedItems = beastImages.filter((i) => i.horns === 100);
      this.setState({ beastImages: updatedItems });
    } else {
      this.setState({ beastImages: beastImages });
    }
  }

  render() {
    return (
      <>
        <Header title="Gallery of Horns!" />
        <Main message="Vote For Your Favorite Horned Beasts"
          beastImages={this.state.beastImages}
          addLike={this.addLike}
          onEnlarge={this.enlargeHandler}
          filterHorns={this.filterHorns} />
        {this.state.display ?
          <SelectedBeast
            display={this.state.display}
            show={this.state.enlargeBeast}
            onClose={this.closeHandler} />
          : null}
        <Footer author="Author: Ryan Emmans" />
      </>
    );
  }
}
