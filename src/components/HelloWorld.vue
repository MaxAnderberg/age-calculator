<template>
    <main class="main-age_card">
        <section class="form">
            <form class="form__container" method="" id="" action="">
                <div class="form__group">
                    <label class="form__label">day</label>
                    <input class="form__input" type="text" name="" value="" placeholder="24" />
                </div>
                <div class="form__group">
                    <label class="form__label">month</label>
                    <input class="form__input" type="text" name="" value="" placeholder="09" />
                </div>
                <div class="form__group">
                    <label class="form__label">year</label>
                    <input class="form__input" type="text" name="" value="" placeholder="1984" />
                </div>
            </form>
        </section>
        <section>
            icon goes here
        </section>
        <section class="age">
            <section class="age__item">
                <p class="age__number">38</p>
                <p class="age__unit">years</p>
            </section>
            <section class="age__item">
                <p class="age__number">3</p>
                <p class="age__unit">months</p>
            </section>
            <section class="age__item">
                <p class="age__number">26</p>
                <p class="age__unit">days</p>
            </section>
        </section>
    </main>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&family=Montserrat:wght@500;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.main-age_card {
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
    color: #854DFF;
}

.age__unit {
    color: black
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
}

.form__input {
    /* padding: 12px 16px; */
    border-radius: 8px;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.2px;
    width: 100%;
}
</style>
