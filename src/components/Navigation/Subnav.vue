<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobsResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1">{{ numberOfJobs }}</span> jobs
          matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FILTERED_JOBS } from "@/store/constants";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Subnav",
  computed: {
    ...mapGetters([FILTERED_JOBS]),
    numberOfJobs() {
      return this.FILTERED_JOBS.length;
    },
    onJobsResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
