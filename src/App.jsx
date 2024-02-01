import {Popular} from "./sections/index.js";
import {ByCategory, Nav} from "./components/index.js";

function App() {
    return (
        <main>
            <Nav />
            <section  className="relative">
                <Popular />
            </section>
            <section className="relative mx-auto">
                <ByCategory />
            </section>
        </main>
    )
}

export default App
