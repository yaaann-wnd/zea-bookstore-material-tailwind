"use server";

import { apiUrl } from "../utils/apiUrl";

export async function getBooks() {
    const res = await fetch(`${apiUrl}/books`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error('Gagal memuat data');
    }

    return res.json();
}