<template>
  <div class="containerInput">
    <input
      id="searchInput"
      v-model="bookTitle"
      type="text"
      placeholder="Busca por el título (mínimo 4 carácteres)"
      class="searchInput border-2 shadow-2xl"
    >
    <button
      @click="openBookInfo"
    >
      <img src="../static/icons/buscar.png">
    </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Search',
  computed: {
    bookTitle: {
      get () {
        return this.$store.state.bookSearchQuery
      },
      set (value) {
        this.setBookSearchQuery(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      setBookSearchQuery: 'SET_BOOK_SEARCH_QUERY'
    }),
    ...mapActions({
      getBooksByTitle: 'getBooksByTitle'
    }),
    openBookInfo () {
      this.getBooksByTitle()
    }
  }
}
</script>
<style scoped>
  .containerInput{
    width: 70%;
    display: flex;
    margin: 5% 2%;
    justify-content: center;
    align-items: center;
  }
  #searchInput{
    min-width: 50%;
    width: 100%;
    height: 60px;
    border-radius: 20px;
    text-align: center;
  }
  button {
    background-color:  #c39caa6e;
    border: none;
    width: 5em;
    height: 3em;
    margin: 0 5%;
    border-radius: 1rem;
    box-shadow: 0 0.4rem #dfd9d9;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:active {
    box-shadow: 0 0.2rem #dfd9d9;
    transform: translateY(0.2rem);
  }
  button:hover:not(:disabled) {
    background: #D5B1AF;
    color: white;
    text-shadow: 0 0.1rem #bcb4b4;
  }
/*Mobile*/
@media (max-width: 575.98px)and (orientation:portrait) {
  .containerInput{
    width: 95%;
    margin: 5% 1%;
  }
  button {
    width: 3em;
    height: 3em;
    margin: 0 2%;
  }
}
@media (min-width: 576px) and (max-width: 991.98px) and (orientation:landscape) {
  .containerInput{
    width: 95%;
    margin: 5% 1%;
  }
  button {
    width: 4em;
    height: 3em;
    margin: 0 2%;
  }
}
</style>
