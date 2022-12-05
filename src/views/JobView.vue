<template>
  <h1>Job Page {{ currentJobId }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default defineComponent({
  name: "JobView",
  setup() {
    const route = useRoute();
    const currentJobId = computed(() => route.params.id);
    return { currentJobId };
  },
  // computed: {
  //   currentJobId() {
  //     return this.$route.params.id;
  //   },
  // },
});
</script>
