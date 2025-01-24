<template>
  <div class="navigation">
    <div class="navigation__dashboard">
      <img src="/icons/dashboard.svg" alt="dashboard" />
      <span>Dashboard</span>
    </div>

    <nav class="navigation__tabs">
      <ul>
        <li class="navigation__tab" v-for="(tab, index) in tabs" :key="index">
          <img
            class="navigation__tab-icon"
            :src="`/icons/${tab?.icon}.svg`"
            :alt="tab?.icon"
          />

          <router-link :id="`tab-${index}`" to="/">{{
            tab?.label
          }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      tabs: [
        {
          label: "Trade",
          icon: "trade",
        },
        {
          label: "Deposits",
          icon: "deposit",
        },
        {
          label: "Protocols",
          icon: "protocol",
        },
        {
          label: "Settings",
          icon: "setting",
        },
        {
          label: "Profile",
          icon: "profile",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: $navigation-max-width;
  max-height: $navigation-max-height;
  z-index: 2;

  &__dashboard {
    width: 234px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: linear-gradient(
      101.05deg,
      #1f8ebe -5.36%,
      #440495 29.46%,
      #440495 56.03%,
      #b102cd 81.92%
    );

    span {
      color: $white;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }

    &:hover {
      cursor: pointer;
      background-size: 200% 200%;
      animation: move-gradient 3s ease infinite;
    }
  }

  &__tabs {
    padding-left: 50px;

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }
  }

  &__tab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-top: 30px;

    a {
      color: $white;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }

    &:hover {
      cursor: pointer;
      transition: all 0.3s;
      transform: scale(1.15);
    }
  }

  @keyframes move-gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
