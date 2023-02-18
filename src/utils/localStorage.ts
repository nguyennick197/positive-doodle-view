export const loadSavedDoodles = async () => {
    const serializedDoodles = await localStorage.get('favorites');
    if (serializedDoodles) return JSON.parse(serializedDoodles);
    return [];
}

export const saveDoodle = async (id: number) => {
    const savedDoodles = await loadSavedDoodles();
    savedDoodles.push({
        id,
        dateSaved: new Date()
    });
    const serializedDoodles = JSON.stringify(savedDoodles);
    localStorage.setItem('favorites', serializedDoodles);
}

export const unsaveDoodle = async (id: number) => {
    const savedDoodles = await loadSavedDoodles();
    const doodleIndex = savedDoodles.findIndex((doodle: any) => doodle.id === id);
    if (doodleIndex === -1) return;
    savedDoodles.splice(doodleIndex, 1);
}