<template>
  <section class="Projects" id="projects" aria-labelledby="projectsHeader">
    <header>
      <h2 id="projectsHeader" class="headerLabel">Projects</h2>
    </header>

    <ArrowNavTabs
      :items="items"
      :active="current"
      @selected="setCurrent"
      aria-labelledby="projectsHeader"
      aria-controls="project"
      :focusActive="focusActive"
    />
    <Project id="project" :name="current" aria-live="polite" />

    <div class="Projects__arrowSelectorContainer">
      <ArrowSelector
        :active="current"
        :items="items"
        @change="setCurrentFromArrow"
        aria-labelledby="projectsHeader"
        aria-controls="project"
      />
    </div>
  </section>
</template>

<script>
import ArrowNavTabs from "@/components/ArrowNavTabs";
import ArrowSelector from "@/components/ArrowSelector";
import Project from "@/components/Project";

export default {
  name: "Projects",
  components: { ArrowSelector, Project, ArrowNavTabs },
  data() {
    return {
      items: ["delta", "dnd", "pomelo-lib", "showcase"],
      current: "delta",

      // A bit of a hacky solution to the problem of arrow selector actions causing focus to jump to the nav menu
      focusActive: true
    };
  },
  methods: {
    setCurrent(next) {
      this.current = next;
      this.focusActive = true;
    },
    setCurrentFromArrow(nextNum) {
      this.current = this.items[nextNum - 1];
      this.focusActive = false;
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
