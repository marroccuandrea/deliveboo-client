<script>
export default {
  props: {
    dishObject: Object,
  },
};
</script>

<template>
  <div class="col">
    <div class="card">
      <h2>{{ dishObject.name }}</h2>
    </div>
  </div>
</template>
