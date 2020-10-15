<template>
  <div class="FloatTextArea">
    <label
      class="FloatTextArea__label"
      :class="{ 'FloatTextArea__label--float': float }"
      :id="'floatInputLabel-' + label"
      :for="'floatInput-' + label"
      :data-float="float"
    >
      {{ label }}
    </label>
    <textarea
      class="FloatTextArea__textarea"
      :id="'floatInput-' + label"
      :aria-labelledby="'floatInputLabel-' + label"
      v-model="inputValue"
      @focusin="handleFocusIn"
      @focusout="handleFocusOut"
    />
  </div>
</template>

<script>
export default {
  name: "FloatTextArea",
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      float: false,
      inputValue: ""
    };
  },
  methods: {
    handleFocusIn() {
      this.float = true;
    },
    handleFocusOut() {
      if (this.inputValue === "") {
        this.float = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styling/colours.less";

.FloatTextArea {
  position: relative;
  margin-top: 3rem;
}

.FloatTextArea__label {
  position: absolute;
  font-size: 2.4rem;
  transition: all 0.2s;
  padding-left: 1rem;

  &[data-float="true"] {
    transform: translateY(-2rem);
    font-size: 1.6rem;
    padding-left: 0;
  }
}

.FloatTextArea__textarea {
  font-size: 2.4rem;
  width: 100%;
}
</style>
