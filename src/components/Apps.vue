<script setup>
import { accountApp } from "../utils/utils.vue";
</script>
<template>
  <div class="appSection">
    <div class="appTitle">
      <h1>Manage apps</h1>
    </div>
    <div class="appFirstText">
      <p>
        You have granted these apps access to your Spotify account. To prevent
        them from accessing your account in the future, click "Remove access".
      </p>
    </div>
    <div class="linkedApp" v-for="app in accountApp">
      <div class="App">
        <div class="appDesc">
          <h5>{{ app.name }}</h5>
          <p>{{ app.desc }}</p>
          <div class="appbtn">
            <button>Unlink app</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.appSection {
  padding: 34px 34px;
}

.appTitle {
  margin-top: 30px;
  margin-bottom: 50px;
}

.appFirstText {
  margin-bottom: 30px;
  color: white;
  font-size: 20px;
}

.App {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background-color: #232323;
  color: white;
  border-radius: 15px;
}
.linkedApp {
  display: grid;
  width: 80%;
}

.appDesc {
  padding: 34px 34px;
}
.appbtn {
  width: 100%;
}

.appbtn button {
  width: 20%;
  border-radius: 30px;
  background-color: #84319b;
}

@media screen and (max-width: 1260px) {
  .appbtn button {
    width: 50%;
  }
}

@media screen and (max-width: 820px) {
  .linkedApp {
    width: 100%;
  }
  .appbtn button {
    width: 100%;
  }
}
</style>
