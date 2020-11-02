const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://pixabay.com/api/';
const api_key = '18826541-2d70dd8c7942c2ed60e3bbf37';

export const getImages = (busqueda, imagenesPorPagina, paginaactual) => `${cors_anywhere}${base_url}?key=${api_key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

export const imagenesPorPagina = 30;