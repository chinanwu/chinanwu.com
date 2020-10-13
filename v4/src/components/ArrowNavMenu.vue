<template>
  <ul
    class="ArrowNavMenu"
    role="menu"
    :aria-activedescendant="activeDescendant"
  >
    <li
      class="ArrowNavMenu__itemContainer"
      v-for="(item, index) in items"
      :key="'aNM-' + index"
      role="menuitem"
      :id="'aNM-' + index + '-' + item"
    >
      <button
        :id="'aNM-btn-' + index"
        class="ArrowNavMenu__item"
        :class="{ 'ArrowNavMenu__item--selected': selected === index }"
        @click="handleClick(index)"
        @keydown="handleKeyDown"
      >
        {{ item }}
      </button>
    </li>
  </ul>
</template>

<script>
// TODO: role menu vs menubar - Dynamic setting via window size maybe?

export default {
  name: "ArrowNavMenu",
  props: {
    items: {
      type: Array,
      required: true,
      validator: values =>
        values.every(
          value => typeof value === "string" || value instanceof String
        )
    },
    active: {
      type: String,
      default: null // will be computed as first item
    }
  },
  computed: {
    activeDescendant() {
      return "aNM-" + this.selected + "-" + this.items[this.selected];
    },
    selected() {
      return this.active ? this.items.indexOf(this.active) : 0;
    }
  },
  methods: {
    setSelected(i) {
      this.$emit("selected", this.items[i]);
    },
    handleClick(i) {
      this.setSelected(i);
    },
    handleKeyDown(event) {
      if (
        event?.key &&
        !event.shiftKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey
      ) {
        // https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-actions-active-descendant.html
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          event.preventDefault();
          this.selected === this.items.length - 1
            ? this.setSelected(0)
            : this.setSelected(this.selected + 1);
        } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          event.preventDefault();
          this.selected === 0
            ? this.setSelected(this.items.length - 1)
            : this.setSelected(this.selected - 1);
        } else if (event.key === "Home") {
          event.preventDefault();
          this.setSelected(0);
        } else if (event.key === "End") {
          event.preventDefault();
          this.setSelected(this.items.length - 1);
        } else {
          if (/^[a-zA-Z]$/.test(event.key)) {
            // Note from Salmon: This is seriously so cool y'all!
            for (let i = 1; i < this.items.length; i++) {
              // Start at one so it doesn't count itself as an option to jump to
              const temp = this.selected + i;
              if (temp >= this.items.length) {
                const firstLetter = this.items[temp % this.items.length].charAt(
                  0
                );
                if (
                  firstLetter === event.key ||
                  firstLetter === event.key.toLowerCase() ||
                  firstLetter === event.key.toUpperCase()
                ) {
                  this.setSelected(temp % this.items.length);
                  return;
                }
              } else {
                const firstLetter = this.items[temp].charAt(0);
                if (
                  firstLetter === event.key ||
                  firstLetter === event.key.toLowerCase() ||
                  firstLetter === event.key.toUpperCase()
                ) {
                  this.setSelected(temp);
                  return;
                }
              }
            }
          }
        }
      }
    }
  },
  emits: ["selected"]
};
</script>

<style lang="less" scoped>
@import "../styling/colours.less";

.ArrowNavMenu {
  display: flex;
  justify-content: space-evenly;
  font: inherit;
  margin-bottom: 2rem; // TODO figure out responsive
}

.ArrowNavMenu__itemContainer {
  display: flex;
  justify-content: center;
}

.ArrowNavMenu__item {
  font-size: 3.6rem;
  transition: all 0.2s;
  line-height: 150%;
  text-align: left;

  &:focus,
  &:hover {
    //text-decoration: underline;
    color: @blue;
  }
}

.ArrowNavMenu__item--selected {
  color: @blue;

  &::before {
    content: ">";
    color: @red;
    display: inline-block;
    animation: fadeIn 0.3s;
    padding: 0 1rem;
    border: none;
  }
}

@media (prefers-reduced-motion) {
  .ArrowNavMenu__item--selected::before {
    animation: none;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-1rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media only screen and (max-width: 834px) {
  .ArrowNavMenu__item {
    font-size: 3rem;
  }
}

@media only screen and (max-width: 700px) {
  .ArrowNavMenu__item {
    font-size: 2.8rem;
  }
}

@media only screen and (max-width: 625px) {
  .ArrowNavMenu {
    flex-direction: column;
  }

  .ArrowNavMenu__item {
    width: 80%;
    font-size: 3.6rem;
  }
}

@media only screen and (max-width: 510px) {
  .ArrowNavMenu__item {
    font-size: 3rem;
  }
}

// iPhone SE
@media only screen and (max-width: 320px) {
  .ArrowNavMenu__item {
    font-size: 2.6rem;
  }
}
</style>
