<template>
  <job-filters-sidebar-checkbox-group
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    :unique-values="uniqueOrganizations"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

//Composable
import { useUniqueOrganizations } from "@/store/composables";

//Constants
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

//Components
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

export default defineComponent({
  name: "JobFiltersSidebarDegrees",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueOrganizations = useUniqueOrganizations();

    return { uniqueOrganizations, ADD_SELECTED_ORGANIZATIONS };
  },
});
</script>
