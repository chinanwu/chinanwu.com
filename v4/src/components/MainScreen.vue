<template>
  <div>
    <header class="Main__header">
      <h1 class="Main__headerName">SALMON</h1>
      <ul class="Main__headerList">
        <li class="Main__headerListItem">THEY/THEM</li>
        <li class="Main__headerListItem">
          <span class="Main__headerListItemSD">SOFTWARE DEV</span>
        </li>
        <li class="Main__headerListItem">
          <span class="Main__headerListItemTO">TORONTO</span>
        </li>
      </ul>
    </header>

    <Separator />
    <TableOfContents
      :contents="[
        { label: 'Projects', link: 'project' },
        { label: 'Work', link: 'work' },
        { label: 'Contact', link: 'contact' }
      ]"
    />
    <Separator />
  </div>
</template>

<script>
import Separator from "@/components/Separator";
import TableOfContents from "@/components/TableOfContents";
export default {
  name: "MainScreen",
  components: { TableOfContents, Separator }
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

.Main__headerList {
  display: flex;
  justify-content: center;
  font-size: 3.6rem;
  letter-spacing: 0.3rem;
}

.Main__headerListItem::after {
  content: "\00a0|\00a0";
}

.Main__headerListItem:nth-child(3)::after {
  content: "";
}

.Main__headerListItemSD::after {
  content: "ELOPER";
}

.Main__headerListItemTO::after {
  content: "-BASED";
}

@media only screen and (max-width: 1140px) {
  .Main__headerListItemTO::after {
    content: "";
  }
}

@media only screen and (max-width: 1010px) {
  .Main__headerListItemSD::after {
    content: "";
  }
}

@media only screen and (max-width: 840px) {
  .Main__headerList {
    font-size: 2.4rem;
  }

  .Main__headerListItemSD::after {
    content: "ELOPER";
  }

  .Main__headerListItemTO::after {
    content: "-BASED";
  }
}

@media only screen and (max-width: 810px) {
  .Main__headerListItemTO::after {
    content: "";
  }
}

@media only screen and (max-width: 700px) {
  .Main__headerListItemSD::after {
    content: "";
  }
}

@media only screen and (max-width: 595px) {
  .Main__headerList {
    display: initial;
    line-height: 150%;
    font-size: 3.6rem;
  }

  .Main__headerListItem:after {
    content: "";
  }

  .Main__headerListItemSD::after {
    content: "ELOPER";
  }

  .Main__headerListItemTO::after {
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

  .Main__headerListItemSD::after {
    content: "";
  }
}
</style>
