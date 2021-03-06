<template>
  <div class="App__shell" aria-live="polite">
    <transition name="fade" mode="out-in">
      <div v-if="!readMore" class="App__start">
        <Card id="card" :flipped="flipped" @flip="handleFlip" :tabIndex="1">
          <template #front>
            <div class="App__cardFront" :aria-hidden="flipped">
              <div class="App__cardFrontIcon">
                <img
                  :src="require('@/assets/images/self.png')"
                  alt="Cartoon drawing of Salmon"
                  role="presentation"
                />
              </div>
              <header class="--uppercase">
                <h1 class="App__cardName App__cardFirstName">
                  <span class="App__cardFirstName">Salmon</span>
                  <span class="App__cardFirstNameSub">(Chin-An)</span>
                  Wu
                </h1>
              </header>
              <span class="App__cardPrompt" v-if="showFlipPrompt">
                Click Me!
              </span>
            </div>
          </template>
          <template #back>
            <div class="App__back --uppercase" :aria-hidden="!flipped">
              <ul class="App__backList">
                <li>They/Them</li>
                <li><span class="App__backList--long">Software Dev</span></li>
                <li>Toronto-Based</li>
              </ul>

              <ul class="App__backLinks">
                <li>
                  <a
                    class="App__backLink"
                    href="https://github.com/chinanwu"
                    title="Salmon's github page"
                    aria-label="Salmon's git-hub page"
                    tabindex="2"
                  >
                    <img
                      class="App__backIcon"
                      :src="require('@/assets/images/github.png')"
                      alt="Git-hub logo"
                      role="presentation"
                    />
                    <span class="App__backLabel">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    class="App__backLink"
                    href="https://linkedin.com/in/chinanwu"
                    title="Salmon's Linked-In page"
                    aria-label="Salmon's Linked-In page"
                    tabindex="3"
                  >
                    <img
                      class="App__backIcon"
                      :src="require('@/assets/images/linkedin.png')"
                      alt="Linked-In logo"
                      role="presentation"
                    />
                    <span class="App__backLabel">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    class="App__backLink"
                    href="mailto:cawudev@gmail.com"
                    title="Email Salmon"
                    aria-label="Send Salmon an email"
                    tabindex="4"
                  >
                    <img
                      class="App__backIcon"
                      :src="require('@/assets/images/email.png')"
                      alt="Email icon"
                      role="presentation"
                    />
                    <span class="App__backLabel">Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </template>
        </Card>
        <button
          id="readMore"
          class="App__readMore --uppercase"
          @click="handleClick"
          :tabIndex="5"
        >
          <span
            class="App__bracket App__bracket--left"
            role="presentation"
          ></span>
          Read More
          <span
            class="App__bracket App__bracket--right"
            role="presentation"
          ></span>
        </button>
      </div>
      <MainScreen v-else />
    </transition>
  </div>
</template>

<script>
import Card from "@/components/Card";
import MainScreen from "@/components/MainScreen";

export default {
  name: "App",
  components: { MainScreen, Card },
  data() {
    return {
      readMore: sessionStorage.getItem("readMore")
        ? JSON.parse(sessionStorage.getItem("readMore"))
        : false,
      showFlipPrompt: true,
      flipped: false
    };
  },
  methods: {
    handleClick() {
      this.readMore = true;
      sessionStorage.setItem("readMore", "true");
    },
    handleFlip() {
      this.showFlipPrompt = false;
      this.flipped = !this.flipped;
    }
  }
};
</script>

<style lang="less">
* {
  font-family: "Roboto Mono", sans-serif;
}

html,
body {
  height: 100%;
  min-height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.4rem;
}

h1 {
  font-size: 2.4rem;
  margin: 0;
  padding: 1rem;
}

h2 {
  font-size: 2rem;
  margin: 0;
  padding: 1rem;
}

h3 {
  font-size: 1.8rem;
  margin: 0;
  padding: 1rem;
}

h4 {
  font-size: 1.6rem;
  margin: 0;
  padding: 1rem;
}

p {
  padding-left: 1rem;
  padding-right: 1rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button {
  color: black;
  border: none;
  background-color: inherit;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.--no-margin {
  margin: 0;
}

.--uppercase {
  text-transform: uppercase;
}

#app {
  height: 100%;
}

.headerLabel {
  font-size: 4rem;
  padding: 0;
  text-align: center;
  text-transform: uppercase;
}

@media only screen and (max-width: 595px) {
  .headerLabel {
    font-size: 3.6rem;
  }
}

@media only screen and (max-width: 510px) {
  .headerLabel {
    font-size: 3rem;
  }
}

@media only screen and (max-width: 320px) {
  .headerLabel {
    font-size: 2.8rem;
  }
}

@media (prefers-reduced-motion) {
  * {
    transition: none;
  }
}
</style>

<style lang="less" scoped>
@import "./styling/colours.less";

.App__shell {
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.App__start {
  height: 100%;
  background-color: @grey-06;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.App__cardFront {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.App__cardPrompt {
  position: absolute;
  bottom: 0;
  right: 0;
}

.App__cardFrontIcon {
  width: 137px;
  height: 137px;
  border: 1px solid @grey-03;
  border-radius: 50%;
  background-color: @grey-06;
  overflow: hidden;
}

.App__cardName {
  font-size: 3.6rem;
}

.App__cardFirstName {
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
}

.App__cardFirstNameSub {
  font-size: 1.8rem;
  color: @grey-02;
  margin-bottom: 1rem;
}

.App__readMore {
  margin-top: 4rem;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  font-size: 3.6rem;
  color: @grey-01;
  transition: all 0.2s;

  &:hover,
  &:focus {
    font-size: 4.4rem;
    box-shadow: rgba(255, 255, 255, 0.5) 0 -12rem 0 inset;
    cursor: pointer;
  }
}

@bracket-width: 5px;

.App__bracket {
  width: 2rem;
  border-top: @bracket-width solid @grey-05;
  border-bottom: @bracket-width solid @grey-05;
}

.App__bracket--left {
  border-left: @bracket-width solid @grey-05;
}

.App__bracket--right {
  border-right: @bracket-width solid @grey-05;
}

.App__back {
  width: 100%;
}

.App__backLinks {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

.App__backLink {
  display: flex;
  align-items: center;
}

.App__backIcon {
  width: 32px;
  height: 32px;
  display: flex;
}

.App__backLabel {
  margin-left: 1rem;
}

.App__backList {
  font-size: 2.4rem;
  line-height: 200%;
  text-align: center;
}

.App__backList--long::after {
  content: "eloper";
}

@media only screen and (max-width: 500px) {
  .App__cardFront {
    flex-direction: column;
  }

  .App__backList--long::after {
    content: "";
  }

  .App__backLinks {
    position: absolute;
    top: 1rem;
  }

  .App__backLabel {
    display: none;
  }

  @bracket-width-small: 3px;

  .App__bracket {
    border-top: @bracket-width-small solid @grey-05;
    border-bottom: @bracket-width-small solid @grey-05;
  }

  .App__bracket--left {
    border-left: @bracket-width-small solid @grey-05;
  }

  .App__bracket--right {
    border-right: @bracket-width-small solid @grey-05;
  }

  .App__readMore:hover > .App__readMoreBtn,
  .App__readMore > .App__readMoreBtn:focus {
    transition: all 0.2s;
    font-size: 4rem;
    box-shadow: rgba(255, 255, 255, 0.5) 0 -12rem 0 inset;
  }
}
</style>
