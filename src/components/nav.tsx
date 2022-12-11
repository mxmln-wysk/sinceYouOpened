import { A } from "@solidjs/router"

const Nav = () => {
    return(
        <nav>
            <A href="/about">About</A>
            <A href="/">Home</A>
            <A href="/contact">Contact</A>
        </nav>
    )
}

export default Nav;