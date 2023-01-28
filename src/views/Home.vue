<template>
  <div class="home position-relative">
    <Header />
    <div class="body-wrapper justify-content-between">
      <div class="start-learning-block">
        <div class="card-plan card bg-transparent border-0 col-6">
          <div class="card-body">
            <h5 class="card-title Txt--48">Start your learning journey now</h5>
            <p class="card-text fs-4">
              Get a <span class="orange">Planet</span><b>Learn</b> plan to rock
              self-learning
            </p>
            <button class="btn btn-dark card-plan__button" @click="showModal">
              Get my plan
            </button>
          </div>
        </div>
      </div>
      <TrialBox class="trial-component col-3" />
    </div>
    <div class="modal-wrapper" v-if="isShow">
      <TheModal @closing="hideModal" class="modal" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/TheHeader.vue";
import TrialBox from "@/components/TrialBox.vue";
import TheModal from "@/components/TheModal.vue";

export default {
  name: "Home",
  components: {
    Header,
    TrialBox,
    TheModal,
  },
  data: () => ({
    isShow: false,
  }),
  methods: {
    showModal() {
      this.isShow = true;
    },
    hideModal() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
.body-wrapper {
  margin-left: auto;
  margin-right: auto;
}
.Txt--48 {
  font-size: 48px;
}
.card-plan__button {
  width: 273px;
  align-content: center;
  height: 56px;
  font-weight: bold;
}
.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
}
.modal-wrapper {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(128, 128, 128, 0.7);
}
.orange {
  color: #ff8d24;
}
@media (min-width: 360px) and (max-width: 1439px) {
  .start-learning-block {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
  }
  .col-6 {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
  .card-body {
    padding: 0;
  }
  .card-title {
    font-size: 32px;
    line-height: 38.4px;
    margin-bottom: 16px;
  }
  .card-text {
    font-size: 24px;
    line-height: 28.8px;
    margin-bottom: 32px;
  }
  .card-plan__button {
    width: 100%;
    font-size: 16px;
    line-height: 19.2px;
  }
}
@media screen and (min-width: 1440px) {
  .trial-box {
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #cdcdcd;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
    border-radius: 24px;
    padding: 24px;
    width: 475.6px;
  }
  .trial-box:before {
    content: url("../assets/Asteroid.svg");
    width: 202.13px;
    height: 80px;
    position: absolute;
    right: 4.05%;
    top: -56px;
    z-index: 10;
  }

  .body-wrapper {
    width: 971px;
    display: flex;
  }
  .card-plan {
    width: 473px;
    height: 287px;
  }
}
</style>
