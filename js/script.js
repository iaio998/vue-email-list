const { createApp } = Vue;

const miaApp = createApp({
  data() {
    return {
      numbers: [],
      word: "",
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/int")
        .then((resp) => {
          console.log(resp.data.response);
          this.numbers.push(resp.data.response);
        });
    }
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/word")
      .then((resp) => {
        console.log(resp.data.response);
        this.word = resp.data.response;
      });
  },
}).mount("#app");
