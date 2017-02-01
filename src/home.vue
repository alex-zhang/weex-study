<template>
  <div>
    <text>{{title}}</text>
  </div>
</template>

<style>
  .title {font-size: 12px;}
</style>

<script>
  import modal from '@weex-module/modal'

  export default {
    data () {
//      modal.toast({
//        message: 'data'
//      });

      return {
        title: '======>' + modal
      }
    },

//  	beforeCreate() {
//      modal.toast({
//      	message: 'beforeCreate1'
//      });
//    },
//
//    created () {
//      modal.toast({
//        message: 'created'
//      });
//    },
//
//    mounted () {
//      modal.toast({
//        message: 'mounted'
//      });
//    },
//
//    beforeUpdate() {
//      modal.toast({
//        message: 'beforeUpdate'
//      });
//    },
//
//    updated() {
//      modal.toast({
//        message: 'updated'
//      });
//    }
  }
</script>
