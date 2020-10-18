<template>
  <div
    :id="id"
    class="Card"
    :class="{ 'Card--flip': flipped }"
    :tabindex="tabIndex"
    aria-live="polite"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <div class="Card__front" :class="{ 'Card--hidden': flipped }">
      <slot name="front"></slot>
    </div>
    <div class="Card__back" :class="{ 'Card--hidden': !flipped }">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
import validEvent from "@/functions/validEvent";

export default {
  name: "Card",
  props: {
    id: {
      type: String,
      default: null
    },
    flipped: {
      type: Boolean,
      default: false
    },
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ["flip"],
  methods: {
    handleClick() {
      this.$emit("flip");
    },
    handleKeyDown(event) {
      if (validEvent(event, ["Enter", " "])) {
        event.preventDefault();
        this.handleClick();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styling/colours.less";

.Card {
  width: 40rem;
  height: 20rem;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  transition: transform 0.25s ease-in-out, box-shadow 0.3s;
  cursor: pointer;
  border: 1px solid @grey-05;

  &:focus {
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);
  }
}

.Card--flip {
  transform: rotateY(180deg);
}

.Card__front,
.Card__back {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background-color: white;
  justify-content: center;
}

.Card--hidden {
  display: none;
}

.Card__back {
  transform: rotateY(180deg);
}

@media only screen and (max-width: 500px) {
  .Card {
    height: 42rem;
    width: 26rem;

    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }
}
</style>
