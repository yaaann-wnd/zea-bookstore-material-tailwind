"use client";

import { Button as Btn } from "@material-tailwind/react";

export default function Button ({children}) {
    return (
        <Btn className="flex items-center gap-3" size="sm">
            {children}
        </Btn>
    )
}