<template>
  <accordian header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordian>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

//Constants
import {
  ADD_SELECTED_ORGANIZATIONS,
  UNIQUE_ORGANIZATIONS,
} from "@/store/constants";

//Components
import Accordian from "@/components/Shared/Accordian.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordian,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
    // UNIQUE_ORGANIZATIONS() {
    //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
    // },
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),

    selectOrganization() {
      //console.log(this.selectedOrganizations);
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
