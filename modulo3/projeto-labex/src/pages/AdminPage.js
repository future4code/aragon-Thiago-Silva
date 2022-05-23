import Header from "../components/Header"

function AdminPage () {
    return (
        <main>
            <Header 
            currentPage={"admin"}
            />
            <h3>Crie uma nova viagem</h3>
            <hr />
            <h3>Lista de Viagens</h3>
        </main>
    )
}

export default AdminPage