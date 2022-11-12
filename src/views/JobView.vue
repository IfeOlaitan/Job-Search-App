<template>
  <h1>Job Page {{ currentJobId }}</h1>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      console.log(this.$route.params.id);
      return 5;
    },
  },
};
</script>
