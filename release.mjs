import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import minimist from 'minimist';
import { fileURLToPath } from 'url';

// Define __dirname and __filename for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dependencyName = '@revolist/revogrid';
const localDependencyName = '@revolist/vue-datagrid';

// Parse command-line arguments
const args = minimist(process.argv.slice(2));
const newVersion = args.version;

if (!newVersion) {
  console.error(chalk.red('Error: Please provide a version using --version'));
  process.exit(1);
}

function updateDependencyVersion(packageJson, type, dependencyName, version) {
    // Update dependency version
    if (packageJson[type] && packageJson[type][dependencyName]) {
      packageJson[type][dependencyName] = version;
      console.log(
        chalk.green(
          `Updated dependency ${dependencyName} to version ${version} in ${packageJson.name}`,
        ),
      );
    }
}



function updatePackageJsonVersion(packageDir, version) {
  const packageJsonPath = path.join(packageDir, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    packageJson.version = version;
    updateDependencyVersion(packageJson, 'dependencies', dependencyName, version);
    updateDependencyVersion(packageJson, 'devDependencies', dependencyName, version);
    updateDependencyVersion(packageJson, 'peerDependencies', dependencyName, version);

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
    );
    console.log(
      chalk.green(`Updated ${packageJson.name} to version ${version}`),
    );
  } else {
    console.log(chalk.red(`package.json not found in ${packageDir}`));
  }
}

function main() {
  const fullPath = path.resolve(__dirname);
  updatePackageJsonVersion(fullPath, newVersion);
  // update demo
  updatePackageJsonVersion(path.join(fullPath, 'demo'), newVersion, localDependencyName);
  console.log(chalk.blue('Version update complete.'));
}

main();
