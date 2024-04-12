const Api_key : string | undefined = process.env.API_KEY;

export const request = {
    fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
    fetchTrendingTvShows: `/trending/tv/week?api_key=${Api_key}`,
    fetchActionTvShows: `/discover/tv?api_key=${Api_key}&language=en-US&page=1&with_genres=action&with_networks=1772`,
    fetchComedyTvShows: `/discover/tv?api_key=${Api_key}&language=en-US&page=1&with_genres=comedy&with_networks=213`,
    fetchAnimationTvShows: `/discover/tv?api_key=${Api_key}&language=en-US&page=1&with_genres=16&with_networks=213`,
    fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
}