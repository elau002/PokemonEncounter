const mixinComponent = {
  methods: {
    getSingleQuery: (http, target, number, data)=> {
      http.get(`http://localhost:4824/api/${target}/`, { params: { id: number } })
        .then((res) => {
          return res.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSinglePokemonByName: (http, name, data)=> {
      http.get('http://localhost:4824/api/pokemon/name', { params: { name: name } })
        .then((res) => {
          if (!data.infoSelect) {
            res.body.query = 'pokemon';
            data.infoSelect = res.body;
            data.moreInfo = true;
          } else if (data.infoSelect.name !== res.body.name) {
            res.body.query = 'pokemon';
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
    getSingleMoveByName: (http, name, data)=> {
      http.get('http://localhost:4824/api/move/name', { params: { name: name } })
        .then((res) => {
          if (!data.infoSelect) {
            res.body.query = 'move';
            data.infoSelect = res.body;
            data.moreInfo = true;
          } else if (data.infoSelect.name !== res.body.name) {
            res.body.query = 'move';
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