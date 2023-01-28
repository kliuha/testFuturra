<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "Proxima Nova Font";
  src: url("../public/fonts/proximanova_regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Proxima Nova Font";
  src: url("../public/fonts/proximanova_bold.woff2") format("woff2");
  font-weight: 700;
  font-style: bold;
  font-display: swap;
}
@font-face {
  font-family: "Proxima Nova Font";
  src: url("../public/fonts/proximanova_extrabold.woff2") format("woff2");
  font-weight: 800;
  font-style: bolder;
  font-display: swap;
}
#app {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("./assets/BGPlanets.png");
  background-color: rgba(255, 255, 255, 0.9);
  background-blend-mode: screen;
  background-size: cover;
  font-family: "Proxima Nova Font";
  background-position: center;
  background-repeat: no-repeat;
}
* {
  font-weight: bold;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bolder !important;
}
</style>
