<template>
  <main class="main-age_card">
    <section class="form">
      <form class="form__container" method id action>
        <div class="form__group">
          <label class="form__label">day</label>
          <input
            class="form__input"
            :class="{ 'form__input--error': birthdateError.day }"
            type="number"
            name
            v-model="birthdate.day"
            @input="calculateAge"
            placeholder="24"
          />
        </div>
        <div class="form__group">
          <label class="form__label">month</label>
          <input
            class="form__input"
            :class="{ 'form__input--error': birthdateError.month }"
            type="number"
            name
            v-model="birthdate.month"
            @input="calculateAge"
            placeholder="09"
          />
        </div>
        <div class="form__group">
          <label class="form__label">year</label>
          <input
            v-model="birthdate.year"
            :class="{ 'form__input--error': birthdateError.year }"
            @input="calculateAge"
            class="form__input"
            type="number"
            name
            placeholder="1984"
          />
        </div>
      </form>
    </section>
    <section>
      <ArrowIcon />
      <hr />
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="64" height="64" />
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
import ArrowIcon from "./ArrowIcon.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
  components: { ArrowIcon },
  methods: {
    calculateAge() {
      if (
        this.birthdate &&
        this.birthdate.year &&
        this.birthdate.month &&
        this.birthdate.day
      ) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // JavaScript months start from 0
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
      } else {
        this.age = { year: "--", month: "--", day: "--" };
      }
    },
  },
  computed: {
    birthdateError() {
      const errors = {};
      const { day, month, year } = this.birthdate;
      if (day && month && year) {
        const maxDay = new Date(year, month, 0).getDate();
        if (day < 1 || day > maxDay) {
          errors.day = "Invalid day for the selected month/year";
        }
        const birthdate = new Date(year, month - 1, day);
        const today = new Date();
        if (birthdate > today) {
          errors.future = "Birthdate cannot be in the future";
        }
      }
      return errors;
    },
  },
  watch: {
    "birthdate.year"(newYear) {
      if (newYear > this.currentYear) {
        this.birthdate.year = this.currentYear;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&family=Montserrat:wght@500;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.main-age_card {
  background-color: white;
  border-radius: 24px 24px 100px 24px;
  padding: 48px 24px;
  overflow: hidden;
  margin-top: 88px;
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
  margin-bottom: 32px;
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
}

.form__input {
  border-radius: 8px;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.2px;
  width: 100%;
  padding: 16px;
  border-color: #dcdcdc;
}

.form__input:hover {
  border-color: #854dff;
  cursor: pointer;
}

.form__input--error {
  border-color: red;
}

/* Styles for tablets and up */
@media (min-width: 768px) {
  .form__label {
    font-size: 14px;
  }
  .form {
    justify-content: flex-start;
  }
  .form__input {
    max-width: 160px;
  }
  .main-age_card {
    padding: 56px;
  }
  .age__number {
    font-size: 104px;
  }
  .age__unit {
    font-size: 104px;
  }
}
</style>
