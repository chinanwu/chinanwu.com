<template>
  <section class="Projects" id="projects" aria-labelledby="projectsHeader">
    <header>
      <h2 id="projectsHeader" class="headerLabel">Projects</h2>
    </header>

    <ArrowNavMenu :items="items" :active="current" @selected="setCurrent" />
    <Project :name="current" />

    <div class="Projects__arrowSelectorContainer">
      <ArrowSelector
        :active="current"
        :items="items"
        @change="setCurrentFromArrow"
      />
    </div>
  </section>
</template>

<script>
import ArrowNavMenu from "@/components/ArrowNavMenu";
import ArrowSelector from "@/components/ArrowSelector";
import Project from "@/components/Project";

export default {
  name: "Projects",
  components: { ArrowSelector, Project, ArrowNavMenu },
  data() {
    return {
      items: ["delta", "dnd", "pomelo-lib", "showcase"],
      current: "delta"
    };
  },
  methods: {
    setCurrent(next) {
      this.current = next;
    },
    setCurrentFromArrow(nextNum) {
      this.current = this.items[nextNum - 1];
    }
  }
};
</script>

<style lang="less" scoped>
.Projects__arrowSelectorContainer {
  display: flex;
  justify-content: center;
}
</style>
