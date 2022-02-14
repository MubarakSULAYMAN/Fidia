<template>
  <div class="card fidia-shadow d-flex flex-column">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="mb-0" v-text="title" />
        <img src="/svgs/icons/icon-more-dots.svg" alt="..." tabindex="0">
      </div>

      <div class="card-summary d-flex justify-content-between align-items-center mt-4">
        <div class="card-summary-text">
          <p class="card-figure" v-text="new Intl.NumberFormat().format(figure)" />

          <div class="figure-change">
            <img :src="changeStateIcon(figureChange)" alt="↑↓" class="figure-change-icon">
            <span :class="[ isNegative(figureChange) ? 'text-red' : 'text-green' ]" v-text="`${renderedValue(figureChange)}%`"/>
            <span class="ml-1 text-gray-light-1">vs last month</span>
          </div>
        </div>

        <img :src="changeStateImage(figureChange)" alt="📉📈" class="card-img col-5 m-auto p-0">
      </div>
    </div>
</template>

<script>
export default {
  name: 'OverviewSummaryCard',

  props: {
    title: {
      type: String,
      default: 'Title'
    },

    figure: {
      type: Number,
      default: 0
    },

    figureChange: {
      type: Number,
      default: 0
    },

    iconUrl: {
      type: String,
      default: "/static/svgs/icons/icon-flash.svg"
    },

    iconAlt: {
      type: String,
      default: "Image Alt"
    },

    imgUrl: {
      type: String,
      default: "/static/svgs/icons/icon-flash.svg"
    },

    imgAlt: {
      type: String,
      default: "Image Alt"
    },
  },

  methods: {
    isNegative (num) {
      return num < 0;
    },

    changeStateIcon (figureChange) {
      return figureChange < 0 ? this.parseStaticUrl('/svgs/icons/icon-arrow-negative.svg') : this.parseStaticUrl('/svgs/icons/icon-arrow-positive.svg');
    },

    changeStateImage (figureChange) {
      return figureChange < 0 ? this.parseStaticUrl('/svgs/graphs/chart-downward.svg') : this.parseStaticUrl('/svgs/graphs/chart-upward.svg');
    },

    renderedValue (figureChange) {
      return figureChange < 0 ? Math.abs(figureChange) : figureChange;
    }
  },
};
</script>

<style scoped>
.card {
  width: 380px;
  padding: 20px;
  border-radius: 8px;
}

.card-summary {
  height: 100px;
}

.card-figure {
  font-size: 32px;
  font-weight: 600;
}

.figure-change-icon {
  width: 12px;
}

.card-summary-text {
  width: 60%;
}

.card-img {
  width: 40%;
  /* object-fit: contain; */
}
</style>
