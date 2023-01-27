<template>
  <div class="modal" ref="modal">
    <div class="modal-header modal-title">Payment method</div>
    <div class="modal-body">
      <button class="modal__paypal-btn"><span>BUY NOW</span></button>
      <button class="modal__google-btn"><span>PAY</span></button>
      <p class="modal__separator">OR</p>
    </div>
    <form class="card card-body modal__form">
      <div class="col px-1 mb-2">
        <label
          for="input3"
          class="ms-2 position-absolute"
          style="margin-top: -0.25rem !important"
        >
          <span class="h6 small bg-white fw-bold px-1">Card number</span>
        </label>
        <input
          type="text"
          placeholder=".... .... .... ...."
          v-mask="'#####-#####-#####-#####'"
          class="form-control mt-2 modal__card-input"
          id="input3"
          v-model="cardNumber"
        />
      </div>
      <div class="row">
        <div class="col px-1 mb-2">
          <label
            for="input1"
            class="ms-2 position-absolute"
            style="margin-top: -0.25rem !important"
          >
            <span class="h6 small fw-bold bg-white px-1 ">Month</span>
          </label>
          <select
            type="select"
            class="selectpicker show-tick form-control mt-2 model__months-picker"
            id="input1"
          >
            <option
              v-for="month in months"
              :key="month"
              :value="month"
              class="model__months-option"
            >
              {{ month }}
            </option>
          </select>
        </div>
        <div class="col mb-2">
          <label
            for="input1"
            class="ms-2 position-absolute"
            style="margin-top: -0.25rem !important"
          >
            <span class="h6 small fw-bold bg-white px-1">Year</span>
          </label>
          <input type="text" class="form-control mt-2" id="input1" />
        </div>
        <div class="col mb-2">
          <label
            for="input2"
            class="ms-2 position-absolute"
            style="margin-top: -0.25rem !important"
          >
            <span class="h6 small fw-bold bg-white">CVC</span>
          </label>
          <input
            type="text"
            placeholder="..."
            v-mask="'###'"
            class="form-control mt-2"
            id="input2"
            v-model="cvcCode"
          />
        </div>
      </div>
    </form>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Close
      </button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheModal",
  data: () => ({
    cardNumber: "",
    cvcCode: "",
    months: [],
    apiResponseObject: {},
  }),
  async mounted() {
    this.$refs.modal.style.display = "block";
    this.apiResponseObject = await this.getMonths();
  },
  methods: {
    ...mapActions("appModule", ["getMonths"]),
  },
  watch: {
    apiResponseObject(newValue) {
      this.months = newValue.year.months;
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  height: 552px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
}
.modal-title {
  border-bottom: none;
  font-size: 21px;
  margin-left: 101px;
  margin-right: 101px;
  font-weight: 800;
}
.modal__paypal-btn {
  width: 368px;
  background: rgb(254, 197, 56);
  border-radius: 12px;
  line-height: 19.49px;
  padding: 20px 24px;
  margin-bottom: 16px;
  border-color: transparent;
}
.modal__paypal-btn:hover {
  background: #ffda80;
}
.modal__paypal-btn span {
  vertical-align: middle;
}
.modal__paypal-btn::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 32px;
  background: url("../assets/Group.svg");
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 10px;
}
.modal__google-btn {
  width: 368px;
  border-radius: 12px;
  line-height: 20.83px;
  padding: 20px 24px;
  border-color: transparent;
  margin-bottom: 16px;
}
.modal__google-btn:hover {
  background: #000000;
  color: #ffffff;
}
.modal__google-btn span {
  vertical-align: middle;
}
.modal__google-btn::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url("../assets/GooglePay.svg");
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 6px;
}
.modal__separator {
  letter-spacing: -0.36px;
  line-height: 16.8px;
  color: #000000;
  opacity: 40%;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 23px;
}
.modal__separator::before,
.modal__separator::after {
  content: "";
  display: inline-block;
  width: 167.5px;
  height: 2px;
  background-color: black;
  opacity: 10%;
}
.modal__separator::before {
  margin-right: 8px;
}
.modal__separator::after {
  margin-left: 8px;
}
.modal-body {
  padding-bottom: 0;
}
.modal__form {
  border: none;
  padding-top: 0;
}
.modal__card-input {
  width: 368px;
  height: 46px;
  background: url("../assets/CardInput.svg");
  background-repeat: no-repeat;
  background-position: right;
  box-sizing: border-box;
  border-right: 12px solid white;
  outline: 1px solid #d2d5da;
}
.modal__card-input:focus {
  border: 1px solid #00ca14;
  box-sizing: border-box;
  border-right: 14px solid white;
  outline: 1px solid #00ca14;
  box-shadow: none;
}
.model__months-picker {
  background: url("../assets/checkDark.svg");
  background-position: right;
  background-repeat: no-repeat;
  box-sizing: border-box;
  border-right: 14px solid white;
  outline: 1px solid #d2d5da;
}
.model__months-picker option:hover{
    background: green;
    color: red;
}
.model__months-picker:focus {
  border: 1px solid #00ca14;
  box-sizing: border-box;
  border-right: 14px solid white;
  outline: 1px solid #00ca14;
  box-shadow: none;
}
.model__months-option:checked,
.model__months-option:hover {
  background: #00ca14;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
.row > * {
  padding-right: 0;
}
</style>
