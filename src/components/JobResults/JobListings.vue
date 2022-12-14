<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { onMounted } from "vue";

//Composable
import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
import {
  useFilteredJobs,
  useFetchJobsDispatch,
  useFetchDegreesDispatch,
} from "@/store/composables";

//Components
import JobListing from "@/components/JobResults/JobListing.vue";

export default defineComponent({
  name: "JobListings",
  components: {
    JobListing,
  },
  setup() {
    onMounted(useFetchJobsDispatch);
    onMounted(useFetchDegreesDispatch);

    const filteredJobs = useFilteredJobs();

    const currentPage = useCurrentPage();

    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));

    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex); //0 - 10. 10 - 20, 20 - 30,
    });

    return { previousPage, nextPage, currentPage, displayedJobs };
  },
  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   currentPage() {
  //     const pageString = this.$route.query.page || "1";
  //     return Number.parseInt(pageString);
  //   },
  //   previousPage() {
  //     const previousPage = this.currentPage - 1;
  //     const firstPage = 1;
  //     return previousPage >= firstPage ? previousPage : undefined;
  //   },
  //   nextPage() {
  //     const nextPage = this.currentPage + 1; //10
  //     const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
  //     //const maxPage = this.jobs.length / 10;
  //     return nextPage <= maxPage ? nextPage : undefined;
  //   },
  //   displayedJobs() {
  //     const pageNumber = this.currentPage;
  //     const firstJobIndex = (pageNumber - 1) * 10;
  //     const lastJobIndex = pageNumber * 10;
  //     return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex); //0 - 10. 10 - 20, 20 - 30,
  //   },
  //   //...mapState(["jobs"]),
  // },
  // async mounted() {
  //   this.FETCH_JOBS();
  //
  //   //this.$store.dispatch(FETCH_JOBS);
  //
  //   // const baseUrl = process.env.VUE_APP_API_URL;
  //   // const response = await axios.get(`${baseUrl}/jobs`);
  //   // this.jobs = response.data;
  //
  //   // axios.get("http://localhost:3000/jobs").then((response) => {
  //   //   this.jobs = response.data;
  //   // });
  // },
  // methods: {
  //   ...mapActions([FETCH_JOBS]),
  // },
});
</script>
