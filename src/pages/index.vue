<template>
  <div class="index">
    <div class="top_banner">
           dabing design
    </div>
     <div class="tite">
        道路设计
     </div>
     <div class="pic_list">
       <div class="inner_list">
         <image src="./img/road1.jpg" mode="scaleToFill" />
       </div>
       <div class="inner_list">
         <image src="./img/road2.jpg" mode="scaleToFill"/>
       </div>
     </div>
     <div class="pic_list">
       <div class="inner_list">
         <image src="./img/road3.jpg" mode="scaleToFill" />
       </div>
       <div class="inner_list">
         <image src="./img/road2.jpg" mode="scaleToFill"/>
       </div>
     </div>

  </div>
</template>

<script>
export default {
  mpType: "page",
  data() {
    return {

    };
  },
  methods: {
    
  },

};
</script>

<style lang="scss">
.index{
  height: 100%;
  width: 100%;
  background: black;
  .top_banner{
    height: 70px;
    width: 100%;
    background: black;
    color: white;
    font-size: 23px;
    text-align: center;
    line-height: 70px;
    border-bottom: 1px solid white;
  }
  .tite{
    color: white;
    font-size: 16px;
    padding: 10px 0;
    padding-left: 15px;
  }
  .pic_list{
    display: flex;
    flex-direction:row;
    padding: 0 10px;
    margin-bottom: 10px;
    .inner_list{
      width: 50%;
      padding: 0 10px;
      box-sizing: border-box;
      image{
        width: 100%;
        height: 100px;
      }
    }
  }
}


</style>
