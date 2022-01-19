<template>
  <div class="card-component">
    <div class="card-component-image">
      <img :src="imgSrc" class="img-fluid" :alt="imgAlt" />
    </div>
    <div class="card-component-content">
      <h4>{{ titleCard }}</h4>
      <p>{{ textCard }}</p>
      <ul>
          <li v-for="genere in generes" :key="genere">
              {{genere}}
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    
  //   data() {
  //     return {
  //       titleCard: "Titulo de Tarjeta",
  //     textCard: "Un simple texto de prueba",
  //     imgSrc: "https://missingnumber.com.mx/wp-content/uploads/2018/05/Portada-Red-Dead.jpg",
  //     imgAlt: "Red Dead Redemptions 2"
  //     };
  //   },

  setup() {
    let titleCard = "Titulo de Tarjeta";
    let textCard = "Un simple texto de prueba";
    let imgSrc = "https://missingnumber.com.mx/wp-content/uploads/2018/05/Portada-Red-Dead.jpg";
    let imgAlt = "Red Dead Redemptions 2";
    let generes = ["Action","Adventure","Sandbox","Violence"]
    return { titleCard,textCard,imgSrc,imgAlt,generes };
  }
};
</script>

<style lang="scss">
.card-component {
  border-radius: 12px;
  background-color: #f8f8f8;
  margin: 10px;
  width: 100%;
  display: flex;
  overflow: hidden;
  .card-component-image {
    overflow: hidden;
    height: 100%;
    width: 100%;
    max-width: 200px;
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
    width: 100%;
    }
  }
  .card-component-content {
    padding: 10px 20px 0px 20px;
    h4 {
      font-size: 21px;
      font-weight: 600;
      color: #3fb983;
    }
    p {
      font-size: 14px;
    }
    ul li{
        font-size: 10px;
    }
  }
}
</style>
