import Menu from "./Menu";

export default function Navbar() {
    return (

        <>
            <div className="flex w-full bg-base-300 h-10 text-justify text-red-600/100 italic">
                <marquee behavior="scroll" direction="left" scrollamount="5">... Stay with Khabar Bangla...</marquee>
            </div>
            <header>
                {/* <div class="relative hover:absolute"> */}
                {/* <div className="fixed top-0 left-0 right-0"> */}
                <div class="mx-auto">
                    <div className="navbar bg-error">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <Menu
                                    tabIndex={0}
                                    device="mobile"
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                />
                            </div>
                            <a className="btn btn-ghost text-xl">Home</a>
                        </div>
                        <div className="navbar-center hidden lg:flex flex-none">
                            <Menu
                                device="desktob"
                                className="menu menu-horizontal px-1"
                            />
                        </div>

                        <div className="flex justify-end flex-1 px-2">
                            <div className="flex items-stretch">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn hidden sm:inline-flex">Categories</div>
                                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        <li><a>Politics</a></li>
                                        <li><a>Science</a></li>
                                        <li><a>Sports</a></li>
                                        <li><a>Technology</a></li>
                                        <li><a>Top</a></li>
                                        <li><a>Tourism</a></li>
                                        <li><a>Torld</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
            </header>
        </>
    );

}