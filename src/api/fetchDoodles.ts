import { useInfiniteQuery } from '@tanstack/react-query'

type fetchParams = {
    page: number
}

export async function fetchDoodles({
     pageParam = 1,
}: any) {
    console.log("Page param", pageParam)
    let url = `${import.meta.env.VITE_DOODLES_API}/doodles?page=${pageParam}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}