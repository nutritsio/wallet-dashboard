<template>
  <div class="chains">
    <h3 class="chains__title">Chain Allocation</h3>

    <Allocation
      v-for="(allo, index) in allocations"
      :key="index"
      :icon="allo?.icon"
      :label="allo?.label"
      :color="allo?.color"
    />

    <button class="chains__btn">View All</button>
  </div>
</template>

<script>
import Allocation from "~/components/UIKit/Allocation";

export default {
  name: "Chains",
  components: {
    Allocation,
  },
  data() {
    return {
      allocations: [
        {
          label: "Bitcoin",
          icon: "btc",
          color: "linear-gradient(268.5deg, #FB03F5 -11.69%, #AA9CFF 112.48%)",
        },
        {
          label: "Ethereum",
          icon: "eth",
          color: "linear-gradient(180deg, #5CFF9C 0%, #00FFA3 100%)",
        },
        {
          label: "Shiba",
          icon: "shiba",
          color: "linear-gradient(268.5deg, #FB035C -11.69%, #FA9FA5 112.48%)",
        },
        {
          label: "Solona",
          icon: "sol",
          color: "linear-gradient(268.5deg, #FB03F5 -11.69%, #AA9CFF 112.48%)",
        },
        {
          label: "Tether",
          icon: "usdt",
          color: "linear-gradient(268.5deg, #50AF95 -11.69%, #00FFB9 112.48%)",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.chains {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  max-width: 284px;
  border-radius: 16px;
  padding: 30px;
  background: rgba(28, 28, 28, 0.3);
  backdrop-filter: blur(30px);

  &__title {
    color: $white;
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 20px;
  }

  &__btn {
    margin-top: 30px;
    color: $white;
    width: 100%;
    height: 40px;
    padding: 10px 24px 10px 24px;
    border-radius: 12px;
    background: #2b2b2b;
    border: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
