import { Configuration, AuthentificationApi, LinkApi, StatsApi } from "urlr-js"

// Authentification

const authentificationApi = new AuthentificationApi();
authentificationApi.authentification({
  authentificationRequest: {
    username: '',
    password: ''
  }
}).then(function (data) {
  const configuration = new Configuration({ accessToken: data.token });

  // Link shortening

  const linkApi = new LinkApi(configuration);
  linkApi.reduceLink({
    reduceLinkRequest: {
      url: '',
      team: ''
    }
  }).then(function (data) {
    console.log(data)
  }).catch((error) => console.error(error));

  // Statistics

  const statsApi = new StatsApi(configuration);
  statsApi.stats({
    statsRequest: {
      'code': ''
    }
  }).then(function (data) {
    console.log(data)
  }).catch((error) => console.error(error));
}).catch((error) => console.error(error));