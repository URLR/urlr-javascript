import { Configuration, AccessTokensApi, LinksApi, StatisticsApi } from "urlr-js"

// Access Tokens

const accessTokensApi = new AccessTokensApi();
accessTokensApi.create_access_token({
  createAccessTokenRequest: {
    username: '',
    password: ''
  }
}).then(function (data) {
  const configuration = new Configuration({ accessToken: data.token });

  // Link shortening

  const linksApi = new LinksApi(configuration);
  linksApi.createLink({
    createLinkRequest: {
      url: '',
      team_id: ''
    }
  }).then(function (data) {
    console.log(data)
  }).catch((error) => console.error(error));

  // Statistics

  const statisticsApi = new StatisticsApi(configuration);
  statisticsApi.statistics({
    statisticsRequest: {
      link_id: ''
    }
  }).then(function (data) {
    console.log(data)
  }).catch((error) => console.error(error));
}).catch((error) => console.error(error));