<template>
  <div id="sidebar">
    <div class="contactsdiv">
      <div class="facebook"><a href="https://www.facebook.com/chancekearl"><img class="facebook-img" src="@/assets/facebook.png"></a></div>
      <div class="instagram"><a href="https://www.instagram.com/kearlyfry"><img class="instagram-img" src="@/assets/instagram.png"></a></div>
      <div class="linkedin"><a href="https://www.linkedin.com/in/chancekearl/"><img class="linkedin-img" src="@/assets/linkedin.png"></a></div>
      <div class="github"><a href="https://github.com/chancekearl"><img class="github-img" src="@/assets/github.png"></a></div>
      <div class="youtube"><a href="https://www.youtube.com/channel/UC9uCBzRYEH48ASpg1dRjc4g"><img class="youtube-img" src="@/assets/youtube.png"></a></div>
      <div class="repository"><a href="https://github.com/chancekearl/kearlyfrycreations.git">Repository</a></div>
    </div>

    <div id="app">
      <div id="nav">
        <img class="headshot" alt="headshot" src="@/assets/headshot.png" />
          <div id="links">
            <p><router-link class="link" to="/code">Code</router-link> | <router-link class="link" to="/">Home</router-link> | <router-link class="link" to="/about">Art</router-link> </p>
          </div>
        </div>
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  background-color: #05386B;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.contactsdiv {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:  5px;
  height: 100%;
  background-color: #5CDB95;
  opacity: 0.8;
}
.facebook img, .instagram img, .linkedin img, .github img, .youtube img{
  width: 30px;
  margin: 20px 0;
  background-color: #5CDB95;
}
.facebook, .instagram, .linkedin, .github, .youtube {
  background-color: #5CDB95;
}
.headshot {
  margin-bottom: 10px;
  width: 115px;
  height: auto;
  border: 1px solid #EDF5E1;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 15px;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.link {
  font-weight: bold;
  color: #EDF5E1;
}
.link:hover {
  text-decoration: none;
  color: #8EE4AF;
}
#links {
  color: #5CDB95;
}
#nav a.router-link-exact-active {
  color: #5CDB95;
  text-decoration: none;
}
.repository {
  position: fixed;
  bottom: 10%;
  left: 25px;
  transform: rotate(90deg);
  transform-origin: left top 0;
  background-color: #5CDB95;
}
.repository a {
  color: #05386B;
}
.repository a:hover {
   color: #05386B;
 }
@media (max-width: 768px) {
  .facebook img, .instagram img, .linkedin img, .github img, .youtube img{
    width: 20px;
    margin: 20px 0;
  }
  .contactsdiv {
    padding: 3px;
  }
}
</style>
