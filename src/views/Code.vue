<template>
  <div id="code">
    <div id="text">
      <p>When I started my program at BYU I knew a little code, but the program has extended my knowledge and continues to push me to keep learning and mastering my abilities. I am currently working in C++, HTML, CSS, and JavaScript. I am learning about data structures in code, implementing pointers to make code  more effecient, and my favorite project right now is this website!</p>
    </div>
    <div id="projectscont">
      <p>Here are some of my projects!</p>
      <div id="projects">
        <div class="projects"><a href="http://grocerystore.kearlyfrycreations.com">Model Grocery Store</a></div>
        <div class="projects"><a href="http://lab2.kearlyfrycreations.com">Weather API</a></div>
        <div class="projects"><a href="http://lab3a.kearlyfrycreations.com">Comics with Comments and Ratings</a></div>
        <div class="projects"><a href="https://github.com/chancekearl">Github</a></div>
        <div class="projects"><a href="http://lab1.kearlyfrycreations.com">Photography Site</a></div>
        <div class="projects"><a href="http://cp2.kearlyfrycreations.com">Money Exchagne API</a></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #code {
    display: flex;
    margin: 0 15%;
  }
  #text, #projectscont {
    flex: 1;
    padding: 15px;
  }
  #text {
    color: #8EE4AF;
  }
  #projectscont {
    background-color: #8EE4AF;
    opacity: 0.9;
  }
  #projectscont p {
    background-color: #8EE4AF;
    color: #05386B;
    text-decoration: underline;
  }
  #projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 80%;
  }
  .projects {
    width: 50%;
    background-color: #8EE4AF;
  }
  a {
    color: #05386B;
  }
  a:hover {
    color: #05386B;
  }
  @media (max-width: 768px) {
    #code {
      flex-direction: column;
    }
    .projects {
      padding: 3px 0;
    }
  }
</style>
<script>

</script>