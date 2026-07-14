const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const readmePath = path.join(__dirname, '..', '..', 'README.md');

try {
  // Fetch the last 5 commits using git log
  const gitLog = execSync('git log -n 5 --pretty=format:"%ad - %s" --date=short').toString().trim();
  const commits = gitLog ? gitLog.split('\n') : [];

  let formattedCommits = [];
  if (commits.length === 0) {
    formattedCommits.push('      <span style="color: #888888;">"No recent commits found."</span>');
  } else {
    formattedCommits = commits.map((commit, index) => {
      // Escape double quotes for proper look inside JSON string
      const escaped = commit.replace(/"/g, '\\"');
      const isLast = index === commits.length - 1;
      return `      <span style="color: #ce9178;">"${escaped}"</span>${isLast ? '' : ','}`;
    });
  }

  const replacementContent = formattedCommits.join('\n');

  // Read README.md
  if (!fs.existsSync(readmePath)) {
    console.error('README.md not found at path:', readmePath);
    process.exit(1);
  }

  let readmeContent = fs.readFileSync(readmePath, 'utf8');

  // Regex to find the placeholders
  const regex = /(<!-- START_SECTION:activity -->\n)([\s\S]*?)(\n\s*<!-- END_SECTION:activity -->)/;

  if (regex.test(readmeContent)) {
    readmeContent = readmeContent.replace(regex, `$1${replacementContent}$3`);
    fs.writeFileSync(readmePath, readmeContent, 'utf8');
    console.log('Successfully updated README.md system activity telemetry.');
  } else {
    console.error('Placeholder markers <!-- START_SECTION:activity --> not found in README.md.');
  }
} catch (error) {
  console.error('Error running update-activity script:', error);
  process.exit(1);
}
