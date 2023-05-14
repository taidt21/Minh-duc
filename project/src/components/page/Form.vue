<template>
    <div class="form-container">  
        <before-title title="Báo giá dịch vụ"></before-title>
        <Title pageTitle="Chi phí dịch vụ kế toán thuế"></Title>
        <p class="description">Công ty TNHH Dịch vụ Kế toán thuế Minh Đức xin gửi lời chào và lời cảm ơn trân trọng đến quý khách hàng đã tin tưởng và sử dụng dịch vụ của Công ty chúng tôi.</p>
    <div class="form-calculate">

        <div class="form-item">
            <label for="type-of-business">Loại hình:</label>
            <select v-model="Busines" name="Loại hình" id="type-of-business">
                <option value="Thương mại" >Thương mại</option>
                <option value="Xây dựng">Xây dựng</option>
                <option value="Sản xuất">Sản xuất</option>
                <option value="Dịch vụ">Dịch vụ</option>
            </select>
        </div>
        <div class="form-item">
            <label for="revenue">Doanh thu</label>
            <select v-model="revenue" name="Doanh thu" id="revenue">
                <option v-for="revenue in revenues" :key="revenue.id" :value="revenue.value" >
                    {{ revenue.value }}
                </option>
               
            </select>
        </div>
        <div class="form-item">
            <label for="#">Doanh nghiệp </label>
            <div class="form-company-wrap">
                <div class="company-item">
                    <input v-model="nation" type="radio"   name="company" value="Doanh nghiệp Việt Nam" id="current" checked>
                    <label for="current">Doanh nghiệp Việt Nam</label>
                </div>
               
                <div class="company-item">
                    <input v-model="nation" type="radio"  name="company" value="Doanh nghiệp có vốn nước ngoài" id="other" >
                    <label for="other">Doanh nghiệp có vốn nước ngoài</label>
                </div>
            </div>
        </div>
        <Button ref="btnCalc" tag="a" to="#" textBtn="Xem chi phí"></Button>
    </div>
</div>

<!--Poppup-->
<div class="poppup" ref="poppup">
    <div class="close" ref="closeBtn"></div>
    <h3 class="title-poppup">Chi phí dịch vụ</h3>
    <p class="dynamic-des" ref="result">(Doanh nghiệp có vốn nước ngoài, Loại hình thương mại, doanh thu 0-50tr/tháng)</p>
    <div class="price" ref="price">1.500.000 VND</div>
    <div class="poppup-box-content">
        <h4>Nội dung công việc</h4>
        <ul class="content-detail">
            <li>
                Báo cáo thuế trọn gói

            </li>
            <li>Tư vấn, hướng dẫn luật thuế, các văn bản về thuế liên quan đến hoạt động của doanh nghiệp.
            </li>
            <li>Tư vấn hồ sơ chứng từ thuế trước, trong, sau  báo cáo thuế hàng quý kịp thời đưa ra kết quả để xử lý tối ưu nhất cho doanh nghiệp.
            </li>
            <li>Nộp báo cáo, thuế GTGT hàng quý. Tất cả các báo cáo thuế, BCTC,... nộp theo đúng quy định và thời gian của cơ quan thuế
            </li>
            <li>Chịu trách nhiệm quyết toán với cơ quan thuế</li>
            <li>In chứng từ thu chi, nhập xuất
            </li>
            <li>In ấn sổ sách, In ấn bảng biểu, In ấn hồ sơ tiền lương, 
            </li>
            <li>Bàn giao bản cứng hồ sơ sổ sách sau BCTC năm  từ 1-3 tháng</li>
        </ul>
    </div>
    <div class="btn-group">
        <Button tag="a" to="/" textBtn="Liên hệ zalo"></Button>
        <a  class="btn-call" href="tel:0911290476">091.129.0476</a>
    </div>
</div>
<div ref="getNation" class="value-nation"></div>
</template>

