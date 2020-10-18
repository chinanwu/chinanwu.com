<template>
  <ul
    class="ArrowNavTabs"
    role="tablist"
    :aria-activedescendant="activeDescendant"
  >
    <li
      class="ArrowNavTabs__itemContainer"
      v-for="(item, index) in items"
      :key="'aNM-' + index"
      :id="'aNM-' + index + '-' + item"
    >
      <button
        :id="'aNM-btn-' + index"
        class="ArrowNavTabs__item --uppercase"
        :class="{ 'ArrowNavTabs__item--selected': selected === index }"
        @click="handleClick(index)"
        @keydown="handleKeyDown"
        role="tab"
        :aria-selected="selected === index"
      >
        {{ item }}
      </button>
    </li>
  </ul>
</template>

<script>
// TODO:
// https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_selection_follows_focus
// - I've opted to not have selection follow focus, but need to think more if this is the correct approach
// - There is no selection follow focus for tabbing but there is for arrow keys.
// - Need to figure out if this is the correct approach

import validEvent from "@/functions/validEvent";

export default {
  name: "ArrowNavTabs",
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
    },
    focusActive: {
      type: Boolean,
      default: true
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
    focusSelected() {
      document.getElementById("aNM-btn-" + this.selected).focus();
    },
    handleClick(i) {
      this.setSelected(i);
    },
    handleKeyDown(event) {
      if (validEvent(event, [])) {
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
                  firstLetter.localeCompare(event.key, undefined, {
                    sensitivity: "accent"
                  }) === 0
                ) {
                  this.setSelected(temp % this.items.length);
                  return;
                }
              } else {
                const firstLetter = this.items[temp].charAt(0);
                if (
                  firstLetter.localeCompare(event.key, undefined, {
                    sensitivity: "accent"
                  }) === 0
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
  updated() {
    if (this.focusActive) {
      this.focusSelected();
    }
  },
  emits: ["selected"]
};
</script>

<style lang="less" scoped>
@import "../styling/colours.less";

.ArrowNavTabs {
  display: flex;
  justify-content: space-evenly;
  font: inherit;
  margin-bottom: 2rem; // TODO figure out responsive
}

.ArrowNavTabs__itemContainer {
  display: flex;
  justify-content: center;
}

.ArrowNavTabs__item {
  font-size: 3.6rem;
  transition: all 0.2s;
  line-height: 150%;
  text-align: left;

  &:focus,
  &:hover {
    color: @blue;
  }
}

.ArrowNavTabs__item--selected {
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
  .ArrowNavTabs__item {
    font-size: 3rem;
  }
}

@media only screen and (max-width: 700px) {
  .ArrowNavTabs__item {
    font-size: 2.8rem;
  }
}

@media only screen and (max-width: 625px) {
  .ArrowNavTabs {
    flex-direction: column;
  }

  .ArrowNavTabs__item {
    width: 80%;
    font-size: 3.6rem;
  }
}

@media only screen and (max-width: 510px) {
  .ArrowNavTabs__item {
    font-size: 3rem;
  }
}

// iPhone SE
@media only screen and (max-width: 320px) {
  .ArrowNavTabs__item {
    font-size: 2.6rem;
  }
}
</style>
