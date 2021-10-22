<template>
   <div id="app">
      <div class="ui fixed inverted menu vue-color">
      <div class="ui container">
        <a href="#" class="header item">Bharat's Vue Js CRUD with API & login page</a>
      </div>
    </div>
   </div>
  <router-view/>
</template>
<style>
.vue-color {
  background: #41b883 !important;
}

.main.container {
  margin-top: 60px;
}

.submit-button {
  margin-top: 24px !important;
  float: right;   
}

.data {
  margin-top: 15px;
}

thead tr th {
  background: #e0e0e0 !important;
}

.ui.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>
