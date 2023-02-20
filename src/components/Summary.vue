<script setup></script>

<template>
  <div class="summaryProfile">
    <div class="summary">
      <div class="sumTitle">
        <h2>Informations</h2>
      </div>
      <div class="profileTab">
        <article>
          <h3>Profile</h3>
          <section>
            <table class="table profileMainInfos">
              <tbody>
                <tr>
                  <td>Marc</td>
                  <td>First name</td>
                </tr>
                <tr>
                  <td>Doln</td>
                  <td>Last name</td>
                </tr>
                <tr>
                  <td>Marc.Doln@gmail.com</td>
                  <td>Email</td>
                </tr>
                <tr>
                  <td>England</td>
                  <td>Country</td>
                </tr>
              </tbody>
            </table>
          </section>
          <div class="modifyBtn">
            <button>Modify</button>
          </div>
        </article>
        <div class="titleBeforeBox">
          <h3>Your subscription</h3>
        </div>
        <div class="box">
          <div class="upperBox">
            <h1>Musik Free version</h1>
          </div>

          <div class="botBox">
            <p>
              You can listen to music only with random playback and with
              commercial breaks.
            </p>
            <h3>Free</h3>
          </div>
        </div>
      </div>
      <div class="textAfterProfile">
        <h3>Sign out everywhere</h3>
        <p>
          Sign out everywhere This will sign you out everywhere you're signed
          into Spotify, including smartphones, tablets, web players, and desktop
          apps. This does not include partner devices (e.g. speakers, game
          consoles, and TVs). To do this, you'll need to go to your app page and
          select
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.summary {
  padding: 16px 16px;
  color: white;
}
.profileMainInfos {
  max-inline-size: 100%;
  inline-size: 100%;
  text-align: start;
  border-collapse: collapse;
  overflow-wrap: break-word;
  border-collapse: collapse;
}

.trBorder {
  border-bottom: solid 1 px #dedede;
}
tbody {
  border-collapse: collapse;
  color: white;
}

.modifyBtn button {
  border-radius: 30px;
  width: 50%;
}

.modifyBtn {
  display: flex;
  margin-bottom: 30px;
}

.titleBeforeBox {
  margin-bottom: 20px;
}
.box {
  width: 90%;
  background-color: #84319b;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: rgba(95, 20, 120, 0.51) 0px 2px 10px;
}

.upperBox {
  display: flex;
  height: 144px;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
}

.botBox {
  padding: 16px;
  height: 144px;
  background-color: white;
  color: black;
  font-weight: 600;
  border-radius: 0px 0px 10px 10px;
}

.textAfterProfile h3 {
  margin-bottom: 30px;
}

.textAfterProfile {
  margin-bottom: 100px;
}

@media screen and (min-width: 1200px) {
  .accountContent {
    width: 60%;
  }
}

@media screen and(max-width:600px) {
  .modifyBtn {
    width: 80%;
  }
  .modifyBtn button {
    width: 100%;
  }
}
</style>
