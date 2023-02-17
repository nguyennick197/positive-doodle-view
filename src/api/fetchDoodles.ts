type fetchDoodleParams = {
    pageParam: number | string;
    per_page: number;
    search?: string;
}

export async function fetchDoodles({
     pageParam = 1,
     per_page = 8,
     search
}: fetchDoodleParams) {
    let url = `${import.meta.env.VITE_DOODLES_API}/doodles?page=${pageParam}&per_page=${per_page}&order=descending`;
    if (search) {
        url += `&search=${search}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
}