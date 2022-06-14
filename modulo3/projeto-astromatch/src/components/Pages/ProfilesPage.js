import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL, ALUNO } from '../constants/urls'

function ProfilesPage() {

    const [profile, setProfile] = useState({})

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
            .then((response) => {
                if (body.choice && response.data.isMatch) {
                    alert("Match. Hoje tem!")
                }
                getProfile()
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const resetProfiles = () => {
        const url = `${BASE_URL}/${ALUNO}/clear`

        axios
            .put(url)
            .then(() => {
                alert("Perfis resetados com sucesso!")
                getProfile()
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const profileCard = profile ? (
        <section>
            
            
            <div className='card-perfil'>
                <button onClick={() => chooseProfile(profile.id, false)}>Dislike</button>
                <img
                src={profile.photo}
                alt={profile.photo_alt}
                height={"240px"}
            >
            </img>
                <button onClick={() => chooseProfile(profile.id, true)}>Like</button>
            </div>

            <strong>{profile.name}, {profile.age}</strong>
            <p>{profile.bio}</p>

        </section>
    ) : (
        <div>
            <h3>Acabaram os matches! Clique em 'Resetar Perfis' para reiniciar</h3>
            <button onClick={() => resetProfiles()} >Resetar Perfis</button>
        </div>
    )

    return (
        <div>
            <p>Página de Perfis</p>
            {profileCard}
        </div>
    )
}

export default ProfilesPage