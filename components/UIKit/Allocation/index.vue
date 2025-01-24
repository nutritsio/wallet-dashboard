<template>
  <div class="allocation">
    <div class="allocation__up-block">
      <div class="allocation__coin-block">
        <img
          class="navigation__tab-icon"
          :src="`/icons/coins/${icon}.svg`"
          :alt="label"
        />
        <span>{{ label }}</span>
      </div>

      <div class="allocation__funding">$ 23,3B</div>
    </div>

    <div class="allocation__down-block">
      <div class="allocation__progressbar-wrapper">
        <div class="allocation__progressbar">
          <span
            class="allocation__progressbar-fill"
            :style="{ background: color }"
          ></span>
        </div>
      </div>

      <div class="allocation__percent">71,68%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Allocation",
  props: {
    icon: String,
    label: String,
    color: String,
  },
};
</script>

<style lang="scss" scoped>
.allocation {
  color: $white;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;

  &__up-block,
  &__down-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__coin-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }

  &__funding {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }

  &__progressbar-wrapper {
    width: 168px;
  }

  &__progressbar {
    width: 100%;
    height: 8px;
    border-radius: 100px;
    background: #353535;
  }

  &__progressbar-fill {
    display: block;
    height: 8px;
    border-radius: 3px;
    animation: progressBar 3s ease-in-out;
    animation-fill-mode: both;
  }

  &__percent {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
  }

  @keyframes progressBar {
    from {
      width: 0%;
    }
    to {
      width: 70%;
    }
  }
}
</style>
