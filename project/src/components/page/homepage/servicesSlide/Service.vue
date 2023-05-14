<template>
  <swiper
    :modules="modules"
    :slides-per-view="4"
    :space-between="0"
    autoplay
    loop
    :speed="700"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <ServicesItem
        v-for="service in services"
        :key="service.id"
        :name="service.title.rendered"
        :description="service.content.rendered"
        :url="service.slug"
        :image="service.featured_media_url"
      ></ServicesItem>
    </swiper-slide>
  </swiper>
</template>

<script scoped>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServicesItem from "./servicesItem.vue";
import { ref } from "vue";
import axios from "axios";
export default {
  components: {
    Swiper,
    SwiperSlide,
    ServicesItem,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const services = ref([]);
    axios.get("http://minh-duc.test/wp-json/wp/v2/dich_vu").then((response) => {
      services.value = response.data;
      console.log(services.value);
    });

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
      services,
    };
  },
};
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 5.0625vw;
  height: 5.0625vw;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
}
.swiper-button-prev::after {
  transform: rotate(180deg);
}
.swiper-button-prev::after,
.swiper-button-next::after {
  content: "" !important;
  display: block;
  width: 2.5vw;
  height: 2.5vw;
  background-image: url("../../../../assets/img/arrowBtn.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
