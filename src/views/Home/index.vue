<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList"
           :key="floor.id"
           :floor-list="floor" />
    <Brand />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TypeNav from '@/components/TypeNav'
import ListContainer from './components/ListContainer'
import Recommend from './components/Recommend'
import Rank from './components/Rank'
import Like from './components/Like'
import Floor from './components/Floor'
import Brand from './components/Brand'
export default {
  name: 'Home',
  components: {
    TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted () {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>

<style>
</style>