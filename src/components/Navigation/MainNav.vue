<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Tech Careers</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <router-link
                class="flex items-center h-full py-2.5"
                :to="menuItem.url"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            type="primary"
            data-test="login-button"
            text="Sign in"
            @click="LOGIN_USER"
          />
        </div>
      </div>
      <subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapMutations, mapState } from "vuex";

//Constants
import { LOGIN_USER } from "@/store/constants";

//Components
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import Subnav from "@/components/Navigation/Subnav.vue";

export default defineComponent({
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    Subnav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life at Tech Careers", url: "/" },
        { text: "How We Hire", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    // LOGIN_USER() {
    //   this.$store.commit(LOGIN_USER);
    // },
    ...mapMutations([LOGIN_USER]),
  },
});
</script>
