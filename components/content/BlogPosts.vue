<template>
  <ContentList v-slot="{ list }" path="/blog">
    <div v-for="article in list" :key="article._path">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
    </div>
  </ContentList>
</template>

<script></script>