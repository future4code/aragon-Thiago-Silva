import Header from "../components/Header";
import useProtectedPage from "../hooks/useProtectedPage";

function FeedPage() {
    useProtectedPage();

    return(
        <main>
            <Header
                isProtected={true}
            />
            <hr />
            <section>
                <h2>Crie um novo Post</h2>
            </section>
            <hr />
            <section>
                <h2>Lista de Posts</h2>
            </section>
        </main>
    );
};

export default FeedPage;