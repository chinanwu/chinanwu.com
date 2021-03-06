<template>
  <nav class="TableOfContents --uppercase" aria-labelledby="toc">
    <h2 class="headerLabel" id="toc">Table of Contents</h2>
    <ol
      id="tableOfContents"
      class="TableOfContents__list"
      tabindex="0"
      @keydown="handleKeyDown"
    >
      <li v-for="(content, index) in contents" :key="'tOC-' + index">
        <strong>
          <a
            class="--uppercase"
            :href="'#' + content.link"
            :title="content.title"
            >{{ content.label }}</a
          >
        </strong>
      </li>
    </ol>
  </nav>
</template>

<script>
import validEvent from "@/functions/validEvent";

export default {
  name: "TableOfContents",
  props: {
    contents: {
      type: Array,
      required: true,
      validator: values =>
        values.every(
          value =>
            value.label &&
            value.link &&
            value.title &&
            value.focusId &&
            (typeof value.label === "string" ||
              value.label instanceof String) &&
            (typeof value.link === "string" || value.link instanceof String) &&
            (typeof value.focusId === "string" ||
              value.focusId instanceof String) &&
            (typeof value.title === "string" || value.title instanceof String)
        )
    }
  },
  methods: {
    handleKeyDown(event) {
      if (validEvent(event, [])) {
        if (/^[0-9]$/.test(event.key) && event.key <= this.contents.length) {
          event.preventDefault();
          document.location = `/#${this.contents[event.key - 1].link}`;
          document.getElementById(this.contents[event.key - 1].focusId).focus();
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.TableOfContents {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.TableOfContents__list {
  font-size: 3.4rem;
}

.TableOfContents__list {
  padding: 0;
  margin: 0;
  line-height: 200%;
}

@media only screen and (max-width: 595px) {
  .TableOfContents__list {
    font-size: 3rem;
  }
}

@media only screen and (max-width: 320px) {
  .TableOfContents__list {
    font-size: 2.8rem;
  }
}
</style>
