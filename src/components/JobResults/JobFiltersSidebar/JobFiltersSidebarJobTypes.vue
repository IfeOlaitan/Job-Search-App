<template>
  <accordian header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordian>
</template>

<script>
import { useUniqueJobTypes } from "@/store/composables";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

//Constants
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

//Components
import Accordian from "@/components/Shared/Accordian.vue";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordian,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();

    const selectJobType = () => {
      //Mutation
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      //Router
      router.push({ name: "JobResults" });
    };

    return { selectedJobTypes, uniqueJobTypes, selectJobType };
  },
  // data() {
  //   return {
  //     selectedJobTypes: [],
  //   };
  // },
  // computed: {
  //   ...mapGetters([UNIQUE_JOB_TYPES]),
  // },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_JOB_TYPES]),
  //
  //   selectedJobType() {
  //     this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
  //     this.$router.push({ name: "JobResults" });
  //   },
  // },
};
</script>
