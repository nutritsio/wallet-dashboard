<template>
  <div class="app">
    <Header />
    <div class="app__main">
      <Navigation />
      <Content />
      <Chains />
    </div>
  </div>
</template>

<script>
import { Header } from "~/components/Header";
import { Navigation } from "~/components/Navigation";
import { Chains } from "~/components/Chains";

export default {
  components: {
    Header,
    Navigation,
    Chains,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.app {
  position: relative;
  max-width: 100%;
  padding: 40px;
  margin: 0 auto;
  background: rgba(8, 8, 8, 1);

  // ????
  height: 600px;

  &__main {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 34px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 800px;
    height: 474px;
    top: 16px;
    left: 80px;
    background: url("/images/bg1.png") no-repeat;
    background-size: 100%;
    filter: blur(30px);
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 474px;
    top: -100px;
    right: 0px;
    background: url("/images/bg2.png") no-repeat;
    background-size: 100%;
    filter: blur(30px);
    z-index: 1;
  }
}
</style>
