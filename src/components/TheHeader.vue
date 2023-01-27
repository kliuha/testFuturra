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
  width: 1440px;
  height: 56px;
  padding: 8px 135px;
  margin-bottom: 65px;
}
.header__img-logo {
  width: 179px;
  height: 40px;
}
</style>
