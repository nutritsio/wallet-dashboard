<template>
  <div class="avatar">
    <div class="avatar__name">Evano</div>
    <img
      class="avatar__img"
      src="@/assets/images/header/avatar.png"
      alt="avatar"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;

  &__name {
    color: $white;
  }
  &__img {
    width: 48px;
    height: 48px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
