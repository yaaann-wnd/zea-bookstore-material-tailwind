"use client";

import { Button as Btn } from "@material-tailwind/react";

export default function Button ({children, variant}) {
    return (
        <Btn variant={variant} ripple={true} className="flex items-center gap-3 normal-case" size="sm">
            {children}
        </Btn>
    )
}