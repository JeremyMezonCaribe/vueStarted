<template>
  <button @click="accion" class="btn boton">{{nameButton}}</button>
</template>

<script>
export default { 

  //Metodo API Options

  /*data() {
    return {
      nameButton: "Touch me",
    };
  },
  methods: {
    //Declaracion de una funcion normal
    showMessage1(a, b) {
      return a < b
        ? console.log(`${a} es menor que ${b}`)
        : console.log(`${b} es menor que ${a}`);
    },
    //Declaracion de una funcion desde un codigo JS
    showMessage2() {
      mostrar(48, 92);
    },

    //Declaracion una funcion como objeto
    showMessage3: () => {
      mostrar(48, 92);
    },
  },*/

  //Metodo API Composition
  props: {
    nameButton: String,
    accion: Function,
  },
  setup(props){
    let nameButton = props.nameButton;
    return {nameButton}
  }
};
</script>

<style lang="scss">
.boton {
  padding: 5px 20px;
  background-color: #35495e;
  color: white;
  font-size: 12px;
  &:hover {
    color: #35495e;
    background-color: #c8dbf0;
  }
}
</style>
