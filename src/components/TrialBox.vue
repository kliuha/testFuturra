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
        <p class="trial-box__timer-time">{{ remainingTimeToShow }}</p>
        <div
          class="progress-bar"
          ref="elapsedTime"
          role="progressbar"
          aria-valuenow="seconds"
          aria-valuemin="0"
          aria-valuemax="180"
        ></div>
      </div>
    </div>
    <ul class="list-group list-group-flush list-unstyled benefits-list">
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
.trial-box__title-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-group-item__text {
  font-weight: 400;
}
.trial-box__timer-time {
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
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
  background: white;
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
  position: relative;
  background: #000000;
  border-radius: 12px;
}
.progress-bar {
  background: #00ca14;
}
.progress-bar__critical-time {
  filter: drop-shadow(0px 0px 6px rgba(255, 0, 0, 0.8));
}
@media (min-width: 360px) and (max-width: 1439px) {
  .benefits-list,
  .trial-box__secure-info,
  .trial-box__info-text,
  .trial-box__secure-info,
  .trial-box__info-text {
    position: absolute;
    width: 320px;
    left: 50%;
    transform: translateX(-50%);
  }
  .benefits-list {
    top: 380px;
  }
  .list-group-item__text {
    font-size: 16px;
    line-height: 19.2px;
    width: 286px;
  }
  .trial-box__secure-info {
    top: 614px;
  }
  .trial-box__info-text {
    top: 700px;
  }
  .col-3 {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 16px;
  }
  .card-title {
    font-size: 18px;
    line-height: 21.6px;
  }
  .progress {
    width: 110px;
    height: 47px;
    margin-left: 12px;
  }
  .card-body {
    flex: 0 0 auto;
  }
  .trial-box {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media screen and (min-width: 1440px) {
  .trial-box__title-wrapper {
    margin-bottom: 24px;
  }
  .progress {
    width: 160px;
    height: 60px;
  }
  .trial-box__body {
    flex-basis: 0;
  }
}
</style>
