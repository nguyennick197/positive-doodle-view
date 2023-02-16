type fetchDoodleParams = {
    pageParam: number
}

export async function fetchDoodles({
     pageParam = 1,
}: fetchDoodleParams) {
    console.log("Page param", pageParam)
    let url = `${import.meta.env.VITE_DOODLES_API}/doodles?page=${pageParam}&per_page=18&order=descending`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}