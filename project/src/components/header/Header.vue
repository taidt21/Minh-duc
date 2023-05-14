  <template>
    <header id="header" ref="header">
        <div class="container">
           
                <div class="header_logo">
                  <router-link to="/">
                    <img src="/logo-main.png" alt="Minh Đức" />
                  </router-link>
                </div>
                <nav class="header-nav">
                    <ul class="navbar">
                        <li class="nav-item" v-for="item in menuItems" :key="item.id">
                          <router-link :to="item.url">{{item.label}}</router-link>
                          <ul class="submenu" v-if="item.url === '/about'">
                            <li>
                              <router-link to="/about/member">Đội ngũ</router-link>
                            </li>
                          </ul>
                        </li>
                    </ul>
                </nav>
                <div class="header_btn-contact">
                  <router-link to="/contact" >Liên hệ ngay</router-link>
                </div>
            
        </div>
    </header>  
  </template>
  
  <script >
  import { onMounted, ref,onUnmounted  } from 'vue';
 
  export default {
    setup() {
   const  menuItems = ref([
        { label: 'Trang chủ', url: '/' },
        { label: 'Về chúng tôi', url: '/about' },
        
        { label: 'Dịch vụ', url: '/services' },
        { label:'Tin tức & sự kiện',url: '/blog'},
        { label: 'Tuyển dụng', url:'/recruitment'}
      ]);
     
     
      const header = ref(null);
      
      const handleScroll = () => {
      const heightHeader =  header.value.offsetHeight;

  const scrollTop = window.scrollY;
  if (scrollTop > heightHeader) {
    header.value.classList.add('bg-white');
    
  } else {
    header.value.classList.remove('bg-white');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});



return {
  header,
  menuItems,

};

   
    
  }
    }
  </script>
  
  <style scoped>
  @import './header.css';
  </style>