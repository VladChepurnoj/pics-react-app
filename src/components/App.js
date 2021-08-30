import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

//Access Key=  ZKmp6TBZohDg5wPZvxgaQso_c34xuVdgS54f8CvnnQo
//Secret key= CSl74LvWAeZjsEqnRsT3CVDtUgN3LHeQRGYaMpA7ywk
