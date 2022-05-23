import Header from "../components/Header"

function HomePage () {
    return (
        <main>
            <Header 
            currentPage={"home-page"}
            />
            <h3>Inscreva-se numa nova viagem</h3>
            <hr />
            <h3>Lista de Viagens</h3>
        </main>
    )
}

export default HomePage