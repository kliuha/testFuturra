<template>
  <header class="header">
    <img
      src="../assets/LogoBox.svg"
      alt="LogoHeader"
      class="header__img-logo"
    />
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
.header {
  width: 100%;
}
.header__img-logo {
  width: 179px;
  height: 40px;
}
@media screen and (min-width: 360px) {
  .header {
    padding: 8px 20px;
    margin-bottom: 32px;
  }
}
@media screen and (min-width: 1440px) {
  .header {
    padding: 8px 135px;
    margin-bottom: 65px;
  }
}
</style>
