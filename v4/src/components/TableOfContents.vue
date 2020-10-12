<template>
  <nav class="TableOfContents" aria-labelledby="toc">
    <h2 class="TableOfContents__label" id="toc">TABLE OF CONTENTS</h2>
    <ol class="TableOfContents__list">
      <li v-for="(content, index) in contents" :key="'tOC-' + index">
        <strong>
          <a :href="'#' + content.link">{{ content.label }}</a>
        </strong>
      </li>
    </ol>
  </nav>
</template>

<script>
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
            (typeof value.label === "string" ||
              value.label instanceof String) &&
            (typeof value.link === "string" || value.link instanceof String)
        )
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

.TableOfContents__label,
.TableOfContents__list {
  font-size: 2.8rem;
}

.TableOfContents__label {
  padding: 0;
}

.TableOfContents__list {
  padding: 0;
  margin: 0;
  line-height: 200%;
}
</style>
