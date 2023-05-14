<template>
  <div class="section-9_wrapper-slide">
    <swiper
      :modules="modules"
      :slides-per-view="2"
      :space-between="0"
      autoplay
      :speed="900"
      navigation
      class="section-9_slide"
    >
      <Swiper-slide v-for="blog in Blogs" :key="blog.id">
        <loop-blog
          :description="blog.content.rendered"
          :name="blog.author_name"
          :date="blog.date"
          :title="blog.title.rendered"
          :image="blog.featured_media_url"
          :link="{ name: 'postDetail', params: { id: blog.slug } }"
        ></loop-blog>
      </Swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LoopBlog from "../LoopBlog.vue";
import axios from "axios";
import { ref } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    LoopBlog,
  },
  setup() {
    const Blogs = ref([]);
    axios.get("http://minh-duc.test/wp-json/wp/v2/posts").then((response) => {
      Blogs.value = response.data;
    });

    return {
      modules: [Navigation],
      Blogs,
    };
  },
};
</script>

<style>
.section-9_wrapper-slide {
  width: 93.75vw;
  overflow: hidden;
  position: relative;
  margin-left: 6.25vw;
}
.section-9_slide .swiper-wrapper {
  align-items: end;
}
.section-9_slide {
  overflow: visible;
  width: 68.0625vw;
  margin: 0;
  position: static;
}
.section-9_slide .swiper-slide {
  transition: 0.5s;
}
.section-9_slide .swiper-slide.swiper-slide-active,
.section-9_slide .swiper-slide.swiper-slide-active + .swiper-slide {
  margin-right: 1.4375vw;
}
.section-9_slide .swiper-button-next,
.section-9_slide .swiper-button-prev {
  width: 4.375vw !important;
  height: 4.375vw !important;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.section-9_slide .swiper-button-next {
  right: 2.4375vw;
}
.section-9_slide .swiper-button-next::after,
.section-9_slide .swiper-button-prev::after {
  content: "";
  display: block;
  width: 2.1875vw;
  height: 1.8750000000000001vw;
  background-image: url(../../../assets/img/arrowBtn.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.section-9_slide .swiper-button-prev::after {
  transform: rotate(180deg);
  position: relative;
  bottom: 0.02vw;
}
.section-9_slide .swiper-button-disabled {
  opacity: 0;
}
</style>
