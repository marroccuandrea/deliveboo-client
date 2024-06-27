<script>
export default {};
</script>

<template>
  <div class="container-fluid footer-container">
    <footer class="text-center text-lg-start" style="background-color: #26a69a">
      <div class="container d-flex justify-content-center py-5">
        <a
          href="https://www.facebook.com/"
          type="button"
          class="btn btn-primary btn-lg btn-floating mx-2"
          style="background-color: #f9a825"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.youtube.com/"
          type="button"
          class="btn btn-primary btn-lg btn-floating mx-2"
          style="background-color: #f9a825"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          type="button"
          class="btn btn-primary btn-lg btn-floating mx-2"
          style="background-color: #f9a825"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://x.com/?lang=it"
          type="button"
          class="btn btn-primary btn-lg btn-floating mx-2"
          style="background-color: #f9a825"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>

      <!-- Copyright -->
      <div
        class="text-center text-white p-3"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        © 2024 Copyright:
        <a class="text-white" href="#">DeliveBoo</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/mdb.min.scss";

.text-white {
  color: white !important;
}

.footer-container {
  padding: 0 !important;
  margin-top: 50px;
}

.footer-container{
  height: 195px;
}

@media (max-width: 768px) {
  .footer-container{
    margin-top: 20%;
  }
}
</style>
