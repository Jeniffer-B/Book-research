<template>
  <footer>
    <div class="social">
      <div>
        <a href="https://www.behance.net/jenifferbeltran" target="_blank">
          <img src="../static/social-icons/behance.png">
        </a>
      </div>
      <div>
        <a href="https://github.com/Jeniffer-B" target="_blank">
          <img src="../static/social-icons/github.png">
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/jeniffer-beltran-36b22421b/" target="_blank">
          <img src="../static/social-icons/linkedin.png">
        </a>
      </div>
    </div>
    <div class="footer-text">
      <div>
        <p> Diseñado y desarrollado por Jeniffer Beltrán</p>
      </div>
      <div>
        <p> Imágenes e iconos sin derechos de autor</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D5D5D3;
    height:auto;
  }
  .social {
    display: flex;
    margin: 2% 2%;
  }
  .social div {
    margin: 4% 5%;
  }
  .footer-text {
    display: inline-flex;
    width: 40%;
  }
  .footer-text div {
    border-left: #000 1px solid;
    padding: 0.5% 2%;

  }
/* Tablet */
@media (min-width: 576px) and (max-width: 991.98px) and (orientation:portrait) {
  .footer-text {
    flex-direction: column;
    width: 50%;
  }
}
@media (min-width: 991.98px) and (max-width: 1199.98px)and (orientation:landscape) {
  .footer-text {
    width: 70%;
  }
}
/*Mobile*/
@media (max-width: 575.98px)and (orientation:portrait) {
  footer{
    flex-direction: column;
  }
  .footer-text {
    flex-direction: column;
    width: 90%;
    margin: 5% 5%;
  }
}

</style>