<script >
import {ref,onMounted,watchEffect} from 'vue';
import Title from '../page/Title.vue';
import beforeTitle from '../page/BeforeTitle.vue' ;
import Button from './Button.vue';
export default {
    components:{
        Title,beforeTitle,
        Button,
    },
    
    setup(){
        //data doanh thu 
        const revenues = [
            {
                value:"0",
                id:1
            },
            {
                value:"0 - 50tr" ,
                id:2
            },
            {
                value:"50tr - 100tr" ,
                id:3
            },
            {
                value:"100tr - 300tr" ,
                id:4
            },
            {
                value:"300tr - 500tr" ,
                id:5
            },
            {
                value:"500tr - 1tỷ",
                 id:6
                },
            {
                value:"1tỷ - 2tỷ",
                 id:7
                },
            {
                value:"2tỷ - 3tỷ",
                id:8
            },
            {
                value:"3tỷ - 5tỷ" ,
                 id:9
                },
            {
                value:"> 5tỷ",
                 id:10
                },
        ];
   

//danh sách chi phí doanh nghiệp  VN
    var curentTM = [
        "500.000 - 700.000",
        "1.000.000",
        "1.300.000",
        "1.700.000",
        "2.000.000",
        "2.500.000",
        "3.000.000",
        "4.000.000",
        "5.000.000",
        "Thương lượng",
    ];
    var currentXD = [
        "500.000 - 800.000",
        "1.000.000",
        "1.500.000",
        "2.000.000",
        "2.500.000",
        "3.500.000",
        "4.000.000",
        "5.000.000",
        "6.000.000",
        "Thương lượng",
    ];
    var currentSX = [
        "500.000 - 800.000",
        "1.000.000",
        "1.500.000",
        "2.000.000",
        "2.500.000",
        "3.500.000",
        "4.000.000",
        "5.000.000",
        "6.000.000",
        "Thương lượng",
    ];
    var currentDV = [
        "500.000 - 800.000",
        "1.000.000",
        "1.500.000",
        "2.000.000",
        "2.500.000",
        "3.500.000",
        "4.000.000",
        "5.000.000",
        "6.000.000",
        "Thương lượng",
    ];
// danh sách chi phí doanh nghiệp nước ngoài

var otherTM = [
        "1.000.000 - 1.500.000",
        "2.000.000",
        "2.200.000",
        "2.500.000",
        "3.000.000",
        "3.500.000",
        "4.000.000",
        "5.000.000",
        "6.000.000",
        "Thương lượng",
    ];
    var otherXD = [
        "1.000.000 - 1.500.000",
        "2.000.000",
        "2.500.000",
        "3.000.000",
        "3.500.000",
        "4.500.000",
        "5.000.000",
        "6.000.000",
        "7.000.000",
        "Thương lượng",
    ];
    var otherSX = [
        "1.000.000 - 1.500.000",
        "2.000.000",
        "2.500.000",
        "3.000.000",
        "3.500.000",
        "4.500.000",
        "5.000.000",
        "6.000.000",
        "7.000.000",
        "Thương lượng",
    ];
    var otherDV = [
        "1.000.000 - 1.500.000",
        "2.000.000",
        "2.500.000",
        "3.000.000",
        "3.500.000",
        "4.500.000",
        "5.000.000",
        "6.000.000",
        "7.000.000",
        "Thương lượng",
    ];
// biến rỗng 
var taxPiceTM = [];
var taxPiceXD =[];
var taxPiceSX =[];
var taxPiceDV =[];


// tham chiếu đến các giá trị input và select
   
    const Busines = ref('Thương mại');
    const revenue = ref('0');
    const nation = ref('Doanh nghiệp Việt Nam');
 
    
// tham chiếu đến nút xử lí logic
    const btnCalc = ref(null);
    const closeBtn = ref(null);
// tham chiếu poppup
    const poppup = ref(null);
    const result = ref(null);
    const price = ref(null);
   
 
onMounted(() =>{
    btnCalc.value.$el.addEventListener('click',()=>{
        poppup.value.classList.add('active');
        
        if(nation.value == 'Doanh nghiệp Việt Nam'){
            taxPiceTM = curentTM;
            taxPiceXD = currentXD;
            taxPiceSX = currentSX;
            taxPiceDV = currentDV;
            
            
         
            
            
        }
        else if(nation.value == 'Doanh nghiệp có vốn nước ngoài'){
            taxPiceTM = otherTM;
            taxPiceXD = otherXD;
            taxPiceSX = otherSX;
            taxPiceDV = otherDV;
        }
        if(Busines.value == 'Thương mại'){
                
                if( revenue.value == revenues[0].value ){
                price.value.innerText = taxPiceTM[0];
                }
                else if( revenue.value == revenues[1].value ){
                    price.value.innerText = taxPiceTM[1];
                }
                else if( revenue.value == revenues[2].value ){
                    price.value.innerText = taxPiceTM[2];
                }
                else if( revenue.value == revenues[3].value ){
                    price.value.innerText = taxPiceTM[3];
                }
                else if( revenue.value == revenues[4].value ){
                    price.value.innerText = taxPiceTM[4];
                }
                else if( revenue.value == revenues[5].value ){
                    price.value.innerText = taxPiceTM[5];
                }
                else if( revenue.value == revenues[6].value ){
                    price.value.innerText = taxPiceTM[6];
                }
                else if( revenue.value == revenues[7].value ){
                    price.value.innerText = taxPiceTM[7];
                }
                else if( revenue.value == revenues[8].value ){
                    price.value.innerText = taxPiceTM[8];
                }
                else if( revenue.value == revenues[9].value ){
                    price.value.innerText = taxPiceTM[9];
                }
            }
            else if(Busines.value == 'Xây dựng'){
                if( revenue.value == revenues[0].value ){
                price.value.innerText = taxPiceXD[0];
                }
                else if( revenue.value == revenues[1].value ){
                    price.value.innerText = taxPiceXD[1];
                }
                else if( revenue.value == revenues[2].value ){
                    price.value.innerText = taxPiceXD[2];
                }
                else if( revenue.value == revenues[3].value ){
                    price.value.innerText = taxPiceXD[3];
                }
                else if( revenue.value == revenues[4].value ){
                    price.value.innerText = taxPiceXD[4];
                }
                else if( revenue.value == revenues[5].value ){
                    price.value.innerText = taxPiceXD[5];
                }
                else if( revenue.value == revenues[6].value ){
                    price.value.innerText = taxPiceXD[6];
                }
                else if( revenue.value == revenues[7].value ){
                    price.value.innerText = taxPiceXD[7];
                }
                else if( revenue.value == revenues[8].value ){
                    price.value.innerText = taxPiceXD[8];
                }
                else if( revenue.value == revenues[9].value ){
                    price.value.innerText = taxPiceXD[9];
                }
            }
            else if(Busines.value == 'Sản xuất'){
                if( revenue.value == revenues[0].value ){
                price.value.innerText = taxPiceSX[0];
                }
                else if( revenue.value == revenues[1].value ){
                    price.value.innerText = taxPiceSX[1];
                }
                else if( revenue.value == revenues[2].value ){
                    price.value.innerText = taxPiceSX[2];
                }
                else if( revenue.value == revenues[3].value ){
                    price.value.innerText = taxPiceSX[3];
                }
                else if( revenue.value == revenues[4].value ){
                    price.value.innerText = taxPiceSX[4];
                }
                else if( revenue.value == revenues[5].value ){
                    price.value.innerText = taxPiceSX[5];
                }
                else if( revenue.value == revenues[6].value ){
                    price.value.innerText = taxPiceSX[6];
                }
                else if( revenue.value == revenues[7].value ){
                    price.value.innerText = taxPiceSX[7];
                }
                else if( revenue.value == revenues[8].value ){
                    price.value.innerText = taxPiceSX[8];
                }
                else if( revenue.value == revenues[9].value ){
                    price.value.innerText = taxPiceSX[9];
                }
            }
            else if(Busines.value == 'Dịch vụ'){
                if( revenue.value == revenues[0].value ){
                price.value.innerText = taxPiceDV[0];
                }
                else if( revenue.value == revenues[1].value ){
                    price.value.innerText = taxPiceDV[1];
                }
                else if( revenue.value == revenues[2].value ){
                    price.value.innerText = taxPiceDV[2];
                }
                else if( revenue.value == revenues[3].value ){
                    price.value.innerText = taxPiceDV[3];
                }
                else if( revenue.value == revenues[4].value ){
                    price.value.innerText = taxPiceDV[4];
                }
                else if( revenue.value == revenues[5].value ){
                    price.value.innerText = taxPiceDV[5];
                }
                else if( revenue.value == revenues[6].value ){
                    price.value.innerText = taxPiceDV[6];
                }
                else if( revenue.value == revenues[7].value ){
                    price.value.innerText = taxPiceDV[7];
                }
                else if( revenue.value == revenues[8].value ){
                    price.value.innerText = taxPiceDV[8];
                }
                else if( revenue.value == revenues[9].value ){
                    price.value.innerText = taxPiceDV[9];
                }
            }
      result.value.innerText = '(' + nation.value + ', ' + 'Loại hình ' + Busines.value + ',' + ' doanh thu ' + revenue.value + '/tháng' + ')'
 // end click
    })

    
    



    closeBtn.value.addEventListener('click',()=>{
        poppup.value.classList.remove('active');
    })
})

    return{
        revenues,Busines,revenue,btnCalc,poppup,nation,closeBtn,result,price,Busines,revenue
        
    }

    
    }
}
</script>

