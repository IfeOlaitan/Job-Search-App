<template>
  <job-filters-sidebar-checkbox-group
    :mutation="ADD_SELECTED_DEGREES"
    :unique-values="uniqueDegrees"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

//Composable
import { useUniqueDegrees } from "@/store/composables";

//Constants
import { ADD_SELECTED_DEGREES } from "@/store/constants";

//Components
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "JobFiltersSidebarDegrees",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueDegrees = useUniqueDegrees();

    return { uniqueDegrees, ADD_SELECTED_DEGREES };
  },
});
</script>
