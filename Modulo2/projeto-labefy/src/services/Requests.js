// import axios from "axios"

// const urlGetAllPlaylists = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
// const urlGetSearchPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=string"
// const urlGetPlaylistTracks = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
// const urlPostCreatePlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
// const urlPostAddTrackToPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
// const urlDeletePlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId"
// const urlRemoveTrackFromPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId"

// export const authConfig = {
//     headers: {
//         Authorization: "thiago-vernizzi-aragon"
//     }
// }

// export const getAllPlaylists = (saveData) => {
//     axios
//         .get(urlGet, header)
//         .then((response) => {
//             console.log(response.data)
//         })
//         .catch((error) => {
//             console.log(error.response)
//         })
// }

// export const searchPlaylist = (saveData) => {
//     axios
//         .get(urlSearch, header)
//         .then((response) => {
//             console.log(response.data)
//         })
//         .catch((error)=> {
//         console.log(error.response)
//         })
// }

// export const getPlayListTracks = (saveData) => {
//     axios
//     .get(urlGetTracks,header)
//     .then((response)=>{
//         console.log(response.data)
//     })
//     .catch ((error)=>{
//         console.log(error.response)
//     })
// }


// export const createPlayList = (saveData) => {
//     axios
//     .post(urlCreate,header)
//     .then((response)=>{
//         console.log(response.data)
//     })
//     .catch((error)=>{
//         console.log(error.response)
//     })
// }

// export const addTrackToPlayList = (saveData) => {
//     axios.post(urlAddTrack,header)
//     .then((response)=>{
//         console.log(response.data)
//     })
//     .catch.log((error)=> {
//         console.log(error.response)
//     })
// }

// export const deleteMusicList = (saveData) => {
//     axios.delete(urlDelete, header)
//         .then((response) => {
//             console.log(response.data)
//         })  
//         .catch.log((error) => {
//             console.log(error.response)
//         })

// }

// export const removeTrackFromPlayList = (saveData) => {
//     axios.delete(urlRemoveTrack, header)
//         .then((response) => {
//             console.log(response.data)
//         })
//         .catch.log((error) => {
//             console.log(error.response)
//         })
//     }