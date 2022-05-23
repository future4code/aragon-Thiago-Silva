import axios from "axios";
import React from "react";
import { headerInput } from "../../constants/Header";
import { BASE_URL } from "../../constants/URLs";

export default class PlaylistPage extends React.Component {
    state = {
        playlist: {}
    }

    componentDidMount() {
        
    }

    getPlaylistTracks = () => {
        axios.get(`${BASE_URL}/playlists/:playlistId/tracks`, headerInput, this.props.id)
            .then((response) => console.log(response)) /*this.setState({ playlist: response.data }))*/
            .catch((error) => console.log(error.response))
    }

    render() {
        // <p>{this.state.playlist}</p>
        return (
            <div>
                <button onClick={(this.props.goToHome)}>Voltar</button>
                {/* {this.props.id} */}
            </div>
        )
    }
}