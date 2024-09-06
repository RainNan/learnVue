<template>
    <div>
      hello {{ name }} is a/an {{ age >= 18 ? 'adult' : 'youngster' }}<br>
      10+5={{ add(10, 5) }}<br>
      <input type="text" v-bind:value="name"><br>
      <input type="url" :value="url" size="90px"><br>
      <input type="button" value="click me to add 1" @click="clickToAddOne"> =>
      <input type="text" :value="sum" size="1px"><br>
      data(){age: {{ age }}}
      <input type="text" v-model="age"><br>
      <input type="button" value="get status" @click="sendRequest()">
      {{ responseData }}<br>
      <input type="button" value="get token" @click="getToken()">
      <input type="text" v-model="token" size="114px"><br><br>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        name: 'wyn',
        age: 24,
        url: 'https://www.bilibili.com/video/BV1TP411v7v6?p=173&vd_source=03e6715a501abcf7a961b0266e94d6d4',
        sum: 0,
        responseData: null,
        token: null
      };
    },
    methods: {
      add(a, b) {
        return a + b;
      },
      clickToAddOne() {
        this.sum += 1;
      },
      goBackToTheSummer() {
        this.age = 17;
      },
      sendRequest() {
        axios.get('/api/user/shop/status')
          .then(response => {
            console.log(response.data);
            this.responseData = response.data;
          })
          .catch(error => {
            console.error('Error:', error);
          });
      },
      getToken() {
        axios.post('/api/login', {
          'username': 'admin',
          'password': 123456
        }).then(res => {
          this.token = res.data.data.token;
        })
      }
    }
  }
  </script>
  
  <style></style>
  