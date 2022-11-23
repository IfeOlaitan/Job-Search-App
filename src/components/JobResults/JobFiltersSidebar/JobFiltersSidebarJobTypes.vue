<template>
  <accordian header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap">
          <li
            v-for="jobType in UNIQUE_JOB_TYPES"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectedJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordian>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

//Constants
import { ADD_SELECTED_JOB_TYPES, UNIQUE_JOB_TYPES } from "@/store/constants";

//Components
import Accordian from "@/components/Shared/Accordian.vue";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordian,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),

    selectedJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
