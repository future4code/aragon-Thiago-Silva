import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import PlaylistPage from "./pages/PlaylistsPage/PlaylistPage";


class App extends React.Component {
    state = {
    currentScreen: "home",
    clickedPlaylistId: ""
  }
  
  goToPlaylistPage = (id) => {
    this.setState({currentScreen: "playlist", clickedPlaylistId: id})
  }

  goToHome = () => {
    this.setState({currentScreen: "home", clickedPlaylistId: ""})
  }

  selectPage = () => {
    switch (this.state.currentScreen){
      case "home":
        return <HomePage goToPlaylistPage={this.goToPlaylistPage}/>
      case "playlist":
        return <PlaylistPage goToHome={this.goToHome} id={this.state.clickedPlaylistId} />
      default:
        return <HomePage goToPlaylistPage={this.goToPlaylistPage} />
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