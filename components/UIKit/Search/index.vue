<template>
  <div class="ui-search">
    <img class="ui-search__icon" src="/icons/search.svg" alt="search" />
    <input class="ui-search__input" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    placeholder: {
      type: String,
      default: "Search",
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-search {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding-left: 16px;

  width: 280px;
  height: 48px;
  border-radius: 16px;
  background: rgba(28, 31, 37, 0.6);

  &__icon {
    &:hover {
      cursor: pointer;
      animation: spin 3s ease;
    }
  }

  &__input {
    color: #a0a0a0;
    all: unset;

    &:focus {
      color: $white;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
