<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      type="text"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="Computer programming, Finance degree"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";

const store = useStore(key);
const skillsSearchTerm = computed({
  get() {
    return store.state.skillsSearchTerm;
  },
  set(value) {
    store.commit(UPDATE_SKILLS_SEARCH_TERM, value);
  },
});
</script>
