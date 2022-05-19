import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, ALUNO } from '../constants/urls'
import styled from 'styled-components'

const MatchesPageStyle = styled.div`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}   
`

function MatchesPage() {

    const [matches, setMatches] = useState(undefined)

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        const url = `${BASE_URL}/${ALUNO}/matches`

        axios
            .get(url)
            .then((response) => {
                setMatches(response.data.matches)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const allMatches =  matches && matches.map((match) => {
        return (
            <figure key={match.id}>
                <img
                    src={match.photo}
                    alt={`foto de ${match.name}`}
                    height={"100vh"}
                >
                </img>
                <span>{match.name}</span>
                <hr />
            </figure>
        )
    })

    return (
        <MatchesPageStyle>

            <h2>Matches</h2>
            {allMatches}

        </MatchesPageStyle>
    )
}

export default MatchesPage