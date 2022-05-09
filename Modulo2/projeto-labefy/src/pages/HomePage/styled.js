import styled from 'styled-components'

export const PlaylistsCard = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
border-radius: 10px;
background: dodgerblue;
font-weight: bold;
color: #fff;
vertical-align: middle;
text-align: center;
font-family: Arial, Helvetica, sans-serif;

&:hover {
    cursor: pointer;
    transition: all 0.1s;
    color: yellow;
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
}

.PlaylistContainer > button {
    display: inline;
}
`