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
  function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard!');
  }
} catch (error) {
  core.setFailed(error.message);
}
