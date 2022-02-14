import Vue from 'vue';
import FidiaTab from '~/components/common/FidiaTab.vue';
import FidiaButton from '~/components/common/FidiaButton.vue';
import FidiaSearch from '~/components/common/FidiaSearch.vue';
import FidiaTable from '~/components/common/FidiaTable.vue';
import FidiaCheckbox from '~/components/common/FidiaCheckbox.vue';
import FidiaCheckboxAll from '~/components/common/FidiaCheckboxAll.vue';

const components = {
  FidiaTab,
  FidiaButton,
  FidiaSearch,
  FidiaTable,
  FidiaCheckbox,
  FidiaCheckboxAll
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
