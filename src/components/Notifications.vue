<script setup></script>
<template>
  <div class="notificationsTitle">
    <h1>Notifications</h1>
  </div>
  <div class="form">
    <div class="formTitle"></div>

    <div class="Check-List">
      <h2>Notifications type</h2>
      <fas icon="fa-solid fa-envelope" size="2x" />
      <fas icon="fa-solid fa-mobile" size="2x" />
      <p>
        Music and artist recommendations<br />
        Music and new releases from artists you follow or might like
      </p>
      <input type="checkbox" /> <input type="checkbox" />

      <p>
        Podcasts and Shows Recommendations Podcasts and shows you might like
      </p>
      <input type="checkbox" /> <input type="checkbox" />

      <p>
        Audiobooks<br />
        Audiobooks by authors you follow or might like
      </p>
      <input type="checkbox" /> <input type="checkbox" />

      <p>
        Live concerts and events<br />
        News about personal events you might like
      </p>
      <input type="checkbox" /> <input type="checkbox" />

      <p>
        Livestreams and virtual events<br />
        News about virtual events you might like
      </p>
      <input type="checkbox" /> <input type="checkbox" />

      <p>
        Spotify Features and Tips<br />
        News and tips on how to get the most out of Spotify services
      </p>
      <input type="checkbox" /> <input type="checkbox" />

      <p>
        News and cultural events<br />
        Notifications about news, social issues and other important events
      </p>
      <input type="checkbox" /> <input type="checkbox" />
    </div>
  </div>
</template>
<style>
.notificationsTitle {
  text-align: center;
  margin-top: 30px;
}

.Check-List {
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 75px 75px;
  padding: 34px 34px;
  color: white;
}
.Check {
  width: 30%;
}
.Check-List svg {
  margin-left: 20px;
  color: #632673;
}
</style>
