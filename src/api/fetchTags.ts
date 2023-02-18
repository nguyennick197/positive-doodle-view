export const fetchTags = async() => {
    let url = `${import.meta.env.VITE_DOODLES_API}/doodles/tags?per_page=200`
    const response = await fetch(url);
    const data = await response.json();
    return data;
}