const mixinComponent = {
  methods: {
    getSingleQuery (target, number) {
      this.$http.get(`http://localhost:4824/api/${target}/`, { params: { id: number } })
        .then((res) => {
          return res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSinglePokemonByName (name) {
      this.$http.get('http://localhost:4824/api/pokemon/name', { params: { name: name } })
        .then((res) => {
          if (!this.$data.infoSelect) {
            res.body.query = 'pokemon';
            this.$data.infoSelect = res.body;
            this.$data.moreInfo = true;
          } else if (this.$data.infoSelect.name !== res.body.name) {
            res.body.query = 'pokemon';
            this.$data.infoSelect = res.body;
            this.$data.moreInfo = true;
          } else {
            this.$data.moreInfo = null;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSingleMoveByName (name) {
      this.$http.get('http://localhost:4824/api/move/name', { params: { name: name } })
        .then((res) => {
          if (!this.$data.infoSelect) {
            res.body.query = 'move';
            this.$data.infoSelect = res.body;
            this.$data.moreInfo = true;
          } else if (this.$data.infoSelect.name !== res.body.name) {
            res.body.query = 'move';
            this.$data.infoSelect = res.body;
            this.$data.moreInfo = true;
          } else {
            this.$data.moreInfo = null;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};

export default mixinComponent;