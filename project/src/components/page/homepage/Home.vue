<template>
    <section class="section-1">
        <div class="container">
            <div class="section-1_col-1">
                <Title pageTitle="Dịch vụ kế toán thuế trọn gói" tag="h1" hightlightText=" Minh Đức"></Title>
                <Description :htmlContent="`<p>Phát triển bền vững, gia tăng giá trị cho doanh nghiệp là điều mà <b>Minh Đức</b> hướng tới. Chúng tôi đề ra sức mệnh giúp <b>1 triệu doanh nghiệp Việt Nam an tâm phát triển mà không lo sai phạm về thuế. </p>`"></Description>
                <div class="wrapper-btn">
                        <Button textBtn="Xem thêm" tag="router-link" to="/about"></Button>
                        <router-link to="/about" class="btn-hsnl">Hồ sơ năng lực</router-link>
                </div>
                <div class="section-1_contact">
                    <a href="tel:0911290476" class="section-1_contact-item">
                        <span class="contact-icon">
                            <img src="../../../assets/img/call-calling.png" alt="phone">
                        </span>
                        <span class="contact-text">0911290476</span>
                    </a>
                    <a class="section-1_contact-item">
                        <span class="contact-icon">
                            <img src="../../../assets/img/sms.png" alt="mail">
                        </span>
                        <span class="contact-text">info@ketoanminhduc.vn</span>
                    </a>
                </div>
            </div>
            <div class="section-1_col-2">
                <img src="../../../assets/img/groupBanner.png" alt="Banner">
            </div>
        </div>
    </section>
    <section class="section-2">
        <div class="container">
            <div class="section-2_col-1">
                <div class="section-2_col-1_wrapper">
                    <Title pageTitle="Giải pháp quản trị doanh nghiệp toàn diện"></Title>
                    <Button class="section-2_btn" to="#" textBtn="Xem thêm"></Button>
                </div>
            </div>
            <div class="section-2_col-2">
                <div class="section-2_col-2_row-1">
                    <div class="section-2_col-2_row-1_col-1">
                        <p class="quote">Hạnh phúc của tôi là thấy mọi doanh nghiệp ở Việt Nam phát triển thịnh vượng</p>
                        <ul class="info">
                            <li class="info-item">Mrs. Hà Nhâm</li>
                            <li class="info-item">CEO Minh Đức Tax</li>
                        </ul>
                    </div>
                    <div class="section-2_col-2_row-1_col-2">
                        <div class="person">
                            <img src="../../../assets/img/hanhamm.png" alt="Mrs. Hà Nhâm">
                        </div>
                    </div>
                </div>
                <div class="section-2_col-2_row-2">
                    <div class="row-1">
                        <div class="counters">
                            <Counter max="15"></Counter>
                         
                            <p class="counter-des">năm kinh nghiệm
                                trong lĩnh vực thuế</p>
                        </div>

                        <p class="text-des">Cung cấp giải pháp xây dựng một doanh nghiệp <b>CHUẨN MỰC</b>, phát triển <b>BỀN VỮNG</b> và <b>THỊNH VƯỢNG</b></p>
                    </div>
                    <div class="row-2">
                        <div class="box-wrapper">
                            <boxicon title="GIÀU CÓ" src="../../../../src/assets/img/kimcuong.png" Description="Khách hàng của Minh Đức tăng trưởng qua từng năm"></boxicon>
                            <boxicon title="AN TÂM" src="../../../../src/assets/img/huychuong.png" Description="Đội ngũ dày dặn kinh nghiệm luôn sẵn sàng đồng hành"></boxicon>
                            <boxicon title="HẠNH PHÚC" src="../../../../src/assets/img/profile.png" Description="Chủ doanh nghiệp không còn phải lo nghĩ về thuế"></boxicon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-3">
        <div class="container">
            
            <div class="section-3_row-1">

                <div class="col-1">
                    <before-title title="Dịch vụ của chúng tôi"></before-title> 
                    <Title pageTitle="Giảm thiểu rủi ro" hightlightText=" Chi phí cho doanh nghiệp"></Title>
                </div>
                <div class="col-2">
                    <Button tag="router-link" to="/about" textBtn="Xem tất cả"></Button>
                </div>
            </div>
            <divider></divider>
           <service></service>
        </div>
    </section>
    <section class="section-4">
        <div class="container">
            <div class="section-4_col-1">
                <div class="section-4_col-1_row-1">
                    <counter-section-4 maxCount="15" des="Năm kinh nghiệm làm việc
                    kiểm toán nhà nước"></counter-section-4>
                    <counter-section-4 maxCount="30" des="Nhân sự nhiệt huyết và
                    tận tâm với nghề"></counter-section-4>
                    <counter-section-4 maxCount="300" des="Doanh nghiệp đã tin tưởng
                    và lựa chọn Minh Đức"></counter-section-4>
                    <counter-section-4 maxCount="60" des="Đối tác hợp tác chiến lược
                    và toàn diện"></counter-section-4>
                </div>
                <div class="section-4_col-1_row-2">
                    <Title pageTitle="Lý do lựa chọn
                    Minh Đức Tax"></Title>
                    <Description htmlContent="<p>Đặt niềm tin vào chúng tôi ngay hôm nay
                        Đó là nền móng cho sự phát triển doanh nghiệp của bạn</p>"></Description>
                        <div class="section-4_contact">
                            <a href="tel:0911290476" class="section-4_contact-item">
                                <span class="contact-icon">
                                    <img src="../../../assets/img/call-calling.png" alt="phone">
                                </span>
                                <span class="contact-text">0911290476</span>
                            </a>
                            <a class="section-4_contact-item">
                                <span class="contact-icon">
                                    <img src="../../../assets/img/sms.png" alt="mail">
                                </span>
                                <span class="contact-text">info@ketoanminhduc.vn</span>
                            </a>
                        </div>
                </div>
            </div>
            <div class="section-4_col-2">
                <img src="../../../assets/img/bannerSection4.png" alt="Minh Đức">
            </div>
        </div>
    </section>
    <section class="section-5">
        <div class="container">
            <div class="section-5_row-1">
                <BeforeTitle title="Khách hàng của chúng tôi"></BeforeTitle>
                <Title pageTitle="Đồng hành với đối tác
                và khách hàng"></Title>
                <Divider></Divider>
            </div>
            <div class="section-5_row-2">
                
                <client-slide></client-slide>
            </div>
        </div>
    </section>
    <section class="section-6">
        <div class="container">
            <logo-marquee></logo-marquee>
        </div>
    </section>
    <section class="section-7">
        <div class="container">
            <div class="col-1">
                <img src="../../../assets/img/chigikia.png" alt="error">
            </div>
            <div class="col-2">
                <Title pageTitle="Hãy để chúng tôi giải đáp tất cả thắc mắc của bạn"></Title>
                <Description htmlContent="<p>Phát triển bền vững, gia tăng giá trị cho doanh nghiệp là điều mà Minh Đức hướng tới. Chúng tôi đề ra sức mệnh giúp 1 triệu doanh nghiệp Việt Nam an tâm phát triển mà không lo sai phạm về thuế. </p>"></Description>
                <Button  textBtn="Liên hệ tư vấn" to="/about"></Button>
            </div>
        </div>
    </section>
    <section class="section-8">
        <div class="container">
            <Form></Form>
            
        </div>
    </section>
    <section class="section-9 ">
        <div class="container">
            <before-title title="Tin tức và sự kiện"></before-title>
            <div class="section-9_row-1">
                <div class="section-9_row-1_col-1">
                    <Title pageTitle="Kiến Thức Mới Từ
                    Minh Đức Tax"></Title>
                </div>
                <div class="section-9_row-1_col-2">
                    <Button textBtn="Xem tất cả" to="/"></Button>
                </div>
            </div>
            <divider></divider>
            <slide-blog></slide-blog>
        </div>
    </section>
    <section class="section-10">
        <div class="container">
            <div class="section-10_col-1">
                <Title pageTitle="Hỏi và đáp"></Title>
                <form @submit.prevent="submitForm" class="section-10_form">
                    <input type="text" v-model="name"  placeholder="Họ và tên"  required/>
                    <input type="email" v-model="email"  placeholder="Email"  required/>
                    <textarea name="question" v-model="question" required  placeholder="Đặt câu hỏi tại đây"></textarea>
                    <Button @click="submitForm" type="submit" textBtn="Gửi câu hỏi ngay" to="#" tag="a"></Button>
                </form>
            </div>
            <div class="section-10_col-2">
                <Title pageTitle="Câu hỏi thường gặp"></Title>
                <accordion></accordion>
            </div>
        </div>
    </section>

   
