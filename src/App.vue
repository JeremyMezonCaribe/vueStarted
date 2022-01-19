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
        <Card 
        title="Red Dead Redemption"
        imgSrc="https://missingnumber.com.mx/wp-content/uploads/2018/05/Portada-Red-Dead.jpg"
        imgAlt="Red Dead"
        text="Prueba"
        />
        <Card></Card>
        <Card></Card>
      </div>
      
    </div>
    
  </section>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: { Card },

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
