<template>
  <header class="header">
    <a href="#" class="header__logo">
      <img src="@/assets/img/logo.svg" alt="Phazes logo">
    </a>
    <div class="header__phone">
      <a href="tel:0497735177" class="header__phone--num link-cta">0497 73 51 77</a>
    </div>

    <nav id="navbar-example2" class="navbar-expand-lg navbar">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav nav-pills">
          <li class="nav-item ">
            <a class="nav-link" href="#home">
              <span class="square--link"></span>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#mixes">
              <span class="square--link"> </span>
              Mixes
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#events">
              <span class="square--link"> </span>
              Events
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact-section">
              <span class="square--link"> </span>
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#merch">
              <span class="square--link--no-line"> </span>
              Merch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: "BookMe.vue"
}
</script>

<style scoped>

</style>