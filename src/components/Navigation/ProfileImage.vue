<template>
  <img
    :src="imageLink"
    alt="Profile Image"
    class="w-10 h-10 object-cover rounded-3xl"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://images.pexels.com/photos/6282045/pexels-photo-6282045.jpeg",
    };
  },
};
</script>
