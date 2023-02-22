type fetchDoodleParams = {
    pageParam: number | string;
    per_page: number;
    search?: string;
    tag?: string;
    favorites?: string;
}

export const fetchDoodles = async ({
     pageParam,
     per_page = 8,
     search,
     tag,
     favorites
}: fetchDoodleParams) => {
    let url = `${import.meta.env.VITE_DOODLES_API}/doodles?page=${pageParam}&per_page=${per_page}&order=descending`;
    if (search) {
        url += `&search=${search}`;
    }
    if (tag) {
        url += `&tag=${tag}`;
    }
    if (favorites) {
        url += `&ids=${favorites}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
}