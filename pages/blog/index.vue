<template>
  <div class="container flex flex-wrap mx-auto">
    <!--<ul>
      <li v-for="{ _path: slug, title } in posts" :key="slug">
        <NuxtLink :to="slug">
          {{ title }}
        </NuxtLink>
      </li>
    </ul>-->
    <div
      class="
        card
        w-90
        bg-base-100
        shadow-xl
        mx-auto
        mt-3
        hover:(transition
        duration-150
        transform
        scale-102
        bg-gray-300
        shadow-xl
        bg-gradient-to-r
        from-blue-300
        to-pink-400)
      "
      v-for="{ _path: slug, title, description } in posts"
      :key="slug"
    >
      <!--<figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>-->
      <NuxtLink :to="slug">
        <div class="card-body">
          <h2 class="card-title">{{ title }}</h2>
          <p>{{ description}}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    posts: null,
  }),
  async mounted() {
    const data = await queryContent("/blog")
      .sort({ date: -1 })
      .where({ _partial: false })
      .find();
    this.posts = data;
  },
};
</script>