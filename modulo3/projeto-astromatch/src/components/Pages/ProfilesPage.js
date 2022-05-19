import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, ALUNO } from '../constants/urls'
import styled from 'styled-components'

const ProfilePageStyle = styled.div`
 * {
     text-align: center
 }

 img {
     border-radius: 15px
 }
`

function ProfilesPage() {

    const [profile, setProfile] = useState(undefined)

    useEffect(() => {
        getProfile()
    }, []
    )

    const getProfile = () => {
        const url = `${BASE_URL}/${ALUNO}/person`

        axios
            .get(url)
            .then((response) => {
                setProfile(response.data.profile)
                console.log(response.data)
            })
            .catch((error) => {
                alert("Tente novamente mais tarde.")
                console.log(error.message)
            })
    }

    const chooseProfile = (profileId, choice) => {
        const url = `${BASE_URL}/${ALUNO}/choose-person`

        const body = {
            id: profileId,
            choice: choice
        }

        axios
        .post(url, body)
        .then( () => {
            getProfile()
        } )
        .catch( (error) => {
            console.log(error.message)
        } )
    } 

    const resetProfiles = () => {
        const url = `${BASE_URL}/${ALUNO}/clear`

        axios
        .put(url)
        .then( () => {
            alert("Perfis resetados com sucesso!")
        } )
        .catch( (error) => {
            console.log(error.message)
        } )
    }

    const profileCard = profile && (
        <section>
            <img
                src={profile.photo}
                alt={profile.photo_alt}
                height={"240px"}
            >            
            </img>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>

            <button onClick={() => chooseProfile(profile.id, false)}>Dislike</button>
            <button onClick={() => chooseProfile(profile.id, true)}>Like</button>
        </section>
    )

    return (
        <ProfilePageStyle>
            <p>PÁGINA DE PERFIS</p>
            {profileCard}
            <br />
            <button onClick={ () => resetProfiles() } >Resetar Perfis</button>
        </ProfilePageStyle>
    )
}

export default ProfilesPage