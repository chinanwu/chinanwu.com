<template>
  <div class="FloatInput">
    <label
      class="FloatInput__label"
      :class="{ 'FloatInput__label--float': float }"
      :id="'floatInputLabel-' + label"
      :for="'floatInput-' + label"
      :data-float="float"
    >
      {{ label }}
    </label>
    <span class="FloatInput__required" v-if="required">Required Field</span>
    <input
      :name="name"
      class="FloatInput__input"
      :id="'floatInput-' + label"
      :aria-labelledby="'floatInputLabel-' + label"
      type="text"
      v-model="inputValue"
      @focusin="handleFocusIn"
      @focusout="handleFocusOut"
      :accesskey="accessKey"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  name: "FloatInput",
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      float: false,
      inputValue: ""
    };
  },
  emits: ["change"],
  methods: {
    handleFocusIn() {
      this.float = true;
    },
    handleFocusOut() {
      if (this.inputValue === "") {
        this.float = false;
      } else {
        this.$emit("change", this.inputValue);
      }
    }
  },
  computed: {
    accessKey() {
      return this.label[0].toLowerCase();
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styling/colours.less";

.FloatInput {
  position: relative;
  margin-top: 3rem;
}

.FloatInput__label {
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

.FloatInput__input {
  border: none;
  border-bottom: 1px solid black;
  background-color: @grey-06;
  font-size: 2.4rem;
  width: 100%;

  &[required] {
    box-shadow: none;
  }
}

.FloatInput__required {
  position: absolute;
  transform: translateY(4rem);
}
</style>
