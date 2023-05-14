import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/page/homepage/Home.vue";
import About from "./components/page/About/About.vue";
import BlogPage from "./components/page/Blog/BlogPage.vue";
import ContactPage from "./components/page/Contact/ContactPage.vue";
import RecruitmentPage from "./components/page/Recruitment/RecruitmentPage.vue";
import ServicesPage from "./components/page/ServicesPage/ServicesPage.vue";
import MemberPage from "./components/page/About/MemberPage.vue";
import PostDetail from "./components/page/Blog/DetailBlog.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  },
  {
    path: "/:id",
    name: "postDetail",
    component: PostDetail,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/recruitment",
    name: "recruitment",
    component: RecruitmentPage,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesPage,
  },
  {
    path: "/about/member",
    name: "member",
    component: MemberPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
