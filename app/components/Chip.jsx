"use client";

import { Chip as ChipPills } from "@material-tailwind/react";

export default function Chip({value}) {
  return (
    <ChipPills variant="outlined" value={value} className="rounded-full normal-case py-1 px-3 w-fit" />
  );
}
