import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout(props)
{
    return(
        <>
        <Header />

        <Navbar />

            <main>
                {props.children}
            </main>

            <Footer />
        </>
    );
}