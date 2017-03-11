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
          res.body.query = 'pokemon';
          this.$parent.$emit('selected', res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSingleMoveByName (name) {
      this.$http.get('http://localhost:4824/api/move/name', { params: { name: name } })
        .then((res) => {
          res.body.query = 'move';
          this.$parent.$emit('selected', res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};

export default mixinComponent;