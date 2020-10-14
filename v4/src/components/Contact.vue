<template>
  <section id="contact" aria-labelledby="contactHeader">
    <header>
      <h2 id="contactHeader" class="headerLabel">Contact</h2>
    </header>

    <div class="Contact__formContainer">
      <form class="Contact__form">
        <input class="Contact__input" id="contactName" />
        <label for="contactName">Name</label>
        <input class="Contact__input" id="contactSubject" />
        <label for="contactSubject">Subject</label>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="less" scoped>
@import "../styling/colours.less";

.Contact__formContainer {
  display: flex;
  justify-content: center;
}

.Contact__form {
  width: 80%;
}

.Contact__input {
  border: none;
  border-bottom: 1px solid black;
  background-color: @grey-06;
  font-size: 2.4rem;
}
</style>
