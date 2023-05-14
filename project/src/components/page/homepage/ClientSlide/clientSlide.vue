<template>
  <div class="section-5_slide">
    <Swiper
      :modules="modules"
      :slides-per-view="2"
      navigation
      loop
      :space-between="spaceBetween"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :speed="1200"
    >
      <SwiperSlide>
        <client-item
          position="Giám đốc "
          name="Tài"
          content="“Thật sự ấn tượng với đội ngũ nhiệt tình và trách nhiệm của Minh Đức. Đó là lý do mà OKHUB chúng tôi luôn tin tưởng và lựa chọn Minh Đức là đơn vị làm kế toán thuế.”"
          avatar="../../../../src/assets/img/avatarfb.jpg"
        ></client-item>
      </SwiperSlide>
      <SwiperSlide>
        <client-item
          position="Giám đốc "
          name="Tài"
          content="“Thật sự ấn tượng với đội ngũ nhiệt tình và trách nhiệm của Minh Đức. Đó là lý do mà OKHUB chúng tôi luôn tin tưởng và lựa chọn Minh Đức là đơn vị làm kế toán thuế.”"
          avatar="../../../../src/assets/img/avatarfb.jpg"
        ></client-item>
      </SwiperSlide>
      <SwiperSlide>
        <client-item
          position="Giám đốc "
          name="Tài"
          content="“Thật sự ấn tượng với đội ngũ nhiệt tình và trách nhiệm của Minh Đức. Đó là lý do mà OKHUB chúng tôi luôn tin tưởng và lựa chọn Minh Đức là đơn vị làm kế toán thuế.”"
          avatar="../../../../src/assets/img/avatarfb.jpg"
        ></client-item>
      </SwiperSlide>
      <SwiperSlide>
        <client-item
          position="Giám đốc "
          name="Tài"
          content="“Thật sự ấn tượng với đội ngũ nhiệt tình và trách nhiệm của Minh Đức. Đó là lý do mà OKHUB chúng tôi luôn tin tưởng và lựa chọn Minh Đức là đơn vị làm kế toán thuế.”"
          avatar="../../../../src/assets/img/avatarfb.jpg"
        ></client-item>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import clientItem from "./clientItem.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    clientItem,
  },

  setup() {
    const spaceBetween = (132 / 1600) * innerWidth;

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
      spaceBetween,
    };
  },
};
</script>

<style>
.section-5_slide {
  margin-left: 17.9375vw;
}
.section-5_slide .swiper {
  overflow: visible;
}
.section-5_slide .swiper-slide {
  transition: 0.5s;
}
.section-5_slide .swiper-slide-prev {
  opacity: 0;
}
.section-5_slide .swiper-slide-active + .swiper-slide {
  transform: scale(0.5);
}

.section-5_slide .swiper-button-next,
.section-5_slide .swiper-button-prev {
  width: 3.6875vw !important;
  height: 3.6875vw !important;
  border-radius: 50%;
  top: unset !important;
  border: 1px solid var(--color-main);
  background-color: #fff;
}
.section-5_slide .swiper-button-next::after,
.section-5_slide .swiper-button-prev::after {
  content: "";
  height: 50%;
  width: 50%;
  display: block;
  background-image: url("../../../../assets/img/arrowBtn.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2vw;
  filter: brightness(0) saturate(100%) invert(14%) sepia(99%) saturate(2632%)
    hue-rotate(192deg) brightness(98%) contrast(101%);
}
.section-5_slide .swiper-button-next {
  right: 6.25vw;
}
.section-5_slide .swiper-button-prev {
  right: 10.9375vw;
  left: unset;
}
.section-5_slide .swiper-button-prev::after {
  transform: rotate(180deg);
}
</style>
