<template>
  <section class="Projects" id="projects" aria-labelledby="projectsHeader">
    <header>
      <h2 id="projectsHeader" class="headerLabel">PROJECTS</h2>
    </header>

    <ArrowNavMenu :items="items" :active="current" @selected="setCurrent" />
    <Project :name="current" />

    <div class="Projects__arrowSelectorContainer">
      <ArrowSelector
        :default="1"
        :total="items.length"
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
      items: ["DELTA", "DND", "POMELO-LIB", "SHOWCASE"],
      current: "DELTA"
    };
  },
  methods: {
    setCurrent(next) {
      this.current = next;
    },
    setCurrentFromArrow(nextNum) {
      console.log(this.items[nextNum - 1]);
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
