function Header(props) {
    return (
        <div>
            <h1>AstroMatch</h1>

            {props.page === 'profiles-page' ?
                <button onClick={props.goToMatchesPage}>Ir para matches</button>
                : <button onClick={props.goToProfilesPage}>Ir para perfis</button>
            }
        </div>
    )
}

export default Header