<script>
export default {};
</script>

<template>
  <div class="footer-container">
    <footer class="text-center">
      <div class="container d-flex justify-content-center py-5">
        <a
          href="https://www.facebook.com/"
          type="button"
          class="btn btn-custom-secondary social-icon mx-2"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.youtube.com/"
          type="button"
          class="btn btn-custom-secondary social-icon mx-2"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          type="button"
          class="btn btn-custom-secondary social-icon mx-2"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          href="https://x.com/?lang=it"
          type="button"
          class="btn btn-custom-secondary social-icon mx-2"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>

      <!-- Copyright -->
      <div class="text-center text-white p-3 copy-box">
        © 2024 Copyright:
        <a class="text-white" href="#">DeliveBoo</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables";
.text-white {
  color: white !important;
}

.footer-container {
  height: 195px;
  background-color: $color-primary;

  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;

    i {
      font-size: 1.2rem;
    }
  }

  .copy-box {
    background-color: #26a69a;
  }
}

@media (max-width: 576px) {
  .footer-container {
    margin-top: 60px;
  }
}
</style>
