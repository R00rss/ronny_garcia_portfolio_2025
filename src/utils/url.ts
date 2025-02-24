export function getSectionFromURL(url: string) {
    try {
        const urlObj = new URL(url);
        const hash = urlObj.hash.substring(1); // Elimina el '#' inicial

        if (!hash) {
            return ""; // No hay hash, retorna una cadena vacía
        }

        const section = hash.split("/")[0].toLowerCase();
        return section;
    } catch (error) {
        console.error("URL inválida:", error);
        return ""; // Si la URL es inválida, retorna una cadena vacía
    }
}