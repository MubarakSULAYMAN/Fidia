<template>
  <section>
    <div class="d-flex justify-content-between">
        <div class="d-flex">
          <FidiaButton image-right img-url="/svgs/icons/icon-cancle.svg" :button-name="timeFilter" class="time-filter text-purple mr-3" />
          <FidiaButton image-right img-url="/svgs/icons/icon-cancle.svg" :button-name="countryFilter" class="country-filter text-purple mr-3" />
          <FidiaButton image-left img-url="/svgs/icons/icon-more-line.svg" button-name="More filters" />
        </div>

        <FidiaSearch :search-term="searchTerm" @make-search="makeSearch" />
    </div>

    <FidiaTable class="my-5 text-gray-light-1">
      <template slot="thead">
        <tr class="table-header text-gray-light-1">
          <th>
            <FidiaCheckboxAll
              :rows="companies"
              :selected-keys="selectedKeys"
              checkbox-key="_id"
              @set-selected-keys="setSelectedKeys"
            />
          </th>
          <th>
            <span>Company</span>
            <img src="/svgs/icons/icon-arrow-down.svg" alt="↓" class="ml-1">
          </th>
          <th>License use</th>
          <th>Status</th>
          <th>Users</th>
          <th>About</th>
          <th></th>
        </tr>
      </template>

      <template slot="tbody">
        <tr v-for="company in companies" :key="company.name" class="text-black">
          <td>
            <FidiaCheckbox
              :checkbox-key="company.name"
              :selected-keys="selectedKeys"
              @click.stop="checkRow"
            />
          </td>

          <td>
            <div class="d-flex align-items-center">
              <img :src="parseStaticUrl(company.logo)" :alt="company.name" class="company-logo mx-2">
              <div class="d-flex flex-column">
                <span v-text="company.name" />
                <a :href="`https://${company.url}`" target="_blank" rel="noopener noreferrer" class="text-gray-light-1" v-text="company.url" />
              </div>
            </div>
          </td>

          <td>
            <div class="progress-bar-wrapper">
              <div class="progress-bar" :style="{ width: company.licenceUse + '%' }"></div>
            </div>
          </td>

          <td>
            <span :class="[statusStyle(company.status), 'company-status']" v-text="company.status"/>
          </td>

          <td>
            <div class="d-flex">
              <div v-for="(user, index) in company.users.slice(0, 5)" :key="index" class="img-wrapper" :title="user.name">
                <img :src="parseStaticUrl(user.imgUrl)" alt="">
              </div>
              <div v-if="company.users.length > 5" class="img-text-wrapper" v-text="`+${company.users.length - 5}`" />
            </div>
          </td>

          <td>
            <div class="d-flex flex-column">
              <span v-text="company.aboutTitle" />
              <span class="about-description text-gray-light-1" v-text="company.aboutDescription" />
            </div>
          </td>

          <td>
            <div class="d-flex justify-content-between">
              <img src="/svgs/icons/icon-delete.svg" alt="🗑" tabindex="0">
              <img src="/svgs/icons/icon-edit.svg" alt="🖊" tabindex="0">
            </div>
          </td>
        </tr>

        <tr class="table-toolbar">
          <td colspan="7">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex">
                <FidiaButton button-name="Previous" />
                <FidiaButton button-name="Next" class="ml-4" />
              </div>

              <span>Page 1 of 10</span>
            </div>
          </td>
        </tr>
      </template>
    </FidiaTable>
  </section>
</template>

<script>
import companies from 'assets/data/companies.js';

export default {
  name: 'DashboardActivityOverview',

  data () {
    return {
      timeFilter: 'All time',
      selectedCountries: ['US', 'AU', 'UK', 'CA', 'GR', 'NG'],
      searchTerm: '',
      companies,
      selectedKeys: []
    };
  },

  computed: {
    countryFilter () {
      const countries = this.selectedCountries.slice(0, 2).toString().replace(/[[\]']+/g, ' ').replace(/,(?=[^\s])/g, ", ");
      const remainingCountries = this.selectedCountries.length - 2;
      return remainingCountries > 0 ? `${countries}, +${remainingCountries}` : `${countries}`;
    },

    isCustomer () {
      return this.status === 'Customer';
    }
  },

  methods: {
    focusOnSearch () {
      setTimeout(() => this.$refs.searchInput.focus());
    },

    makeSearch () {},

    statusStyle (status) {
      let currentClass = '';

      switch (status) {
        case 'Customer':
          currentClass = 'is-customer';
          break;

        case 'Churned':
          currentClass = 'is-churned';
          break;

        default:
          break;
      }

      return currentClass;
    },

    setSelectedKeys (keys) {
      this.selectedKeys = keys;
    },

    checkRow (e) {
      const { value } = e.target;
      if (value) {
        const foundIndex = this.selectedKeys.findIndex(x => x === value);
        if (foundIndex !== -1) {
          this.selectedKeys.splice(foundIndex, 1);
          return;
        }
        this.selectedKeys.push(value);
      }
    }
  }
};
</script>

<style scoped>
.time-filter,
.country-filter {
  color: var(--fidia-purple);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  background-color: var(--fidia-purple-fade);
}

th {
  font-weight: 400;
}

th,
td {
  padding: 15px 10px;
}

th:first-of-type,
td:first-of-type {
  padding-left: 20px;
}

th:last-of-type,
td:last-of-type {
  padding-right: 20px;
}

tr:nth-child(even) {
  background-color: var(--fidia-gray-fade-3);
}

tr:hover:not(tr.table-header) {
  background-color: var(--fidia-purple-fade);
}

.table-header {
  border-bottom: 1px solid var(--fidia-gray-fade-1);
}

.table-toolbar {
  border-top: 1px solid var(--fidia-gray-fade-1);
  background-color: transparent !important;
}

tr a {
  width: fit-content;
}

tr a:hover {
  color: var(--fidia-purple-light);
  text-decoration: none;
  transition: ease 0.3s;
}

td:nth-child(1) {
  width: 2%;
}

td:nth-child(2) {
  width: 25%;
}

td:nth-child(3) {
  width: 12%;
}

td:nth-child(4) {
  width: 12%;
}

td:nth-child(5) {
  width: 18%;
}

td:nth-child(6) {
  width: 25%;
}

td:nth-child(7) {
  width: 6%;
}

.company-logo {
  width: 44px;
  height: 44px;
}

.progress-bar-wrapper,
.progress-bar {
  height: 10px;
  border-radius: 5px;
}

.progress-bar-wrapper {
  width: 100px;
  background-color: var(--fidia-purple-fade);
}

.progress-bar {
  width: 20px;
  background-color: var(--fidia-purple-light);
  transition: ease-in-out 0.5s;
}

.company-status {
  padding: 2px 10px;
  border-radius: 12px;
}

.is-customer {
  color: var(--fidia-green);
  background-color: var(--fidia-green-fade);
}

.is-churned {
  color: var(--fidia-gray);
  background-color: var(--fidia-gray-fade-2);
}

.img-wrapper,
.img-text-wrapper {
  width: 32px;
  height: 32px;
  color: var(--fidia-purple-light);
  border: 1px solid white;
  border-radius: 50%;
  background-color: var(--fidia-purple-fade);
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
}

.img-wrapper:not(:first-of-type),
.img-text-wrapper {
  margin-left: -8px;
}

.img-text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
