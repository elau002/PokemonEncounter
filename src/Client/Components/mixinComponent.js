const mixinComponent = {
  methods: {
    getSingleQuery: (http, target, number, data)=> {
      http.get(`http://localhost:4824/api/${target}/`, { params: { id: number } })
        .then((res) => {
          if (data) {
            if (!data.infoSelect) {
              res.body.query = target;
              data.infoSelect = res.body;
              data.moreInfo = true;
            } else if (data.infoSelect.name !== res.body.name) {
              res.body.query = target;
              data.infoSelect = res.body;
              data.moreInfo = true;
            } else {
              data.moreInfo = null;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSinglePokemonByName: (http, name, data)=> {
      http.get('http://localhost:4824/api/pokemon/name', { params: { name: name } })
        .then((res) => {
          if (data) {
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
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};

export default mixinComponent;