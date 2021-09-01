import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  state = { images: [] };
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID ZKmp6TBZohDg5wPZvxgaQso_c34xuVdgS54f8CvnnQo",
      },
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;

//Access Key=  ZKmp6TBZohDg5wPZvxgaQso_c34xuVdgS54f8CvnnQo
//Secret key= CSl74LvWAeZjsEqnRsT3CVDtUgN3LHeQRGYaMpA7ywk
