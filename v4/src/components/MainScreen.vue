<template>
  <section aria-labelledby="mainHeader">
    <header class="Main__header">
      <h1 id="mainHeader" class="Main__headerName">
        <span class="Main__headerName--highlight">SALMON</span>
      </h1>
      <ul class="Main__headerList">
        <li class="Main__headerListItem">
          <span class="Main__headerPronouns">THEY/THEM</span>
        </li>
        <li class="Main__headerListItem">
          <span class="Main__headerSoftwareDev">SOFTWARE DEV</span>
        </li>
        <li class="Main__headerListItem">
          <span class="Main__headerToronto">TORONTO</span>
        </li>
      </ul>
    </header>

    <Separator />
    <TableOfContents
      :contents="[
        {
          label: 'PROJECTS',
          link: 'projects',
          title: 'Projects section of webpage',
          focusId: 'aNM-btn-0' // unfortunate
        },
        {
          label: 'WORK',
          link: 'work',
          title: 'Work section of webpage',
          focusId: ''
        },
        {
          label: 'CONTACT',
          link: 'contact',
          title: 'Contact section of webpage',
          focusId: ''
        }
      ]"
    />

    <Separator />
    <Projects />

    <Separator />
    <Work />

    <Separator />
    <Contact />

    <Separator />
    <footer class="Main__footer">
      <p class="Main__footerWords">
        Made by: <strong>Salmon (Chin-An) Wu</strong>
      </p>
      <p class="Main__footerWords">With: <strong>Vue, Less, JS</strong></p>
    </footer>
  </section>
</template>

<script>
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Separator from "@/components/Separator";
import TableOfContents from "@/components/TableOfContents";
import Work from "@/components/Work";

export default {
  name: "MainScreen",
  components: { Contact, Work, Projects, TableOfContents, Separator }
};
</script>

<style lang="less" scoped>
.Main__header {
  text-align: center;
}

.Main__headerName {
  font-size: 9.6rem;
  letter-spacing: 3rem;
}

.Main__headerName--highlight {
  // May remove
  padding-left: 3rem;
  transition: all 0.2s;

  &:focus,
  &:hover {
    box-shadow: rgb(253, 228, 131) 56rem 0 0 inset;
  }
}

.Main__headerList {
  display: flex;
  justify-content: center;
  font-size: 3.6rem;
  letter-spacing: 0.3rem;
}

.Main__headerListItem {
  &::after {
    content: "\00a0|\00a0";
  }

  &:nth-child(3)::after {
    content: "";
  }

  & > span {
    padding-left: 0.3rem; // To counter the letter-spacing
  }
}

.Main__headerPronouns {
  transition: all 0.2s;

  // A hack to "animate" the gradient background
  box-shadow: white 0 5rem 0 inset;

  &:hover {
    box-shadow: none;

    background: rgb(255, 105, 105);
    background: linear-gradient(
      90deg,
      rgba(255, 105, 105, 1) 0%,
      rgba(255, 181, 75, 1) 12%,
      rgba(252, 255, 127, 1) 28%,
      rgba(165, 247, 158, 1) 45%,
      rgba(130, 242, 231, 1) 59%,
      rgba(152, 159, 252, 1) 72%,
      rgba(234, 153, 235, 1) 85%,
      rgba(255, 146, 146, 1) 100%
    );
  }
}

.Main__headerSoftwareDev {
  transition: all 0.2s;

  &:hover {
    box-shadow: black 0 -5rem 0 inset;
    color: #24b424;
  }

  &::after {
    content: "ELOPER";
  }
}

.Main__headerToronto {
  transition: all 0.2s;

  &:hover {
    // Toronto's blue!
    box-shadow: #24448f 0 -5rem 0 inset;
    color: white;
  }

  &::after {
    content: "-BASED";
  }
}

.Main__footer {
  text-align: center;
  font-size: 1.6rem;
}

.Main__footerWords {
  padding: 0;
  margin: 0;
}

@media only screen and (max-width: 1150px) {
  .Main__headerToronto::after {
    content: "";
  }
}

@media only screen and (max-width: 1010px) {
  .Main__headerSoftwareDev::after {
    content: "";
  }
}

@media only screen and (max-width: 860px) {
  .Main__headerList {
    font-size: 2.4rem;
  }

  .Main__headerSoftwareDev::after {
    content: "ELOPER";
  }

  .Main__headerToronto::after {
    content: "-BASED";
  }
}

@media only screen and (max-width: 810px) {
  .Main__headerToronto::after {
    content: "";
  }
}

@media only screen and (max-width: 705px) {
  .Main__headerSoftwareDev::after {
    content: "";
  }
}

@media only screen and (max-width: 595px) {
  .Main__headerName--highlight {
    padding-left: 0;
  }

  .Main__headerList {
    display: initial;
    line-height: 150%;
    font-size: 3.6rem;
  }

  .Main__headerListItem:after {
    content: "";
  }

  .Main__headerSoftwareDev::after {
    content: "ELOPER";
  }

  .Main__headerToronto::after {
    content: "-BASED";
  }
}

@media only screen and (max-width: 510px) {
  .Main__headerName {
    font-size: 7.2rem;
    letter-spacing: 1rem;
  }

  .Main__headerList {
    font-size: 2.4rem;
  }
}

@media only screen and (max-width: 320px) {
  .Main__headerName {
    font-size: 6.4rem;
  }

  .Main__headerSoftwareDev::after {
    content: "";
  }
}
</style>
