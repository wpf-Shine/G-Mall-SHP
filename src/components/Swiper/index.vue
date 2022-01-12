<template>
  <!-- Swiper -->
  <div class="swiper-container"
       ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="carousel in imagesList"
           :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  props: {
    imagesList: {
      type: Array,
      default: () => {
        return []
      }
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  },
  watch: {
    // 监听imagesList数据的变化
    imagesList: {
      immediate: true,
      handler (newValue, oldValue) {
        this.$nextTick(() => {
          var swiper = new Swiper(this.$refs.mySwiper, {
            loop: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        })
      }
    }
  }
}
</script>

<style>
</style>