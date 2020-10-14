<template>
  <section id="work" aria-labelledby="workHeader">
    <header>
      <h2 id="workHeader" class="headerLabel">Work</h2>
    </header>

    <div class="Work__container">
      <ul class="Work__jobs">
        <li
          class="Work__job"
          v-for="(job, index) in work"
          :key="'work-' + index"
        >
          <h3 class="Work__jobTitle">{{ job.title }}</h3>
          <p class="Work__jobCompany">{{ job.company }}</p>
          <p class="Work__jobTime">{{ job.time.start }} - {{ job.time.end }}</p>
          <p class="Work__jobStack">{{ job.stack }}</p>
        </li>
      </ul>
    </div>

    <div class="Work__container">
      <label class="Work__downloadLabel">Resume:</label>
      <button
        class="Work__download"
        aria-label="Download Salmon's resume"
        @click="openResume"
      >
        Download
      </button>
    </div>
  </section>
</template>

<script>
import work from "@/assets/data/work";

export default {
  name: "Work",
  data() {
    return {
      work: work
    };
  },
  methods: {
    openResume() {
      window.open(require("../assets/resume.pdf"));
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styling/colours.less";

.Work__container {
  display: flex;
  justify-content: center;
}

.Work__jobs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  justify-items: center;
  width: 80%;
}

.Work__job {
  width: 100%;
  background-color: @grey-06;
  margin: 1rem 0;
  border-radius: 1rem;
  text-align: center;
  transition: box-shadow 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    box-shadow: 0 0 0 0.8rem rgba(242, 242, 242, 0.5);
  }
}

.Work__jobTitle {
  font-size: 2.4rem;
}

.Work__jobCompany {
  font-size: 1.8rem;
  text-decoration: underline;
  margin: 0;
}

.Work__jobTime {
  font-size: 1.6rem;
  margin: 0;
}

.Work__jobStack {
  font-size: 2rem;
}

.Work__downloadLabel {
  display: none;
}

.Work__download {
  background-color: @grey-01;
  color: @grey-06;
  font-size: 2.6rem;
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  transition: box-shadow 0.3s;

  &::before {
    content: "Resume ";
  }

  &:focus,
  &:hover {
    box-shadow: 0 0 0 0.6rem rgba(51, 51, 51, 0.3);
  }

  &:active {
    box-shadow: 0 0 0 0.3rem rgba(51, 51, 51, 0.3);
  }
}

@media only screen and (max-width: 625px) {
  .Work__jobs {
    display: initial;
  }

  .Work__job {
    margin: 2rem 0;
  }
}

@media only screen and (max-width: 350px) {
  .Work__container {
    flex-direction: column;
    align-items: center;
  }

  .Work__download {
    margin-top: 0;

    &::before {
      content: "";
    }
  }

  .Work__downloadLabel {
    display: initial;
    color: @grey-01;
    font-size: 1.6rem;
    margin: 1rem;
  }
}
</style>
