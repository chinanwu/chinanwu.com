<template>
  <div class="ArrowSelector">
    <div class="ArrowSelector__main">
      <button
        id="arrowSelectorLeft"
        class="ArrowSelector__btn"
        @click="handleLeftArrow"
        aria-label="Select previous project"
      >
        &lt;
      </button>
      <span aria-labelledby="arrowSelectorLabel"
        >{{ current }} / {{ total }}</span
      >
      <button
        id="arrowSelectorRight"
        class="ArrowSelector__btn"
        @click="handleRightArrow"
        aria-label="Select next project"
      >
        &gt;
      </button>
    </div>
    <div id="arrowSelectorLabel" class="ArrowSelector__label">Current</div>
  </div>
</template>

<script>
// Note to Salmon: Don't need to implement @keydown because <button> does it automatically!
// Huzzah to built-in functionalities!

export default {
  name: "ArrowSelector",
  props: {
    active: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true,
      validator: values =>
        values.every(
          value => typeof value === "string" || value instanceof String
        )
    }
  },
  computed: {
    current() {
      return this.items.indexOf(this.active) + 1;
    },
    total() {
      return this.items.length;
    }
  },
  methods: {
    setCurrent(next) {
      this.$emit("change", next);
    },
    handleLeftArrow() {
      this.setCurrent(this.current - 1 <= 0 ? this.total : this.current - 1);
    },
    handleRightArrow() {
      this.setCurrent(this.current + 1 > this.total ? 1 : this.current + 1);
    }
  },
  emits: ["change"]
};
</script>

<style lang="less" scoped>
@import "../styling/colours.less";

.ArrowSelector {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.ArrowSelector__main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.6rem;
}

.ArrowSelector__btn {
  background-color: inherit;
  border: none;
  font-size: 7.2rem;
  cursor: pointer;
  color: @grey-05;
  transition: color 0.2s;

  &:focus,
  &:hover {
    color: @grey-04;
  }

  &:active {
    color: @grey-03;
  }
}

.ArrowSelector__label {
  font-size: 2.4rem;
  color: #4f4f4f;

  &::after {
    content: " Project";
  }
}

// iPhone 11 Pro Max, iPhone 8
@media only screen and (max-width: 414px) {
  .ArrowSelector__main {
    font-size: 3.6rem;
  }

  .ArrowSelector__btn {
    font-size: 4.8rem;
  }

  .ArrowSelector__label::after {
    content: "";
  }
}

// iPhone SE
@media only screen and (max-width: 320px) {
  .ArrowSelector__main {
    font-size: 2.4rem;
  }

  .ArrowSelector__btn {
    font-size: 4.8rem;
  }

  .ArrowSelector__label {
    font-size: 1.8rem;
  }
}
</style>
