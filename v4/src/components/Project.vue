<template>
  <section class="Project" aria-labelledby="projectHeader">
    <Brackets>
      <template #content>
        <div class="Project__content" v-if="name !== 'SHOWCASE'">
          <header>
            <h3 class="headerLabel" id="projectHeader">{{ details.name }}</h3>
          </header>

          <div class="Project__details">
            <div class="Project__btns">
              <button class="Project__btn">
                <a :href="details.github">GITHUB</a>
              </button>
              <button class="Project__btn">
                <a
                  :class="{ Project__linkTba: !details.link }"
                  :href="details.link"
                >
                  LINK
                </a>
              </button>
            </div>

            <p class="Project__description">
              {{ details.description }}
            </p>

            <section
              aria-labelledby="projectTechnologies"
              v-if="details.technologies"
            >
              <h4 id="projectTechnologies" class="Project__sectionHeader">
                Technologies
              </h4>
              <p
                class="Project__technology"
                v-if="details.technologies.backend"
              >
                <strong>Backend</strong>: {{ details.technologies.backend }}
              </p>
              <p
                class="Project__technology"
                v-if="details.technologies.frontend"
              >
                <strong>Frontend</strong>: {{ details.technologies.frontend }}
              </p>
            </section>

            <Accordion
              class="Project__accordion"
              :label="expand ? 'No More Spice' : 'The Spicy Stuff'"
              @change="expand = !expand"
              v-if="details.features || details.faq"
            >
              <template #content>
                <section
                  :aria-label="'Extra information about ' + details.name"
                >
                  <section
                    aria-labelledby="projectFeatures"
                    v-if="details.features"
                  >
                    <h4 id="projectFeatures" class="Project__sectionHeader">
                      Features:
                    </h4>
                    <ul class="Project__features">
                      <li
                        class="Project__feature"
                        v-for="(feature, index) in details.features"
                        :key="name + '-feature-' + index"
                      >
                        {{ feature }}
                      </li>
                    </ul>
                  </section>

                  <section aria-labelledby="projectFaq" v-if="details.faq">
                    <h4 id="projectFaq" class="Project__sectionHeader">
                      FAQ
                    </h4>
                    <ol class="Project__qas">
                      <li
                        class="Project__qa"
                        v-for="(qa, index) in details.faq"
                        :key="name + '-faq-' + index"
                      >
                        <strong>{{ qa.question }}</strong
                        >: {{ qa.answer }}
                      </li>
                    </ol>
                  </section>
                </section>
              </template>
            </Accordion>
          </div>
        </div>
        <div v-else>
          Showcase!
        </div>
      </template>
    </Brackets>
  </section>
</template>

<script>
import { projects } from "@/assets/projects";
import Accordion from "@/components/Accordion";
import Brackets from "@/components/Brackets";

export default {
  name: "Project",
  components: { Accordion, Brackets },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      details: {},
      expand: false
    };
  },
  methods: {
    getDetails() {
      projects.forEach(project => {
        if (project.key === this.name) {
          this.details = project;
        }
      });
    }
  },
  created() {
    this.getDetails();
  },
  updated() {
    this.getDetails();
  }
};
</script>

<style lang="less" scoped>
.Project {
  display: flex;
  justify-content: center;
}

.Project__content {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.Project__description {
  background: rgba(202, 254, 0, 0.25);
  font-size: 1.8rem;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
}

.Project__btns {
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
}

.Project__btn {
  font-size: 2.4rem;
}

.Project__details--responsive {
  display: flex;
}

.Project__sectionHeader {
  text-align: center;
  font-size: 2.4rem;
  text-decoration: underline;
}

.Project__technology {
  font-size: 1.8rem;
  padding: 0;
  margin: 1rem 0;
}

.Project__accordion {
  margin: 2rem 0;
}

.Project__features,
.Project__qas {
  font-size: 1.8rem;
}

.Project__features {
  list-style: initial;
  padding-left: 3rem;
  margin-top: 1rem;
}

.Project__feature,
.Project__qa {
  margin: 0.5rem 0;
}

@media only screen and (max-width: 625px) {
  .Project__content {
    width: initial;
  }
}
</style>
