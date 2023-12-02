"use client";

import Link from "next/link";
import SearchModal from "@/component/nav/SearchModal";
import { FC, useEffect } from "react";

const NavBar: FC = () => {
    useEffect(() => {
        import("bootstrap");
    }, []);
    return <>
        <nav className="navbar teal lighten-1 navbar-margin">
            <div className="container">
                {/* NavBar logo*/}
                <Link href="/" className="navbar-brand text-light">
                    {/*<img src="/public/asd.svg" alt="Ezports" width={50}/>*/}
                EZports
                </Link>

                {/* NavBar search form*/}
                <form role="search">
                    <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#search-modal" style={{ width: "8em" }}>
                        <i className="bi bi-search" style={{ marginRight: "10%" }}/>
                    Search
                    </button>
                </form>
            </div>
        </nav>
        <SearchModal />
    </>;
};

export default NavBar;
