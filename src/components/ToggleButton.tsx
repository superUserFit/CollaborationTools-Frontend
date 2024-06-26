"use client";

import React from "react";
import { SunIcon, MoonIcon} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";


export const ToggleButton = () => {
    const { theme, setTheme } = useTheme();

    const toggleMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <Button variant="outline" onClick={toggleMode} className="rounded-full">
            <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}