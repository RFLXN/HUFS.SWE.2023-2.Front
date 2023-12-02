import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import React from "react";
import { isDarkMode } from "@/function/cookie";
import NavBar from "@/component/nav/NavBar";

export const metadata: Metadata = {
    title: "Ezports"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    const cookieStore = cookies();
    const darkMode = isDarkMode(cookieStore);

    return (
        <html lang="ko">
            <body>
                <NavBar/>
                <main className="container">
                    {children}
                </main>
            </body>
        </html>
    );
}
