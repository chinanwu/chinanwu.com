<template>
  <section id="contact" aria-labelledby="contactHeader">
    <header>
      <h2 id="contactHeader" class="headerLabel">Contact</h2>
    </header>

    <div class="Contact__formContainer">
      <form name="email" class="Contact__form" @submit.prevent="handleSubmit">
        <div class="Contact__formInputs">
          <FloatInput
            class="Contact__formInput"
            name="email"
            label="Name"
            required
            @change="handleNameChange"
          />
          <FloatInput
            name="email"
            label="Subject"
            @change="handleSubjectChange"
          />
        </div>

        <FloatTextArea label="Content" />

        <div class="Contact__submit">
          <input class="Contact__submitBtn" type="submit" value="Submit" />
        </div>
      </form>
    </div>

    <div class="Contact__additional">
      <h3 class="headerLabel">Or, find me on:</h3>
      <ul class="Contact__additionalLinks --uppercase">
        <li>
          <a
            class="Contact__additionalLink"
            href="https://github.com/chinanwu"
            title="Salmon (Chin-An) Wu's github page"
          >
            <img
              class="Contact__additionalLinkIcon"
              :src="require('@/assets/images/github.png')"
              alt="Github logo"
            />
            <span class="Contact__additionalLinkLabel">Github</span>
          </a>
        </li>
        <li>
          <a
            class="Contact__additionalLink"
            href="https://linkedin.com/in/chinanwu"
            title="Salmon (Chin-An) Wu's LinkedIn page"
          >
            <img
              class="Contact__additionalLinkIcon"
              :src="require('@/assets/images/linkedin.png')"
              alt="LinkedIn logo"
            />
            <span class="Contact__additionalLinkLabel">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import FloatInput from "@/components/FloatInput";
import FloatTextArea from "@/components/FloatTextArea";
export default {
  name: "Contact",
  components: { FloatTextArea, FloatInput },
  data() {
    return {
      nameValue: "",
      subjectValue: "",
      bodyValue: ""
    };
  },
  methods: {
    handleSubmit() {
      const url =
        "mailto:cawudev+website@gmail.com?" +
        "?subject=" +
        this.subjectValue +
        "&body=" +
        this.bodyValue +
        "," +
        this.nameValue;
      window.open(url);
    },
    handleNameChange(e) {
      this.nameValue = e;
    },
    handleSubjectChange(e) {
      this.subjectValue = e;
    }
  }
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
  display: flex;
  flex-direction: column;
}

.Contact__formInputs {
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-around;
}

.Contact__content {
  font-size: 1.6rem;
}

.Contact__submit {
  display: flex;
  justify-content: end;
}

.Contact__submitBtn {
  border: none;
  background-color: @grey-01;
  color: @grey-06;
  font-size: 2.6rem;
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:focus,
  &:hover {
    box-shadow: 0 0 0 0.6rem rgba(51, 51, 51, 0.3);
  }

  &:active {
    box-shadow: 0 0 0 0.3rem rgba(51, 51, 51, 0.3);
  }
}

.Contact__additional {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Contact__additionalLinks {
  display: flex;
  justify-content: center;
  width: 80%;
}

.Contact__additionalLink {
  display: flex;
  align-items: center;
  margin: 2rem;
}

.Contact__additionalLinkIcon {
  width: 32px;
  height: 32px;
  display: flex;
}

.Contact__additionalLinkLabel {
  margin-left: 1rem;
  font-size: 2rem;
}

@media only screen and (max-width: 785px) {
  .Contact__formInputs {
    flex-direction: column;
  }

  .Contact__formInput {
    margin-bottom: 2rem;
  }
}

@media only screen and (max-width: 320px) {
  .Contact__additionalLinks {
    flex-direction: column;
  }

  .Contact__additionalLink {
    margin: 1rem;
  }
}
</style>
