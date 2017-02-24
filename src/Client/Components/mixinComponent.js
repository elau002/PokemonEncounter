const mixinComponent = {
  methods: {
    getSingleQuery: function (target, number, data) {
      this.$http.get(`http://localhost:4824/api/${target}/`, { params: { id: number } })
        .then((res) => {
          if (!data.infoSelect) {
            data.infoSelect = res.body;
            data.moreInfo = true;
          } else if (data.infoSelect.name !== res.body.name) {
            data.infoSelect = res.body;
            data.moreInfo = true;
          } else {
            data.moreInfo = null;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};

export default mixinComponent;