const core = require('@actions/core');
const fs = require('fs');

try {
  // Get the feed_list input value from the workflow
  const feedList = core.getInput('feed_list');

  // Fetch LinkedIn posts and update the README file

  // Read the existing README file
  let readmeContent = fs.readFileSync('README.md', 'utf8');

  // Update the relevant section of the README with the fetched posts

  // Write the updated content to the README file
  fs.writeFileSync('README.md', readmeContent, 'utf8');

  console.log('README updated successfully');
} catch (error) {
  core.setFailed(error.message);
}

