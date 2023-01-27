<template>
  <div class="home position-relative">
    <Header />
    <div class="body-wrapper d-flex justify-content-between">
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
      <TrialBox class="trial-component col-3" />
    </div>
    <div class="modal-wrapper" v-if="isShow">
      <TheModal class="modal" />
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
  },
};
</script>

<style scoped>
.body-wrapper {
  width: 971px;
  margin-left: auto;
  margin-right: auto;
}
.card-plan {
  width: 473px;
  height: 287px;
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
</style>