<style scoped>
.form-container{
    background-color: var(--color-main);
    padding-top: 3.875vw;
    padding-bottom: 3.875vw;
    padding-left: 3.3125vw;
    width: 87.5vw;
    border-radius: 16px;
    box-shadow: 0px 2px 40px 0px #0A3D670F;

}
label{
    color: #fff;
    font-size: 1.125vw;
}
select{
    color: 
    #C48429;
    font-size: 1.125vw;
    background: transparent;
    outline: none;
    width: 27.5625vw;
    height: 3vw;
    border-radius: 100px;
    border-color: #BABABA;
    padding-left: 1.4375vw;
    padding-top: 0.625vw;
    padding-bottom: 0.625vw;
    padding-right: 1.4375vw;
}
.title{
    color: #fff;
    width: 28.6875vw;
}
.description {
    font-size: 1.125vw;
    color: #fff;
    opacity: 0.7;
    margin-top: 0.8125vw;
    max-width: 73vw;
}
.form-calculate{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin-top: 2.5625vw;
    row-gap: 2.5vw;
}
.form-item {
    display: flex;
    gap: 1.1875vw;
    align-items: center;
}
.company-item {
    display: flex;
    gap:0.3125vw;
}
.form-company-wrap{
    display: flex;
    flex-direction: column;
    gap: 1vw;
}
.form-item:last-child{
    align-items: start;
}
/*poppup*/
.poppup{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 72.4375vw;
    background-color: #fff;
    padding: 3.4375000000000004vw 3.75vw;
   opacity: 0;
   transition: .5s;
   z-index: 100;
   pointer-events: none;
   box-shadow: 0px 0px 15px 0 rgba(0,0,0,0.6);
  
}
.poppup.active{
    opacity: 1;
    transform: translate(-50%, -50%);
    pointer-events: all;

}

