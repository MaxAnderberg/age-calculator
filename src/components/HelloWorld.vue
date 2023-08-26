<template>
    <main class="main-age_card">
        Hello there signore
        <section>
            <form method="" id="" action="">
                <label>day</label>
                <input type="text" name="" value="" />
                <label>month</label>
                <input type="text" name="" value="" />
                <label>year</label>
                <input type="text" name="" value="" />
            </form>
        </section>
        <section>
            icon goes here
        </section>
        <section>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
 }

 .age {
 }

 .age__item {
font-family: Poppins;
   font-size: 56px;
   font-style: italic;
   font-weight: 800;
   line-height: 110%; /* 61.6px */
   letter-spacing: -1.12px;
   display: flex;
   gap: 8px;
 }

 .age__number{
   color: #854DFF;
 }
 .age__unit {
   color: black
 }

</style>
