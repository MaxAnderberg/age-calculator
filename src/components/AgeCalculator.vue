<template>
  <main class="main-content">
    <section class="form">
      <form class="form__container">
        <div class="form__group">
          <label
            for="day"
            :class="{ 'form__label--error': birthdateError.day }"
            class="form__label"
            >day</label
          >
          <input
            id="day"
            class="form__input"
            :class="{ 'form__input--error': birthdateError.day }"
            type="number"
            name="day"
            v-model="birthdate.day"
            @input="handleInputChange()"
            placeholder="24"
            min="1"
            max="31"
          />
          <p v-if="birthdateError.day" class="error-message">Invalid day</p>
        </div>
        <div class="form__group">
          <label
            for="month"
            :class="{ 'form__label--error': birthdateError.month }"
            class="form__label"
            >month</label
          >
          <input
            id="month"
            class="form__input"
            :class="{ 'form__input--error': birthdateError.month }"
            type="number"
            name="month"
            v-model="birthdate.month"
            @input="handleInputChange()"
            placeholder="09"
            min="1"
            max="12"
          />
          <p v-if="birthdateError.month" class="error-message">Invalid month</p>
        </div>
        <div class="form__group">
          <label
            for="year"
            :class="{ 'form__label--error': birthdateError.year }"
            class="form__label"
            >year</label
          >
          <input
            id="year"
            v-model="birthdate.year"
            :class="{ 'form__input--error': birthdateError.year }"
            @input="handleInputChange()"
            class="form__input"
            type="number"
            name="year"
            placeholder="1984"
          />
          <p v-if="birthdateError.year" class="error-message">Invalid year</p>
        </div>
      </form>
    </section>
    <section>
      <div class="test-container">
        <hr class="custom-line" />
        <div class="circle">
          <img
            alt="An arrow pointing down"
            class="logo"
            src="@/assets/icon-arrow.svg"
            width="64"
            height="64"
          />
        </div>
      </div>
    </section>
    <section class="age">
      <section class="age__item">
        <p class="age__number">{{ age.year }}</p>
        <p class="age__unit">years</p>
      </section>
      <section class="age__item">
        <p class="age__number">{{ age.month }}</p>
        <p class="age__unit">months</p>
      </section>
      <section class="age__item">
        <p class="age__number">{{ age.day }}</p>
        <p class="age__unit">days</p>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "AgeCalculator",
  data() {
    return {
      birthdate: {
        day: 1,
        month: 11,
        year: 1985,
      },
      age: {
        day: 1,
        month: 1,
        year: 32,
      },
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    validateInput() {
      this.validateDay();
      this.validateMonth();
      this.validateYear();
    },
    calculateAge() {
      this.validateInput();

      if (this.birthdateError.day || this.birthdateError.month || this.birthdateError.year) {
        this.age = { year: "--", month: "--", day: "--" };
        return;
      }

      if (
        this.birthdate &&
        this.birthdate.year &&
        this.birthdate.month &&
        this.birthdate.day
      ) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();
        let ageYear = currentYear - parseInt(this.birthdate.year);
        let ageMonth = currentMonth - parseInt(this.birthdate.month);
        let ageDay = currentDay - parseInt(this.birthdate.day);

        if (ageDay < 0) {
          ageMonth--;
          const daysInLastMonth = new Date(
            currentYear,
            currentMonth - 1,
            0
          ).getDate();
          ageDay += daysInLastMonth;
        }

        if (ageMonth < 0) {
          ageYear--;
          ageMonth += 12;
        }

        this.age.year = ageYear;
        this.age.month = ageMonth;
        this.age.day = ageDay;
      } 
    },
    validateDay() {
      const { day, month, year } = this.birthdate;
      const maxDay = new Date(year, month, 0).getDate();
      if (day < 1 || day > maxDay) {
        return (this.birthdateError.day = true);
      }
      return (this.birthdateError.day = false);
    },
    validateMonth() {
      const { month } = this.birthdate;
      if (month < 1 || month > 12) {
        return (this.birthdateError.month = true);
      }
      return (this.birthdateError.month = false);
    },
    validateYear() {
      const { year } = this.birthdate;
      if (year < 1 || year > this.currentYear) {
        return (this.birthdateError.year = true);
      }
      return (this.birthdateError.year = false);
    },
    handleInputChange() {
      this.calculateAge();
    },
  },
  computed: {
    birthdateError() {
      const errors = {
        day: false,
        month: false,
        year: false,
      };
      const { day, month, year } = this.birthdate;

      // day validation
      if (day && month && year) {
        const maxDay = new Date(year, month, 0).getDate();
        if (day < 1 || day > maxDay) {
          errors.day = true;
        }
        const birthdate = new Date(year, month - 1, day);
        const today = new Date();
        if (birthdate > today) {
          errors.future = true;
        }
      }

      // Month validation
      if (month < 1 || month > 12) {
        errors.month = true;
      }

      // Year validation
      if (year < 1 || year > this.currentYear) {
        errors.year = true;
      }
      return errors;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&family=Montserrat:wght@500;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.main-content {
  background-color: white;
  border-radius: 24px 24px 100px 24px;
  padding: 48px 24px;
  overflow: hidden;
}

.age {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.age__item {
  font-family: Poppins;
  font-size: 56px;
  font-style: italic;
  font-weight: 800;
  line-height: 110%;
  letter-spacing: -1.12px;
  display: flex;
  gap: 8px;
}

.age__number {
  color: #854dff;
  margin: 0;
}

.age__unit {
  color: black;
  margin: 0;
}

.form {
  display: flex;
  width: 100%;
  justify-content: center;
}

.form__container {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.form__group {
  display: flex;
  flex-direction: column;
}

.form__label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  text-align: left;
  color: #716f6f;
  font-family: poppins;
  margin-bottom: 8px;
}

.form__input {
  border-radius: 8px;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.2px;
  width: 100%;
  padding: 16px;
  border: solid 1px #dcdcdc;
  outline: none;
  box-shadow: none;
  width: 50px;
}

/* Remove spin button */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* For Safari, just in case */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form__input:hover {
  border-color: #854dff;
  cursor: pointer;
}

.form__input--error {
  border-color: red;
}

.error-message {
  font-style: italic;
  font-family: poppins;
  font-size: 14px;
  color: red;
  margin-top: 95px;
  position: absolute;
}

.test-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 96px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.custom-line {
  flex-grow: 1; /* Makes the hr take up all available space */
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  /* Ensure logo is on top of circle */
  height: 24px;
  /* add width and stuff here */
  width: auto;
}

.circle {
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
  background-color: #854dff;
  height: 64px;
  width: 64px;
  border-radius: 50%;
}

.circle:hover {
  background-color: black;
  cursor: pointer;
}

.form__label--error {
  color: red;
  font-weight: bold;
}

@media (min-width: 768px) {
  .form__label {
    font-size: 14px;
  }

  .form {
    justify-content: flex-start;
    width: 100%;
  }

  .form__container {
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  .form__input {
    width: 160px;
  }

  .main-content {
    padding: 56px;
    max-width: 840px;
    margin: auto;
    margin-top: 88px;
  }

  .age__number {
    font-size: 104px;
  }

  .age__unit {
    font-size: 104px;
  }

  .circle {
    height: 96px;
    width: 96px;
    transform: translateX(0%);
    left: auto;
    right: 0;
  }

  .age__item {
    margin-bottom: 55px;
  }

  .logo {
    height: 64px;
    display: block;
    margin: auto;
  }

  .test-container {
    margin-bottom: 20px;
    margin-top: 25px;
  }
}
</style>
