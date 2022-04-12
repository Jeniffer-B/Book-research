<template>
  <div class="idContainer">
    <MyNav />
    <div class="selectBookContainer">
      <div v-if="selectedBook !== null">
        <div class="containerImg">
          <img
            v-if="!selectedBook.volumeInfo.imageLinks"
            src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
            alt="no-cover"
          >
          <img v-else :src="selectedBook.volumeInfo.imageLinks.thumbnail" alt="book-cover">
        </div>
        <div class="title">
          {{ selectedBook.volumeInfo.title }}
        </div>
        <div class="bookImformation">
          <div> <strong>Autor:</strong> {{ bookAuthors }}</div>
          <div><strong>Editorial:</strong> {{ selectedBook.volumeInfo.publisher }}</div>
          <div><strong>Fecha de publicación:</strong> {{ selectedBook.volumeInfo.publishedDate }}</div>
          <div><strong>Páginas:</strong> {{ selectedBook.volumeInfo.pageCount }}</div>
          <div>
            <strong>Sinopsis:</strong>
          </div>
          <div class="bookDescription">
            {{ selectedBook.volumeInfo.description }}
          </div>
          <div class="selectLibrary">
            <div class="estante">
              <img src="../../static/icons/estante.png">
              <select v-model="selected">
                <option disabled value="">
                  Selecciona estante
                </option>
                <option value="favList">
                  Favoritos
                </option>
                <option value="readingList">
                  Leyendo
                </option>
                <option value="toReadList">
                  Por leer
                </option>
                <option value="readList">
                  Leídos
                </option>
              </select>
            </div>
            <button
              @click="selectBook"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import MyNav from '@/components/MyNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'BookInfoId',
  components: {
    MyNav,
    Footer
  },
  data () {
    return {
      selectedBook: null,
      selected: ''
    }
  },
  computed: {
    bookAuthors () {
      if (this.selectedBook.volumeInfo.authors.length === 0) {
        return []
      }
      return this.selectedBook.volumeInfo.authors.join(', ')
    },
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    })
  },
  mounted () {
    if (this.$store.state.bookSearchResults === null) {
      this.redirectHome()
    }
    this.selectedBook = this.$store.state.bookSearchResults.find(book => book.id === this.$route.params.id)
    if (this.selectedBook === null) {
      this.redirectHome()
    }
  },
  methods: {
    ...mapActions({
      addFavBook: 'addBookToFavList',
      addReadingList: 'addBookToReadingList',
      addReadList: 'addBookToReadList',
      addToReadList: 'addBookToToReadList'
    }),
    redirectHome () {
      this.$router.push('/')
    },
    selectBook () {
      switch (this.selected) {
        case 'favList':
          this.addFavBook(this.selectedBook)
          break
        case 'readingList':
          this.addReadingList(this.selectedBook)
          break
        case 'readList':
          this.addReadList(this.selectedBook)
          break
        case 'toReadList':
          this.addToReadList(this.selectedBook)
          break
      }
    }
  }
}
</script>
<style scoped>
  .idContainer {
    height:100vh;
  }
  .selectBookContainer{
    height:100vh;
    display: flex;
    background-color: #ECECEC;
    padding: 0 20%;
  }
  .estante {
    width: 50%;
    justify-content: center;
    display: inline-flex;
  }
  .estante select {
    margin: 0 5%;
  }
  .containerImg{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3% 5%;
    padding: 2% 2%;
    border-bottom: #000 3px solid;
  }
  .title{
    text-align: center;
    font-size: 2em;
  }
  .titleItems{
    font-size: 2em;
  }
  .bookImformation{
    display: flex;
    flex-direction: column;
    margin: 2% 5%;
     padding: 2% 2%;
  }
  .bookImformation div {
    margin: 1% 3%;
  }
  .bookDescription{
    text-align: justify;
    padding: 0 3%;
  }
  .selectLibrary{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: #D5B1AF;
    border: none;
    font-size: 1rem;
    width: 10em;
    height: 3em;
    margin: 3%;
    border-radius: 1rem;
    color:#d8918d;
    box-shadow: 0 0.4rem #dfd9d9;
    cursor: pointer;
    color: #fff;
  }
  button:active {
    box-shadow: 0 0.2rem #dfd9d9;
    transform: translateY(0.2rem);
  }
  button:hover:not(:disabled) {
    background: #AB8987;
    text-shadow: 0 0.1rem #bcb4b4;
  }
  /* Tablet */
@media (min-width: 576px) and (max-width: 991.98px) and (orientation:portrait) {
  .selectBookContainer{
    padding: 0 10%;
  }
}
@media (min-width: 991.98px) and (max-width: 1199.98px)and (orientation:landscape) {
  .selectBookContainer{
    padding: 0 10%;
  }
}
/*Mobile*/
@media (max-width: 575.98px)and (orientation:portrait) {
  .selectBookContainer{
    padding: 0 5%;
  }
  .title{
    font-size: 1.2em;
  }
  .titleItems{
    font-size: 1em;
  }
}
@media (min-width: 576px) and (max-width: 991.98px) and (orientation:landscape) {
  .selectBookContainer{
    padding: 0 1%;
  }
  .title{
    font-size: 1.2em;
  }
  .titleItems{
    font-size: 1em;
  }
}
</style>
