const { createApp } = Vue;

const miaApp = createApp({
  data() {
    return {
      mails: [],
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((el) => {
          console.log(el.data.response);
          this.mails.push(el.data.response);
        });
    }
  },
}).mount("#app");
