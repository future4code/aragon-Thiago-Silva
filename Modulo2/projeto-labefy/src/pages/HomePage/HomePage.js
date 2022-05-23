import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React from 'react'
import { headerInput } from '../../constants/Header'
import { BASE_URL } from '../../constants/URLs'
import { PlaylistsCard } from './styled'

export default class HomePage extends React.Component {
    state = {
        playlists: [],
        playlistValue: ""
    }

    componentDidUpdate() {
        this.getAllPlaylists()
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    createPlaylist = () => {
        const body = {
            name: this.state.playlistValue
        };

        axios.post(`${BASE_URL}/playlists`, body, headerInput)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    onChangePlaylistValue = (event) => {
        this.setState({ playlistValue: event.target.value })
    }

    getAllPlaylists = () => {
        axios.get(`${BASE_URL}/playlists`, headerInput)
            .then((response) => this.setState({ playlists: response.data.result.list }))
            .catch((error) => console.log(error.response))
    }

    // deletePlaylist = (id) => {
    //     axios.delete(`${BASE_URL}/playlists/:playlist${id}`, headerInput)
    //         .then((response) => console.log(response))
    //         .catch((error) => console.log(error.response))
    // }

    handlePlaylistDeletion = id => {
        if (window.confirm("Tem certeza que deseja apagar esta playlist?")) {
          axios.delete(`${BASE_URL}/playlists/:playlist${id}`, headerInput, { param: { playlistId: `${id}`}})
            .then((response) => {
              alert("Playlist apagada com sucesso!");
              this.getAllPlaylists();
            })
            .catch((error) => {
              alert("ERRO AO APAGAR PLAYLIST");
            });
        }
      };

    render() {
        const listaDePlaylists = this.state.playlists.map((playlist) => {
            return (
                <div className="PlaylistContainer">
                    <PlaylistsCard
                        key={playlist.id}
                        onClick={() => this.props.goToPlaylistPage(playlist.id)}
                    >
                        {playlist.name}
                    </PlaylistsCard>
                    <button onClick={() => this.handlePlaylistDeletion(playlist.id)}>X</button>
                </div>
            )
        })
    
        
        return (
            <section>
                <button onClick={(this.props.goToPlaylistPage)}>Playlist Page</button>
                <div>
                    {listaDePlaylists}
                </div>
                <div>
                    <h2>Crie sua nova Playlist</h2>
                    <input
                        placeholder="Nome da Playlist"
                        value={this.state.playlistValue}
                        onChange={this.onChangePlaylistValue}
                    />
                    <button onClick={this.createPlaylist}>Criar Playlist</button>
                </div>
            </section>

            // {/* <button OnClick={this.props.irParaPlaylistPage}>Ir para a PlaylistPage</button> */}

        )
    }
}