<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <accordian header="Degree" />
      <job-filters-sidebar-checkbox-group
        :mutation="ADD_SELECTED_JOB_TYPES"
        :unique-values="uniqueJobTypes"
        header="Job Types"
      />
      <job-filters-sidebar-checkbox-group
        :mutation="ADD_SELECTED_ORGANIZATIONS"
        :unique-values="uniqueOrganizations"
        header="Organizations"
      />
    </section>
  </div>
</template>

<script>
//Components
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordian from "@/components/Shared/Accordian.vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup";

//Composable
import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";

//Constants
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
} from "@/store/constants";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordian,
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();
    const uniqueOrganizations = useUniqueOrganizations();

    return {
      uniqueJobTypes,
      uniqueOrganizations,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
};
</script>