.title-poppup{
    font-size: 1.875vw;
    color: var(--color-main);
    font-weight: 800;
    line-height: 2.4375vw;
    text-align-last: center;
}
.dynamic-des{
    font-size: 1.25vw;
    line-height: 1.875vw;
    color: var(--color-main);
    font-weight: 700;
    text-align: center;
    margin-top: 1vw;
}
.price{
    font-size: 3.375vw;
    line-height: 4.125vw;
    background: var(--color-linear);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    text-align-last: center;
}
.poppup-box-content{
    border: 0.125vw solid var(--color-main);
    padding: 0 3vw;
    padding-top: 1.5vw;
    padding-bottom: 2.25vw;
    margin-top: 1vw;
}
.poppup-box-content h4 {
    font-size: 2.25vw;
    text-align-last: center;
    color: var(--color-main);
    width: fit-content;
    border-bottom: 0.0625vw solid var(--color-main);
    padding-bottom: 0.375vw;
    margin: 0 auto;
}
.content-detail{
    font-weight: 500;
    color: #000;
    font-size: 1vw;
    list-style: disc;
    display: flex;
    flex-direction: column;
    gap: 1vw;
}
.btn-group{
    display: flex;
    margin-top: 1.875vw;
    gap: 1.5vw;
    justify-content: center;
}

.btn-call{
    font-size: 1vw;
  color: var(--color-orange);
    height: 3.25vw;

    width: 10.25vw;
    border-radius: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../assets/img/border-linear.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
/*close*/
.close {
    position: absolute;
    right: 2vw;
    top: 2vw;
    width: 3.9375vw;
    height: 3.9375vw;
    border-radius:50%;
    cursor: pointer;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bababa;
    border-radius:50%;
    transition:.5s;
  }
  .close:hover {
   opacity: 1;
  }
  .close:before, .close:after {
    position: absolute;
    left: 50%;
  
   
    content: ' ';
    height: 1.3125vw;
    width: 0.09375vw;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
</style>
