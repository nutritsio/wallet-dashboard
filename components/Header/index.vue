<template>
  <div class="header">
    <div class="header__leftside">
      <div class="header__logo">
        <img src="/images/header/logo.png" alt="cryptfest" />
      </div>

      <h2 class="header__label">Welcome Back, Arkhan</h2>
    </div>

    <div class="header__rightside">
      <Search />

      <img class="header__notify-icon" src="/icons/notify.svg" alt="notify" />

      <Avatar />
    </div>
  </div>
</template>

<script>
import Search from "~/components/UIKit/Search";
import Avatar from "~/components/UIKit/Avatar";
export default {
  components: {
    Search,
    Avatar,
  },
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: $header-max-height;
  z-index: 2;
  max-height: 90px;
  height: 100%;
  margin-bottom: 20px;

  &__leftside,
  &__rightside {
    display: flex;
    align-items: center;
  }

  &__logo {
    margin-right: 116px;
    img {
      height: 30px;
      width: 150px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__label {
    color: $white;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
  }

  &__notify-icon {
    margin-left: 20px;
    margin-right: 120px;

    &:hover {
      cursor: pointer;
      animation: shaking 1s infinite;
    }
  }

  @keyframes shaking {
    0% {
      transform: skewX(-15deg);
    }
    5% {
      transform: skewX(15deg);
    }
    10% {
      transform: skewX(-15deg);
    }
    15% {
      transform: skewX(15deg);
    }
    20% {
      transform: skewX(0deg);
    }
    100% {
      transform: skewX(0deg);
    }
  }
}
</style>
