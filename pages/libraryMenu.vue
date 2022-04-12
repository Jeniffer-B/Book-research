<template>
  <div>
    <MyNav />
    <div>
      <div class="containerLibrary">
        <h2 class="text-2xl">
          Librería
        </h2>
        <div class="sectionContainer">
          <div class="bookcategory favoritos" @click="openFavoriteList">
            <p class="text-2xl">
              FAVORITOS
            </p>
          </div>
          <div class="bookcategory leyendo" @click="openReadingList">
            <p class="text-2xl">
              LEYENDO
            </p>
          </div>
          <div class="bookcategory porLeer" @click="openToReadList">
            <p class="text-2xl">
              POR LEER
            </p>
          </div>
          <div class="bookcategory leidos"  @click="openReadList">
            <p class="text-2xl">
              LEÍDOS
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import MyNav from '@/components/MyNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'LibraryMenu',
  components: {
    MyNav,
    Footer
  },
  methods: {
    openFavoriteList () {
      this.$router.push('/favoriteList')
    },
    openReadingList () {
      this.$router.push('/readingList')
    },
    openReadList () {
      this.$router.push('/readList')
    },
    openToReadList () {
      this.$router.push('/toReadList')
    },
    
  }
}
</script>
<style scoped>
  .containerLibrary{
    height:100vh;
    display: flex;
    flex-direction: column;
    background-color: #ECECEC;
  }
  h2{
    text-align: center;
    letter-spacing: 0.3em;
    font-size: 3em;
    margin: 3% 0%;
  }
  .sectionContainer{
    height:100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  .bookcategory{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2%;
    width: 300px;
    height: 500px;
    border-radius: 1px;
    box-shadow:  8px 8px 12px #D1CEE1,
                 -8px -8px 12px #ECECEC;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .bookcategory:hover {
    transform: scale(1.1);
  }
  .bookcategory p{
    letter-spacing: 0.2em;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.2;
    color: #fff;
  }
  .favoritos{
    background-color: #006882;
  }
  .leyendo{
    background-color: #46749A ;
  }
  .porLeer {
    background-color: #7D7EA6;
  }
  .leidos {
    background-color: #A68BA9;
  }
/*Mobile*/
@media (max-width: 575.98px)and (orientation:portrait) {
  h2{
    font-size: 2em;
    margin: 2% 2%;
  }
  .bookcategory{
    margin: 0 2%;
    width: 150px;
    height: 200px;
    box-shadow:  4px 4px 6px #D1CEE1,
                 -4px -4px 6px #ECECEC;
  }
  .bookcategory:hover {
    transform: scale(0.40);
  }
  .bookcategory p{
    font-size: 1em;
  }
  .bookcategory:hover {
    transform: scale(1.1);
  }
}
@media (min-width: 576px) and (max-width: 991.98px) and (orientation:landscape) {
  h2{
    font-size: 2em;
    margin: 2% 2%;
  }
  .bookcategory{
    margin: 0 2%;
    width: 140px;
    height: 200px;
  }
  .bookcategory:hover {
    transform: scale(0.40);
  }
  .bookcategory p{
    font-size: 1em;
  }
  .bookcategory:hover {
    transform: scale(1.1);
  }
}
/* Tablet */
@media (min-width: 576px) and (max-width: 991.98px) and (orientation:portrait) {
  h2{
    font-size: 4em;
    margin: 5% 4%;
  }
  .bookcategory{
    margin: 0 4%;
    width: 280px;
    height: 400px;
  }
  .bookcategory:hover {
    transform: scale(0.80);
  }
  .bookcategory p{
    font-size: 2em;
  }
  .bookcategory:hover {
    transform: scale(1.2);
  }
}
@media (min-width: 991.98px) and (max-width: 1199.98px)and (orientation:landscape) {
  h2{
    font-size: 4em;
    margin: 5% 4%;
  }
  .bookcategory{
    margin: 0 5%;
    width: 380px;
    height: 300px;
  }
  .bookcategory:hover {
    transform: scale(0.80);
  }
  .bookcategory p{
    font-size: 2em;
  }
  .bookcategory:hover {
    transform: scale(1.2);
  }
}
</style>
