var request = require('request');

request.post(
    'https://doc.esdoc.org/api/create',
    { form: { gitUrl: 'git@github.com:gregaou/esdoc-alias-plugin.git' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var res = JSON.parse(body);
            if (res.success) {
              console.log("Documentation update at https://doc.esdoc.org" + res.path);
              process.exit(1);
            } else {
              console.log("Unable to update documentation");
              console.log(error);
              process.exit(1);
            }
        } else {
          console.log("Unable to update documentation");
          console.log(error);
          process.exit(1);
        }
    }
);
