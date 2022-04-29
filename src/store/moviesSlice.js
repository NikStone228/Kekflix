import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  trending: [],
  premiers: [],
  isLoading: false,
  reviews: [],
  player: {},
  found: [],
};

const url =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

const premierUrl =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1";

const searchUrl =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=%D0%BC%D0%BE%D1%80%D0%B1%D0%B8%D1%83%D1%81&page=1";

export const getMovies = createAsyncThunk("movies/getTopMovies", () => {
  return fetch(url, {
    method: "GET",
    headers: {
      "X-API-KEY": "60ada5b6-d69c-404b-bea5-d84aea748908",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const getPremiers = createAsyncThunk("movies/getPremiers", () => {
  return fetch(premierUrl, {
    method: "GET",
    headers: {
      "X-API-KEY": "60ada5b6-d69c-404b-bea5-d84aea748908",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const getReviews = createAsyncThunk("movies/getReviews", (id) => {
  return fetch(
    `https://kinopoiskapiunofficial.tech/api/v1/reviews?filmId=${id}&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "60ada5b6-d69c-404b-bea5-d84aea748908",
        "Content-Type": "application/json",
      },
    }
  )
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const searchFilms = createAsyncThunk("movies/searchFilms", (name) => {
  return fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${name}&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "60ada5b6-d69c-404b-bea5-d84aea748908",
        "Content-Type": "application/json",
      },
    }
  )
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const getPlayer = createAsyncThunk("movies/getPlayer", (id) => {
  return fetch(`http://p.frkp.club/index.php?kinopoisk=${id}`)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [getPremiers.pending]: (state) => {
      state.isLoading = true;
    },
    [getReviews.pending]: (state) => {
      state.isLoading = true;
    },
    [getPlayer.pending]: (state) => {
      state.isLoading = true;
    },
    [searchFilms.pending]: (state) => {
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.trending = action.payload.films;
    },
    [getPremiers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.premiers = action.payload.films;
    },
    [getReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload.reviews;
    },
    [getPlayer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.player = action.payload.data[0];
    },
    [searchFilms.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload.films);
      state.found = action.payload.films;
    },
    [getMovies.rejected]: (state) => {
      state.isLoading = false;
    },
    [getPremiers.rejected]: (state) => {
      state.isLoading = false;
    },
    [getReviews.rejected]: (state) => {
      state.isLoading = false;
    },
    [getPlayer.rejected]: (state) => {
      state.isLoading = false;
    },
    [searchFilms.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default moviesSlice.reducer;
