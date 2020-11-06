<template>
  <div id="art">
    <h2>Welcome to my Artistic Side</h2>

  <div id="image-cont">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #000;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <b-carousel-slide v-for="image in imagesArray" v-bind:key="image.id" :img-src="require('@/assets/'+image.name)"></b-carousel-slide>
    </b-carousel>
  </div>
  <div id="youtube">
    <div id="title">
      <h4>Check out this flour sack animation!</h4>
    </div>
    <div id="link">
      <a href="https://www.youtube.com/watch?v=9r_gPhbdYEs&ab_channel=kearlyfry"><img src="@/assets/animation.png"></a>
    </div>
  </div>

  </div>
</template>

<style scoped>
@import url(//db.onlinewebfonts.com/c/4a2665caf529fc181b0330d0ce998789?family=Jack+Armstrong);
#image-cont {
  width: 60%;
  margin: 0 auto;
}
#image-cont img{

}
#art {
  display: flex;
  flex-direction: column;
  font-family: "Jack Armstrong";
  color: #f6f6f6;
}
#link img {
  width: 20%;
}
#youtube {
  margin: 20px 0;
}
#title , h2 {
  color: #8EE4AF;
}
</style>

<script>
export default {
  name: 'Art',
  props: {
    images: Array,
  },
  computed: {
    imagesArray() {
      return this.$root.$data.images;
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>