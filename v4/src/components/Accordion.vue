<template>
  <div>
    <button
      id="accordionBtn"
      class="Accordion__btn"
      @click="handleClick"
      @keydown="handleKeyDown"
    >
      <span>{{ label }}</span>
      <span>{{ expand ? "-" : "+" }}</span>
    </button>
    <transition name="expand" mode="out-in">
      <slot v-if="expand" name="content"></slot>
    </transition>
  </div>
</template>

<script>
import validEvent from "@/functions/validEvent";

export default {
  name: "Accordion",
  props: {
    label: {
      type: String,
      default: null
    },
    expand: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change"],
  methods: {
    handleClick() {
      this.$emit("change");
    },
    handleKeyDown(event) {
      if (validEvent(event, ["Enter", "Space"])) {
        event.preventDefault();
        this.handleClick();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styling/colours";

.Accordion__btn {
  width: 100%;
  text-align: left;
  padding: 1rem;
  background-color: @grey-05;
  border: none;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 0.5rem;
  font-size: 1.8rem;

  &:hover,
  &:focus {
    background-color: @grey-06;
  }

  &:active {
    background-color: @grey-04;
  }
}

.expand {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s;
    overflow: hidden;
  }
  &-enter-from,
  &-leave-to {
    max-height: 0;
    opacity: 0;
  }
  &-enter-to,
  &-leave-from {
    max-height: 100vh;
    opacity: 1;
  }
}
</style>
