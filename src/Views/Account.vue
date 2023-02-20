<script setup>
import { useRouter, RouterLink, RouterView } from "vue-router";
import profileSideNav from "../components/profileSideNav.vue";
import { ref } from "vue";
import { useProfileStore } from "@/stores/profile";
import Summary from "../components/Summary.vue";
import Notifications from "../components/Notifications.vue";
import Apps from "../components/Apps.vue";
const id = ref("");
const profile = useProfileStore();

const router = useRouter();

function subMenu(value) {
  this.id = value;
}

const goToHome = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <div class="topBar">
    <div class="topLogo">
      <img src="../assets/Logo.png" alt="Musick Logo" @click="goToHome" />
    </div>
    <div class="topIcons">
      <button class="btn px-1 py-0 open btn" @click="toggleMenu">
        <fas icon="fa-solid fa-stream" size="2x" />
      </button>
    </div>
  </div>
  <div class="accountContainer">
    <div class="accountContent">
      <div class="bannerContainer">
        <div class="ad">
          <div class="TextA">
            <h1>Two months free for one purchased!</h1>
            <div class="btna">
              <button class="btnAd">Read more</button>
              <button class="btnAd">I'm in!</button>
            </div>
          </div>
          <div class="imgAd">
            <img src="../assets/DIsney.png" alt="" />
          </div>
        </div>
      </div>
      <div class="afterBanner">
        <profileSideNav />
        <div class="upperSidebar">
          <ul>
            <li @click="subMenu('Summary')">Summary</li>
            <li @click="subMenu('Notification')">Notifications</li>
            <li @click="subMenu('Apps')">Apps</li>
          </ul>
        </div>
        <div class="Infos">
          <Summary
            v-if="
              (profile.id == 'Summary' && profile.loading == false) ||
              id == 'Summary'
            "
          />
          <Notifications
            v-if="
              (profile.id == 'Notifications' && profile.loading == false) ||
              id == 'Notification'
            "
          />
          <Apps
            v-if="
              (profile.id == 'Apps' && profile.loading == false) || id == 'Apps'
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.topBar {
  width: 100%;
  height: 80px;
  background: #000000;
  display: flex;
  justify-content: space-evenly;
}
.topLogo img {
  width: 80px;
  cursor: pointer;
}
.topIcons {
  display: flex;
  color: #ffffff;
}
.btn {
  color: #ffffff;
}

.accountContainer {
  width: 100%;
  height: 100vh;
  background: linear-gradient(360deg, #000000 10%, #632673 35%, #84319b 100%);
  display: flex;
  justify-content: space-around;
}

.accountContent {
  overflow-y: scroll;
  width: 80%;
  background-color: #323131;
}

.bannerContainer {
  display: flex;
  background-color: rgb(77, 69, 70);
  flex-direction: row;
  padding: 64px 44px;
  margin-bottom: 80px;
}
.ad {
  display: flex;
}
.TextA {
  width: 100%;
}

.TextA h1 {
  font-weight: 900;
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.btna {
  display: flex;
}
.btnAd {
  border-radius: 15px;
  background-color: #84319b;
  width: 30%;
}

.imgAd {
  padding: 34px;
}
.imgAd img {
  width: 100%;
  border-radius: 15px 15px 0px 0px;
}

.afterBanner {
  display: flex;
}

.Infos {
  width: 100%;
}
.upperSidebar {
  display: none;
  height: 30px;
}

.upperSidebar ul {
  height: 30px;
}

.upperSidebar li {
  display: inline;
  margin-left: 20px;
  margin-right: 20px;
}

@media screen and (max-width: 1300px) {
  .ad {
    flex-direction: column;
  }
}

@media screen and (max-width: 767px) {
  .accountContent {
    width: 100%;
  }
  .upperSidebar {
    display: block;
    width: 50%;
  }

  .upperSidebar ul {
    width: 160%;
    text-align: center;
    overflow-x: scroll;
  }
  .upperSidebar ul::-webkit-scrollbar {
    display: none;
  }
  .btna {
    display: block;
    width: 100%;
  }
  .btna button {
    width: 70%;
  }
  .imgAd {
    padding: 0;
  }
  .bannerContainer {
    padding: 0;
  }
  .afterBanner {
    display: block;
  }
}
</style>
