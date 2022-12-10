<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <job-fitters-sidebar-prompt />

      <accordian header="Skills and Qualifications">
        <job-filters-sidebar-skills />
      </accordian>

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
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";

//Components
import Accordian from "@/components/Shared/Accordian.vue";
import JobFittersSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFittersSidebarPrompt.vue";
import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";
import JobFiltersSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue";

export default defineComponent({
  name: "JobFiltersSidebar",
  components: {
    Accordian,
    JobFittersSidebarPrompt,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarSkills,
  },
  setup() {
    const passSkillsSearchTerm = () => {
      const route = useRoute();
      const role = route.query.role || "";
      const store = useStore(key);
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role);
    };

    onMounted(passSkillsSearchTerm);
  },
});
</script>
