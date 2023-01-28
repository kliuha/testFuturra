<template>
  <div class="modal" ref="modal">
    <div class="modal-header modal-title">Payment method</div>
    <div class="modal-body">
      <button class="modal__paypal-btn"><span>BUY NOW</span></button>
      <button class="modal__google-btn"><span>PAY</span></button>
      <p class="modal__separator">OR</p>
    </div>
    <form class="card card-body modal__form">
      <div class="col px-1 card-number-input">
        <label
          for="input3"
          class="ms-2 position-absolute"
          style="margin-top: -0.25rem !important"
        >
          <span class="h6 small bg-white fw-bold px-1 model__input-label"
            >Card number</span
          >
        </label>
        <input
          type="text"
          placeholder=".... .... .... ...."
          v-mask="'####-####-####-####'"
          class="form-control mt-2 modal__card-input"
          id="input3"
          v-model="cardNumber"
        />
      </div>
      <div class="row card-info-block">
        <div class="col px-1">
          <label
            for="dropdownMenuButton1"
            class="ms-2 position-absolute"
            style="margin-top: -0.25rem !important"
          >
            <span class="h6 small fw-bold bg-white px-1 model__input-label"
              >Month</span
            >
          </label>
          <button
            class="form-control mt-2 model__months-picker selectpicker"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ selectedMonth ? selectedMonth : "Select" }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li
              v-for="month in months"
              :key="month"
              :value="month"
              class=""
              @click="setMonth"
            >
              <a class="dropdown-item model__months-option" href="#">{{
                month
              }}</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <label
            for="dropdownMenuButton2"
            class="ms-2 position-absolute"
            style="margin-top: -0.25rem !important"
          >
            <span class="h6 small fw-bold bg-white px-1 model__input-label"
              >Year</span
            >
          </label>
          <button
            class="form-control mt-2 model__years-picker selectpicker"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ selectedYear ? selectedYear : "Select" }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li
              v-for="year in years"
              :key="year"
              :value="year"
              class=""
              @click="setYear"
            >
              <a class="dropdown-item model__years-option" href="#">{{
                year
              }}</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <label
            for="input2"
            class="ms-2 position-absolute"
            style="margin-top: -0.25rem !important"
          >
            <span class="h6 small fw-bold bg-white model__input-label"
              >CVC</span
            >
          </label>
          <input
            type="text"
            placeholder="..."
            v-mask="'###'"
            class="form-control mt-2 modal__cvc-input"
            id="input2"
            v-model="cvcCode"
          />
        </div>
      </div>
    </form>
    <div class="modal-footer flex-column">
      <button
        type="button"
        class="btn modal__btn-submit"
        :disabled="!isFormValid"
      >
        Submit
      </button>
      <button
        type="button"
        data-bs-dismiss="modal"
        class="btn modal__btn-close"
        @click="closeModal"
      >
        Close
      </button>
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
    years: [
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
      2022, 2023,
    ],
    apiResponseObject: {},
    selectedMonth: "",
    selectedYear: "",
  }),
  async mounted() {
    this.$refs.modal.style.display = "block";
    this.apiResponseObject = await this.getMonths();
  },
  methods: {
    ...mapActions("appModule", ["getMonths"]),
    setMonth(e) {
      this.selectedMonth = e.target.textContent;
    },
    setYear(e) {
      this.selectedYear = e.target.textContent;
    },
    closeModal() {
      this.$emit("closing");
      this.$refs.modal.style.display = "none";
    },
  },
  watch: {
    apiResponseObject(newValue) {
      this.months = newValue.year.months;
    },
  },
  computed: {
    isFormValid() {
      let result = false;
      if (
        this.cardNumber.length == 19 &&
        this.cvcCode &&
        this.selectedMonth &&
        this.selectedYear
      ) {
        result = true;
      }
      return result;
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
  overflow: overlay;
}
.modal-title {
  border-bottom: none;
  font-size: 21px;
  text-align: center;
  font-weight: 800;
}
.modal__paypal-btn {
  width: 100%;
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
  width: 100%;
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
  margin-bottom: 16px;
}
.modal-header {
  display: block;
  padding: 0;
  margin-bottom: 24px;
}
.modal__separator::before,
.modal__separator::after {
  content: "";
  display: inline-block;
  vertical-align: middle;
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
  padding: 0;
}
.modal__form,
.modal-footer {
  border: none;
  padding: 0;
}
.card-number-input {
  margin-bottom: 30px;
}
.model__input-label {
  font-size: 12px;
  font-weight: 700;
  line-height: 14.62px;
}
.modal__card-input {
  width: 100%;
  height: 46px;
  background: url("../assets/CardInput.svg");
  background-repeat: no-repeat;
  background-position: right;
  box-sizing: border-box;
  border-right: 12px solid white;
  outline: 1px solid #d2d5da;
}
.modal__cvc-input {
  height: 46px;
}
.modal__card-input:focus,
.modal__cvc-input:focus {
  border: 1px solid #00ca14;
  box-sizing: border-box;
  border-right: 14px solid white;
  outline: 1px solid #00ca14;
  box-shadow: none;
}
.model__months-picker,
.model__years-picker {
  height: 46px;
  background: url("../assets/checkDark.svg");
  background-position: right;
  background-repeat: no-repeat;
  box-sizing: border-box;
  border-right: 14px solid white;
  outline: 1px solid #d2d5da;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.62px;
  text-align: left;
}
.model__months-picker:focus,
.model__years-picker:focus {
  border: 1px solid #00ca14;
  box-sizing: border-box;
  border-right: 14px solid white;
  outline: 1px solid #00ca14;
  box-shadow: none;
}
.model__months-option,
.model__years-option {
  padding-right: 0;
}
.model__months-option:checked,
.model__months-option:hover,
.model__years-option:checked,
.model__years-option:hover {
  background: #00ca14;
  color: #ffffff;
}
.model__months-option:checked::after,
.model__months-option:hover::after,
.model__years-option:checked::after,
.model__years-option:hover::after {
  content: url("../assets/checkWhite.svg");
  padding-left: 30px;
}
.dropdown-toggle::after {
  border: none;
}
.modal__btn-submit {
  background-color: #d2d2d2 !important;
  border: none;
  color: #ffffff !important;
  width: 300px;
  padding: 18.5px 124px;
}
.modal__btn-close {
  color: rgba(0, 0, 0, 0.4);
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.36px;
}
.modal-title {
  line-height: 25.2px;
}
.modal__paypal-btn,
.modal__google-btn,
.modal__btn-submit {
  height: 56px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-info-block {
  margin-bottom: 40px;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
.row > * {
  padding-right: 0;
}
@media (min-width: 360px) and (max-width: 1439px) {
  .modal {
    width: 336px;
    padding: 24px 16px 18px;
  }
  .modal__separator {
    font-size: 12px;
    line-height: 16.8px;
    margin-bottom: 16px;
  }
  .modal__separator::before,
  .modal__separator::after {
    width: 135.5px;
  }
  .modal {
    height: 554px;
  }

  .px-1 {
    padding: 0 !important;
    width: 100%;
    height: 53px;
  }
}
@media screen and (min-width: 1439px) {
  .modal {
    padding: 24px 16px 16px;
  }
}
</style>