</template>

<script scoped>
import BeforeTitle from '../BeforeTitle.vue';
import Boxicon from '../Boxicon.vue';
import Button from '../Button.vue';
import Counter from '../Counter.vue';
import CounterSection4 from '../CounterSection4.vue';
import Description from '../Description.vue';
import Divider from '../Divider.vue';
import Form from '../Form.vue';
import Title from '../Title.vue';
import ClientSlide from './ClientSlide/clientSlide.vue';
import LogoMarquee from './LogoMarquee/logoMarquee.vue';
import Service from './servicesSlide/Service.vue';
import SlideBlog from './SlideBlog.vue';
import { ref } from 'vue';
import Accordion from './accordion.vue';

export default {

  components: { Title },

    name:"home",
    components: {
    Title,
    Button,
    Description,
    Counter,
    Boxicon,
    Service,
    BeforeTitle,
    Divider,
    CounterSection4,
    ClientSlide,
    LogoMarquee,
    Form,
    SlideBlog,
     Accordion,
    

},

setup(){
    const email = ref(null);
const name = ref(null);
const question = ref(null);
const submitForm = ()=>{
    console.log('email: ' + email.value);
    console.log('name: ' + name.value);
    console.log('question: ' + question.value);
    email.value = ''
    name.value = ''
    question.value = ''
}
return{
    email,
    name,
    question,
    submitForm
}
   
},
 
}
</script>

<style scoped>
@import './home.css';
</style>