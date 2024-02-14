import Link from "next/link";

export default function Menu(props)
{
    return(

        <>
            <ul className={props.className}>
                <li><Link href="#">Business</Link></li>
                <li><a>Domestic</a></li>
                <li><a>Education</a></li>
                <li><a>Entertainment</a></li>
                <li><a>Environment</a></li>
                <li><a>Food</a></li>
                <li><a>Health</a></li>

                {props.device == "mobile" && <i className="sm:hidden">
                    <a>Categories</a>
                    <li><a>Politics</a></li>
                    <li><a>Science</a></li>
                    <li><a>Sports</a></li>
                    <li><a>Technology</a></li>
                    <li><a>Top</a></li>
                    <li><a>Tourism</a></li>
                    <li><a>Torld</a></li>
                </i>}
            </ul>
        </>
    );
}