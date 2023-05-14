<template>
  <div class="blog-inner-item">
    <div class="blog-info">
      <div class="date">{{ date }}</div>
      <div class="user">{{ name }}</div>
    </div>
    <h3 class="blog-title">{{ title }}</h3>
    <div class="blog-description" v-html="description"></div>
    <div class="blog-image">
      <router-link :to="link" class="readMore">Chi tiết</router-link>
      <img :src="image" alt="blog" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default: "Tháng 12, 2022",
    },
    name: {
      type: String,
      // default:'Tài Đinh',
    },
    title: {
      type: String,
      default: "Sự khác biệt trong quy trình dịch vụ kế toán của minh đức",
    },
    description: {
      type: String,
      default:
        "“Thật sự ấn tượng với đội ngũ nhiệt tình và trách nhiệm của Minh Đức. Đó là lý do mà chúng tôi luôn tin tưởng và lựa chọn Minh Đức là đơn vị làm kế toán thuế.”",
    },
    image: {
      type: String,
      default:
        "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/336061031_127099190310299_6745925633227936341_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=-wS1ANFAAqoAX_mgRjN&_nc_ht=scontent.fhan14-2.fna&oh=00_AfA0hs3XAydWXcc7QKv3Qjy74-xBzKbaoANpKolG3bkEig&oe=6443A93E",
    },
    link: {
      type: String,
      default: "/blog",
    },
  },
};
</script>

<style scoped>
.blog-inner-item {
  width: auto;
}
.blog-info {
  gap: 0.625vw;
  display: flex;

  font-size: 1vw;
  color: #656263;
  opacity: 0.7;
  font-weight: 500;
}
.blog-title {
  font-size: 1.5vw;
  color: var(--color-main);
}
.blog-description {
  font-weight: 500;
  font-size: 1vw;
  margin-top: 0.8750000000000001vw;
  color: var(--color-main);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.readMore {
  font-family: gilmer;
  font-size: 0.75vw;
  width: 4.4375vw;
  height: 4.4375vw;
  font-weight: 400;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  color: #fff;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  transform: translate(-50%, -50%);
}
.blog-inner-item:hover .readMore {
  opacity: 1;
  pointer-events: all;
}
.blog-image {
  margin-top: 1.875vw;
  position: relative;
}
.blog-image img {
  width: 100%;
  height: 22.875vw;
  object-fit: cover;
}
</style>
