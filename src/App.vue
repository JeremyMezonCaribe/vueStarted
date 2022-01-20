<template>
  <section class="sec-heading d-flex d-center">
    <div class="container text-center">
      <h1>Learning <span>Vue JS</span></h1>
    </div>
  </section>
  <section class="sec-cards">
    <div class="container">
      <h2 class="title-container">Game List</h2>
      <div class="grid-cards">
        <template v-for="(game,idx) in gameList" :key="idx">
          <Card 
            :titleCard=game.titleCard
            :imgSrc=game.imgSrc
            :imgAlt=game.imgAlt
            :textCard=game.textCard
            :generes=game.generes
          />
        </template>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <h3>List of Characters (Rick and Morty)</h3>
      <div class="grid-cards">
        
          <template v-for="character in listData" :key="character.id">+
          <Card 
            :titleCard=character.name
            :imgSrc=character.image
            :imgAlt=character.species
            :textCard=character.status
            :generes="[character.gender,character.origin.name]"
          />
        </template>
        
        
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card';
import FunButton from '@/components/FunButton';
import { games } from '@/logic/code';
import axios from "axios";
import { onMounted, ref } from 'vue';

export default {
  components: { Card,FunButton },
  setup(){
    let gameList = games();
    let listData = ref([]);
    // let isData = ref(false);
    onMounted(async () => {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      listData.value = res.data.results;
      console.log(res.data);
    });
  
    return{gameList,listData};
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

  body{
    font-family: 'Lato', sans-serif;
  }

  .sec-heading{
    width: 100%;
    min-height: 400px;
    position: relative;
    background-color: #35495E;
    h1{
      
      font-weight: 300;
      color: white;
      font-size: 64px;
      span{
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }

  .title-container{
    font-size: 46px;
    font-weight: 800;
    color: #35495E;
    margin-bottom: 70px;
  }

  .sec-cards{
    padding: 100px 0;
  }

  .grid-cards{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 20px;
  }

  .d-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
