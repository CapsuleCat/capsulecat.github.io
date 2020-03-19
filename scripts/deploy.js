/* eslint-disable no-console */
var fs = require('fs');
var ghpages = require('gh-pages');

const folder = 'public';

fs.writeFile(folder + '/CNAME', 'capsulecat.com', function (err) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	ghpages.publish(folder, {
		repo: `https://${process.env.GITHUB_TOKEN}@github.com/CapsuleCat/capsulecat.github.io.git`,
	}, function (err) {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		console.log('Success');
	});
});
