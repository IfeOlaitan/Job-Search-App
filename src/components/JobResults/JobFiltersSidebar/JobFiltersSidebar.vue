<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <job-fitters-sidebar-prompt />

      <accordian header="Degrees">
        <job-filters-sidebar-degrees />
      </accordian>

      <accordian header="Job Types">
        <job-filters-sidebar-job-types />
      </accordian>

      <accordian header="Organizations">
        <job-filters-sidebar-organizations />
      </accordian>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//Components
import Accordian from "@/components/Shared/Accordian.vue";
import JobFittersSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFittersSidebarPrompt.vue";
import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    Accordian,
    JobFittersSidebarPrompt,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganizations,
  },
});
</script>
