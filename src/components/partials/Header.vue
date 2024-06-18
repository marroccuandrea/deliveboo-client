<script>
export default {};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <form class="form-inline">
            <div class="input-group">
              <div class="input-group-prepend">
                <button class="input-group-text" id="basic-addon1">
                  Cerca
                </button>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Cerca il ristorante"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #2dc4b6;
  height: 80px;
  padding: 0 !important;
  display: flex;
  align-items: center;

  .container-fluid {
    display: flex;
    justify-content: space-between;
  }
}
</style>
