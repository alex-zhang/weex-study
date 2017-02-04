<template>
</template>

<script>
//  const modal = weex.requireModule('modal');
  const navigator = weex.requireModule('navigator');

  //logic here.
//  modal.toast({message: 'hello alex init'});
//  navigator.pop();
  navigator.push({
  	url: 'http://192.168.43.182:8080/dist/bootstrap.js',
    animated: false
  });
</script>
