<template>
  <div class="card-component">
    <div class="card-component-image">
      <img :src="imgSrc" class="img-fluid" :alt="imgAlt" />
    </div>
    <div class="card-component-content">
      <h4>{{ titleCard }}</h4>
      <p>{{ textCard }}</p>
      <ul>
        <li v-for="(genere, idx) in generes" :key="idx">
          {{ genere }} <span class="plus" v-if="genere == 'Violence'">+18</span>
        </li>
      </ul>
      <div class="card-button">
        <funButton
          nameButton="Touch me"
          :accion="actionButton"
        ></funButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mostrar } from "@/logic/code";
import FunButton from "@/components/FunButton";
export default {
  components: { FunButton },

  //   data() {
  //     return {
  //       titleCard: "Titulo de Tarjeta",
  //     textCard: "Un simple texto de prueba",
  //     imgSrc: "https://missingnumber.com.mx/wp-content/uploads/2018/05/Portada-Red-Dead.jpg",
  //     imgAlt: "Red Dead Redemptions 2"
  //     };
  //   },
  props: {
    titleCard: String,
    textCard: String,
    imgSrc: String,
    imgAlt: String,
    generes: Array,
  },
  setup(props) {
    let titleCard = props.titleCard;
    let textCard = props.textCard;
    let imgSrc = props.imgSrc;
    let imgAlt = props.imgAlt;
    let generes = props.generes;

    const actionButton = () => {
      mostrar(48, 95);
    };

    return {
      titleCard,
      textCard,
      imgSrc,
      imgAlt,
      generes,
      actionButton,
    };
  },
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
    position: relative;
    width: 100%;
    padding: 30px 20px 0px 30px;
    h4 {
      font-size: 21px;
      font-weight: 600;
      color: #3fb983;
    }
    p {
      font-size: 12px;
      font-weight: 300;
    }
    ul li {
      font-size: 10px;
      .plus {
        font-weight: 800;
        color: red;
      }
    }
    .card-button {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
