<template>
  <div>
    <MyNav />
    <div class="listBooks">
      <div class="tittle">
        <h2>Por leer</h2>
      </div>
      <CardBook
        v-for="book in this.$store.state.favList"
        :key="book.id"
        :book-id="book.id"
        :title="book.volumeInfo.title"
        :authors="getBookAuthors(book.volumeInfo)"
        :book-thumbnail="book.volumeInfo.imageLinks.thumbnail"
      />
    </div>
    <Footer />
  </div>
</template>
<script>
import CardBook from '~/components/CardBook.vue'
import MyNav from '@/components/MyNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'FavoriteList',
  components: {
    MyNav,
    Footer,
    CardBook
  },
  methods: {
    getBookAuthors (bookData) {
      if (bookData.authors === undefined) {
        return []
      }
      return bookData.authors
    }
  }
}
</script>
<style scoped>
  .listBooks{
    height:100vh;
    background-color: #ECECEC;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .tittle{
    width: 100%;
    height: 150px;
    text-align: center;
  }
  h2{
    font-size: 1.5em;
    letter-spacing: 0.2em;
    padding: 2% 2%;
  }
</style>
