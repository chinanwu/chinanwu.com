<template>
  <div class="Separator" role="presentation"></div>
</template>

<script>
export default {
  name: "Separator"
};
</script>

<style lang="less" scoped>
.Separator {
  margin: 3rem;
  border-bottom: 1px solid #f2f2f2;
  width: 60%;
}

@media only screen and (max-width: 375px) {
  .Separator {
    width: 80%;
  }
}
</style>
