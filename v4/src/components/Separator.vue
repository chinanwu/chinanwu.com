<template>
  <div class="Separator__container" role="presentation">
    <div class="Separator"></div>
  </div>
</template>

<script>
export default {
  name: "Separator"
};
</script>

<style lang="less" scoped>
.Separator__container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.Separator {
  margin: 3rem;
  border-bottom: 2px solid #f2f2f2;
  width: 60%;
}

@media only screen and (max-width: 375px) {
  .Separator {
    width: 80%;
  }
}
</style>
