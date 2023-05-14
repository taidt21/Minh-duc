<template>
  <div class="procedures">
    <div class="procedure-item">
        <div class="procedure-number">
            <div class="number">01</div>
        </div>
        <p class="procedure-text">Kiểm tra tính hợp lệ của hóa đơn đầu vào , đầu ra</p>
    </div>
    <div class="procedure-item">
        <div class="procedure-number">
            <div class="number">02</div>
        </div>
        <p class="procedure-text">Kiểm tra, soát xét hồ sơ hoàn thuế GTGT.</p>
    </div>
    <div class="procedure-item">
        <div class="procedure-number">
            <div class="number">02</div>
        </div>
        <p class="procedure-text">Kiểm tra, soát xét hồ sơ hoàn thuế GTGT.</p>
    </div>
    <div class="procedure-item">
        <div class="procedure-number">
            <div class="number">02</div>
        </div>
        <p class="procedure-text">Kiểm tra, soát xét hồ sơ hoàn thuế GTGT.</p>
    </div>
    <div class="procedure-item">
        <div class="procedure-number">
            <div class="number">02</div>
        </div>
        <p class="procedure-text">Kiểm tra, soát xét hồ sơ hoàn thuế GTGT.</p>
    </div>
    <div class="procedure-item">
        <div class="procedure-number">
            <div class="number">02</div>
        </div>
        <p class="procedure-text">Kiểm tra, soát xét hồ sơ hoàn thuế GTGT.</p>
    </div>
    <div class="procedure-item">
        <div class="procedure-number">
            <div class="number">02</div>
        </div>
        <p class="procedure-text">Kiểm tra, soát xét hồ sơ hoàn thuế GTGT.</p>
    </div>
    <div class="procedure-item">
        <div class="procedure-number">
            <div class="number">02</div>
        </div>
        <p class="procedure-text">Kiểm tra, soát xét hồ sơ hoàn thuế GTGT.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.procedures{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    row-gap: 6.25vw;
}

.procedure-text{
    font-size: 1vw;
    
    font-weight: 500;

    width: 13vw;
    margin: auto;
    text-align: center;
    margin-top: 1.5vw;
    color: #555;
}
.procedure-number{
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    border: 1px dotted var(--color-main);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
}
.number{
    width: 4.875vw;
    height: 4.875vw;
    border-radius: 50%;
    background: var(--color-main);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2vw;
    
    font-weight: 800;
}
.procedure-item:hover .number{
    background: var(--color-linear);
}
.procedure-item:hover .procedure-text{
    background:var(--color-linear);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
}
.procedure-item:hover  .procedure-number{
    border-color: var(--color-orange);
}
.procedure-number::before{
    
    content:"";
    width: 8.8125vw;
    display: block;
    border-top: 1px dashed var(--color-main);
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left: calc(-100% - 3.5vw);

}
.procedure-item:first-child .procedure-number::before,
.procedure-item:nth-child(5n) .procedure-number::before{
    content: none;
}
</style>