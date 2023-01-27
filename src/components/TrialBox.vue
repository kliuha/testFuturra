<template>
  <div class="trial-box card">
    <div class="trial-box__title-wrapper">
      <div class="card-body trial-box__body">
        <h5 class="card-title">
          3-day trial for <span class="orange">$0.99</span>
        </h5>
        <p class="card-text mb-0" v-if="remainingTime > 0">Then $9.99</p>
        <p class="card-text trial-box__default-price" v-if="remainingTime > 0">
          <s>$39.99/week</s>
        </p>
        <p class="card-text mb-0" v-if="remainingTime == 0">Then $39.99/week</p>
      </div>
      <div class="progress" ref="timer" v-if="remainingTime > 0">
        <div
          class="progress-bar"
          ref="elapsedTime"
          role="progressbar"
          aria-valuenow="seconds"
          aria-valuemin="0"
          aria-valuemax="180"
        >
          {{ remainingTimeToShow }}
        </div>
      </div>
    </div>
    <ul class="list-group list-group-flush list-unstyled">
      <li class="list-group-item">
        <span class="list-group-item__text"
          >Exclusive access to <span class="orange">350+</span> learning
          programs</span
        >
      </li>
      <li class="list-group-item">
        <span class="list-group-item__text">Personalized course plan</span>
      </li>
      <li class="list-group-item">
        <span class="list-group-item__text"
          >Comfy learning schedule made by you</span
        >
      </li>
      <li class="list-group-item">
        <span class="list-group-item__text">
          <span class="orange">24/7</span> tutor support in a secure chat</span
        >
      </li>
      <li class="list-group-item">
        <span class="list-group-item__text">Lifetime access to materials</span>
      </li>
    </ul>
    <div class="card-body trial-box__secure-info">
      <p class="mb-0 trial-box__secure-text">Safe & secure payment</p>
    </div>
    <p class="card-text trial-box__info-text">
      $0.99 charged today. If you don't cancel at least 24 hours before the end
      of the 3-day trial period, you will automatically be charged the full
      price of $19.99/Month . You can cancel your subscription at any time. By
      continuing, you indicate that you've read and agree to our Terms &
      Conditions, Privacy Policy , Money Back , and Subscription Terms .
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TrialBox",
  data: () => ({
    maxTimeForPromo: 180,
    remainingTimeToShow: "",
    countdown: null,
  }),
  mounted() {
    this.getRemainingTime();
    if (this.remainingTime > 0) {
      this.startTimer();
    }
  },
  methods: {
    ...mapActions("appModule", [
      "setRemainingTime",
      "getRemainingTime",
      "decreaseRemainingTime",
    ]),
    startTimer() {
      const elapsedTimeElement = this.$refs.elapsedTime;
      const timer = this.$refs.timer;
      elapsedTimeElement.style.width = "100%";
      this.countdown = setInterval(() => {
        this.decreaseRemainingTime();
        this.setRemainingTime();
        if ((this.remainingTime <= 10) & (this.remainingTime > 0)) {
          timer.classList.add("progress-bar__critical-time");
        }
        elapsedTimeElement.style.width =
          (100 * this.remainingTime) / this.maxTimeForPromo + "%";
        const minutesToShow = Math.floor((this.remainingTime % (60 * 60)) / 60);
        const secondsToShow = Math.floor(this.remainingTime % 60);
        this.remainingTimeToShow = minutesToShow + ":" + secondsToShow;
        if (this.remainingTime == 0) {
          this.stopTimer();
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.countdown);
    },
  },
  computed: {
    ...mapGetters("appModule", ["remainingTime"]),
  },
};
</script>

<style scoped>
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
.trial-box__title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 426px;
}
li::before {
  content: url("../assets/Dot.png");
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.list-group,
.list-group-item {
  border: none !important;
  padding: 0;
}
.list-group-item:not(:last-child) {
  margin-bottom: 16px;
}
.list-group-item:last-child {
  margin-bottom: 24px;
}
.orange {
  color: #ff8d24;
}
.trial-box__default-price {
  color: #000000;
  opacity: 0.4;
}
.trial-box__secure-info {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin: 0 auto 24px;
}

.trial-box__secure-info::before {
  content: url("../assets/Lock.png");
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
}
.trial-box__info-text {
  font-size: 12px;
  font-weight: normal;
  line-height: 14.4px;
  color: #000000;
  opacity: 0.5;
  text-align: center;
}
.trial-box__body {
  display: block;
  padding: 0;
  margin-bottom: 24px;
  flex-basis: 0;
}
.list-group-item__text {
  display: inline-block;
  vertical-align: middle;
}
.trial-box__secure-text {
  font-size: 16px;
  color: #01c120;
  display: inline-block;
  vertical-align: middle;
}
.progress {
  width: 160px;
  height: 60px;
  background: #000000;
  border-radius: 12px;
}
.progress-bar {
  background: #00ca14;
}
.progress-bar__critical-time {
  filter: drop-shadow(0px 0px 6px rgba(255, 0, 0, 0.8));
}
</style>
