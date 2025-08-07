import { Configuration, AccessTokensApi, LinksApi, StatisticsApi, WorkspacesApi } from "urlr-js"

const username = process.env.URLR_API_USERNAME; // to be defined on your side
const password = process.env.URLR_API_PASSWORD; // to be defined on your side

// Access Tokens

let configuration = new Configuration();

const accessTokensApi = new AccessTokensApi(configuration);
accessTokensApi.createAccessToken({
  createAccessTokenRequest: {
    username: username,
    password: password,
  }
}).then(function (data) {
  configuration = new Configuration({
    accessToken: data.token,
    basePath: baseUrl
  });

  // Workspaces - get workspace id

  const workspacesApi = new WorkspacesApi(configuration);
  workspacesApi.getTeams().then(function (workspaces) {
    const workspaceId = workspaces.teams[0].id;

    // Create a link

    const linksApi = new LinksApi(configuration);
    linksApi.createLink({
      createLinkRequest: {
        url: 'https://github.com/URLR',
        teamId: workspaceId,
      }
    }).then(function (link) {
      // Get statistics

      const statisticsApi = new StatisticsApi(configuration);
      statisticsApi.getStatistics({
        getStatisticsRequest: {
          linkId: link.id,
        }
      }).then(function (statistics) {
        console.log(statistics);
      }).catch((error) => console.error(error));
    }).catch((error) => console.error(error));
  }).catch((error) => console.error(error));
}).catch((error) => console.error(error));