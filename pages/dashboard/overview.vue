<template>
  <div>
    <FidiaToolbar class="bg-white" />

    <section class="fidia-pad">
      <div class="overview-panel d-flex flex-column flex-lg-row">
        <div class="welcome-section">
          <p class="welcome-message text-black">Welcome back, {{ username }}</p>
          <p class="welcome-info text-gray-light-1">Track, manage and forecast your customers and orders.</p>
        </div>

        <div class="d-flex align-items-start mt-4 mt-lg-0 ml-lg-auto">
          <FidiaButton image-left img-url="/svgs/icons/icon-import.svg" button-name="Import" />
          <FidiaButton image-left img-url="/svgs/icons/icon-plus.svg" button-name="Add" class="button-add" />
        </div>
      </div>
    </section>

    <section class="fidia-pad d-flex flex-column flex-lg-row justify-content-between my-5">
      <SummaryCard v-for="card in summaryCards" :key="card.title" v-bind="card" class="d-flex justify-content-between" />
    </section>

    <ActivityOverview />
  </div>
</template>

<script>
import FidiaToolbar from '~/components/common/FidiaToolbar';
import SummaryCard from '~/components/overview/dashboard/SummaryCard.vue';
import ActivityOverview from '~/components/overview/dashboard/ActivityOverview.vue';

export default {
  name: 'DashboardOverview',

  components: {
    FidiaToolbar,
    SummaryCard,
    ActivityOverview
  },

  data () {
    return {
      username: 'Olivia',

      summaryCards: [
        {
          title: 'Total customers',
          figure: 2420,
          figureChange: 40,
        },

        {
          title: 'Members',
          figure: 1210,
          figureChange: -10,
        },

        {
          title: 'Active now',
          figure: 316,
          figureChange: 20,
        },
      ],
    };
  },

  head: {
    title: 'Dashboard > Overview',
  }
};
</script>

<style scoped>
.overview-panel {
  margin-top: 40px;
}

.overview-panel p {
  margin-bottom: 0;
}

.button-add {
  color: white;
  background-color: var(--fidia-purple);
}

.button-add,
.time-filter,
.country-filter {
  border-color: transparent;
}

.welcome-message {
  font-size: 32px;
}

@media screen and (max-width: 768px) {
  .welcome-message {
    font-size: 24px;
  }
}
</style>
