import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/Meu";


// Layout principal do App com Navbar fixa
// as páginas com Navbar fixa: home, livros, empréstimos e etc
export function Root() {
    return (
        <>
            <header>
                <Menu />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}