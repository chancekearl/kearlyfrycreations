<template>
  <div class="home">
    <h1>Kearlyfry Creations</h1>
    <div class="welcome-cont">
      <img id="img" alt="My wife and I" src="../assets/home.jpg" />
      <div class="welcome">
        <p> My name is Chance, and welcome to my portfolio! I am from Ogden, Utah and am currently a student at BYU, studying computer science. I hope to use my life experiences to tell stories and create lovable characters in the animation industry. Some of the things I am most proud of are; living in England for two years as a missionary, receiving my eagle scout, having above a 3.5 GPA every semester, and always being able to create new relationships with people I meet. If we are talking about soccer, Disney, or anything animation, and England I could talk forever! My inbox is always open for any of those topics! Oh, and I guess I should say anything business related as well!</p>
      </div>
    </div>
    <div class="work">
      <p>Work Experience</p>
      <p>I am currenty working in the Audio Visual department at the Missionary Training Center in Provo, UT. My job has taught me a lot, my assignments range from backend server work and routing to running meetings and devotionals behind the scenes. I operate cameras, sound mixers, run lights, and have a lot of other resposibilities. </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {

  }
};
</script>
<style scoped>
  .home h1 {
    font-family: Trebuchet ms, sans-serif;
    color: #5CDB95;
    font-size: 60px;
  }
  .welcome-cont {
    display: flex;
    padding: 10px;
  }
  .welcome {
    display: flex;
    justify-content: center;
    width: 50%;
    height: auto;
    background-color: #5CDB95;
    opacity: 0.8;
    margin: 10px;
  }
  .welcome p{
    padding: 15% 20px;
    background-color: #5CDB95;
    color: #05386B;
    font-family: Helvetica Neue, sans-serif;
    font-size: 16px;
    line-height: 35px;
    margin: 0 0 24px;
    text-align: justify;
    text-justify: inter-word;
  }
  #img {
    width: 50%;
    height: auto;
    padding: 10px;
  }
  .welcome h4{
    font-size: 20px;
  }
  .work {
    color: #8EE4AF;
    width: 45%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    .welcome-cont {
      flex-direction: column;
    }
    #img {
      width: 100%;
    }
    .welcome {
      width: 100%;
      margin-right: 20px;
    }
  }
</style>