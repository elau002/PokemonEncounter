const mixinComponent = {
  methods: {
    getSingleQuery: function (target, number) {
      this.$http.get(`http://localhost:4824/api/${target}/`, { params: { id: number } })
        .then((res) => {
          console.log(res.body);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};

export default mixinComponent;