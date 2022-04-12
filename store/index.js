export const state = () => ({
  bookSearchQuery: null,
  bookSearchResults: null,
  totalResults: [],
  favList: [],
  readingList: [],
  readList: [],
  toReadList: []
})
export const mutations = {
  SET_BOOK_SEARCH_QUERY (state, book) {
    state.bookSearchQuery = book
  },
  SET_BOOK_SEARCH_RESULTS (state, results) {
    state.bookSearchResults = results
  },
  SET_TOTAL_BOOKS_RESEARCH (state, totalResults) {
    state.totalResults = totalResults
  },
  SET_FAV_LIST(state, favList){
    state.favList = favList
  },
  SET_READING_LIST(state, readingList){
    state.readingList = readingList
  },
  SET_READ_LIST(state, readList){
    state.readList = readList
  },
  SET_TOREAD_LIST(state, toReadList){
    state.toReadList = toReadList
  },
  ADD_FAV_BOOK (state, book) {
    state.favList.push(book)
    localStorage.setItem('favList', JSON.stringify(state.favList))
  },
  ADD_READING_BOOK (state, book) {
    state.readingList.push(book)
    localStorage.setItem('readingList', JSON.stringify(state.readingList))
  },
  ADD_READ_BOOK (state, book) {
    state.readList.push(book)
    localStorage.setItem('readList', JSON.stringify(state.readList))
  },
  ADD_TOREAD_BOOK (state, book) {
    state.toReadList.push(book)
    localStorage.setItem('toReadList', JSON.stringify(state.toReadList))
  }
}
export const getters = {
  bookSearchResults: state => state.bookSearchResults
}
export const actions = {
  async getBooksByTitle ({ commit, state }) {
    if (state.bookSearchQuery === null) {
      console.error('search query is empty')
      return
    }
    let results
    let totalResults
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${state.bookSearchQuery}`)
      .then(response => response.json())
      .then((response) => {
        totalResults = response.totalItems
        if (totalResults === 0) {
          window.alert(`No hay resultados buscando por: "${state.bookSearchQuery}"`)
          results = []
        } else {
          results = response.items
        }
        commit('SET_BOOK_SEARCH_RESULTS', results)
      })
  },
  addBookToFavList ({ commit }, book) {
    commit('ADD_FAV_BOOK', book)
  },
  addBookToReadingList ({ state, commit }, book) {
    if (state.readingList === []) {
      alert('no hay libros en la lista')
      return
    }
    commit('ADD_READING_BOOK', book)
  },
  addBookToReadList ({ state, commit }, book) {
    if (state.readList === []) {
      alert('no hay libros en la lista')
      return
    }
    commit('ADD_READ_BOOK', book)
  },
  addBookToToReadList ({ state, commit }, book) {
    if (state.toReadList === []) {
      alert('no hay libros en la lista')
      return
    }
    commit('ADD_TOREAD_BOOK', book)
  },
  loadStoredLists ({ commit }) {
    let favList = localStorage.getItem('favList')
    let readingList = localStorage.getItem('readingList')
    let readList = localStorage.getItem('readList')
    let toReadList = localStorage.getItem('toReadList')
    if (favList === null) {
      favList = []; 
    } else {
      favList = JSON.parse(favList)  
    }
    if (readingList === null) {
      readingList = [];
    } else {
      readingList = JSON.parse(readingList)
    }
    if (readList === null) {
      readList = [];
    } else {
      readList = JSON.parse(readList)
    }
    if (toReadList === null) {
      toReadList = [];
    } else {
      toReadList = JSON.parse(toReadList)
    }
    commit('SET_FAV_LIST', favList) 
    commit('SET_READING_LIST', readingList)
    commit('SET_READ_LIST', readList)
    commit('SET_TOREAD_LIST', toReadList)
  }
}
