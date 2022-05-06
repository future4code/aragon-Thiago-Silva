import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import PlaylistPage from "./pages/PlaylistsPage/PlaylistPage";

class App extends React.Component {
    state = {
    currentScreen: "home"
  }
  
  selectPage = () => {
    switch (this.state.currentScreen){
      case "home":
        return <HomePage />
      case "playlist":
        return <PlaylistPage />
      default:
        return <HomePage />
    }
  }

  render() {

    return (
      <div>
        {this.selectPage()}
      </div>
    )
  }
}

export default App