<template>
  <div class="page">
    <slider class="slider">
      <div class="slider-item" v-for="(img, imgIdx) in imageList" >
        <image class="slider-item-img" :src="img.src"></image>

        <!--btn bar-->
        <div class="btn-bar" @click="onStartBtnClick">
          <button v-if="imgIdx+1 === imageList.length" size="middle" value="立即体验"/>
        </div>

      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<style>
  .page {
    /*flex: 1;*/
    /*background-color: blue;*/
  }

  .slider {
    /*background-color: #ff416c;*/
    flex: 1;
    align-items: stretch;
  }

  .slider-item {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    background-color: #726c71;
  }

  .slider-item-img {
    /*width: 300px;*/
    /*height: 200px;*/
    flex: 1;
    resize: cover;
    background-color: #000;
  }

  .indicator {
    /*background-color: #000000;*/
    item-color: #DADCDC;
    item-selected-color: #76a818;
    item-size: 20px;
    height: 20px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    position: absolute;
  }

  .btn-bar {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 80px;
    /*background-color: brown;*/
    align-items: center;
  }

</style>

<script>
  const modal = weex.requireModule('modal');
  const navigator = weex.requireModule('navigator');

  const button = require('weex-vue-components/button');

  export default {

    data () {
      return {
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'},
        ],
      }
    },

    methods: {
      onSlideChanged(evt) {
        modal.alert({message: JSON.stringify(evt)})
      },

      onStartBtnClick() {
        navigator.push({
        	url: 'http://192.168.43.182:8080/dist/home.js',
          animated: false
        })
      }
    },

    components: {
      button
    }
  }
</script>
