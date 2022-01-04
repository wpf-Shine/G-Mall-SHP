<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav'
import ListContainer from './components/ListContainer'
import Recommend from './components/Recommend'
import Rank from './components/Rank'
import Like from './components/Like'
import Floor from './components/Floor'
import Brand from './components/Brand'
export default {
  components: {
    TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style>
</style>