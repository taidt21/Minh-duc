<template>
  <footer>
    <div class="container">
        <div class="col-1">
            <div class="logo-footer">
                <img src="../../assets/img/logofooter.png" alt="Minh Đức">
            </div>
            <div class="contact-footer">
                <a href="tel:0911290476" class="contact-item">
                    <span class="contact-icon">
                        <img src="../../assets/img/call-calling.png" alt="phone">
                    </span>
                    <span class="contact-text">090.222.6656</span>
                </a>
                <a href="mailto:info@ketoanminhduc.vn" class="contact-item">
                    <span class="contact-icon">
                        <img src="../../assets/img/sms.png" alt="email">
                    </span>
                    <span class="contact-text">info@ketoanminhduc.vn</span>
                </a>
                <a href="" class="contact-item">
                    <span class="contact-icon">
                        <img src="../../assets/img/location.png" alt="location">
                    </span>
                    <span class="contact-text">Số 7, Ngõ 97 Phố Đại Linh, P. Trung Văn, Q. Nam Từ Liêm,TP. Hà Nội</span>
                </a>
            </div>
        </div>
        <div class="col-2">
            <h3 class="title">Dịch vụ</h3>
            <ul class="services">
                <li class="service-item">
                    <router-link to="/">Dịch vụ hoàn thuế </router-link>
                </li>
                <li class="service-item">
                    <router-link to="/">Dịch vụ kiểm toán thuế</router-link>
                </li>
                <li class="service-item">
                    <router-link to="/">Dịch vụ đại lý thuế</router-link>
                </li>
                <li class="service-item">
                    <router-link to="/">Dịch vụ quyết toán thuế </router-link>
                </li>
                <li class="service-item">
                    <router-link to="/">Dịch vụ chữ ký số điện tử</router-link>
                </li>
                <li class="service-item">
                    <router-link to="/">Dịch vụ hóa đơn điện tử </router-link>
                </li>
                <li class="service-item">
                    <router-link to="/">Dịch vụ thuế 1.1</router-link>
                </li>
                <li class="service-item">
                    <router-link to="/">Dịch vụ thuế trọn gói</router-link>
                </li>
            </ul>
        </div>
        <div class="col-3">
            <h3 class="title">Nhận ưu đãi</h3>
            <form @submit.prevent="submitForm">
               
                    <input  id="email" required placeholder="Nhập email" name="email" v-model="email"/>
                    <button >
                        <span class="btn-text">Gửi</span>
                        <span class="btn-icon">
                            <img src="../../assets/img/Arrowfooter.png" alt="submit">
                        </span>
                    </button>
               
            </form>
            <ul class="list-contact-icon">
                <li class="list-contact-item">
                    <a href="#" target="_blank">
                        <img src="../../assets/img/insta.png" alt="instargram">
                    </a>
                </li>
                <li class="list-contact-item">
                    <a href="#" target="_blank">
                        <img src="../../assets/img/fb.png" alt="facebook">
                    </a>
                </li>
                <li class="list-contact-item">
                    <a href="#" target="_blank">
                        <img src="../../assets/img/youtub.png" alt="youtube">
                    </a>
                </li>
                <li class="list-contact-item">
                    <a href="#" target="_blank">
                        <img src="../../assets/img/gg.png" alt="google">
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="text-bottom">@2022 KeToanThueMinhDuc. Thiết kế bởi OKHUB</div>
  </footer>
</template>

<script scoped>
import Button from '../page/Button.vue';
import { ref } from 'vue';
export default {
  components: { Button },
    name:"Footer",
    setup(){
        const email = ref('');
        const submitForm = () =>{
            console.log(`name: ${email.value}`)
        }
        return{
            email,
            submitForm,
        }
    }
}
</script>

<style scoped>
@import './footer.css';
</style>