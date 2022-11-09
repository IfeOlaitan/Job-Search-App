<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-96 object-contain"
            src="https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="woman"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
        <div></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
  },
};
</script>
