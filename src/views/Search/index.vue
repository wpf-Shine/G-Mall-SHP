<template>
  <div>
    <h2>query---{{$route.query}}</h2>
    <h2>params---{{$route.params}}</h2>
    <h3>{{keyWord}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: ['keyWord']

}
</script>

<style>
</style>