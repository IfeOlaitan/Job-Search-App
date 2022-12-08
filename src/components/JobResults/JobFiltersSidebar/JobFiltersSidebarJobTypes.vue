<template>
  <job-filters-sidebar-checkbox-group
    :mutation="ADD_SELECTED_JOB_TYPES"
    :unique-values="uniqueJobTypes"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

//Composable
import { useUniqueJobTypes } from "@/store/composables";

//Constants
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

//Components
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "JobFiltersSidebarDegrees",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    return { uniqueJobTypes, ADD_SELECTED_JOB_TYPES };
  },
});
</script>
