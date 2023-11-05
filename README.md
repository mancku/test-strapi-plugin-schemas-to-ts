# Strapi Plugin Test Project

This project is a testing environment for the `Strapi Plugin Schemas to TS` plugin for Strapi. The plugin code is included as a Git submodule, allowing for live testing of changes within a Strapi instance.

The Content Types and Components I've created in this project **simulate the needed objects to operate the API of a fake vehicles eCommerce**. The *theme* was chosen at random, but having one helps to understand the objects in Strapi and why their relations.

## Extensive Test Coverage
I've added a wide array of Content Types, Single Types, and Components to cover as many test scenarios as possible. This diverse test suite is designed to ensure the plugin is well-tested across different use cases.

Despite my efforts to be thorough, there might be use cases or Strapi features I haven't covered. If you encounter a scenario that isn't tested, or you think of a new way to challenge the plugin, I encourage you to please open an Issue or submit a Pull Request.

If you submit a PR, please follow the fake vehicles eCommerce example.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (see the version recommended for Strapi)
- Yarn or npm (for managing dependencies)
- Git (for cloning and managing submodules)

### Installation

1. **Clone the repository**

    ```sh
    git clone --recursive [URL to this test project repository]
    ```

  Use the `--recursive` option to ensure the submodule (plugin code) is cloned along with the test project repository.

2. **Install Dependencies in the Test Project**
  
    In the Test Project root
    ```sh
    npm install
    ```
	  Or
	  ```sh
    yarn install
    ```

3. **Install Plugni dependencies**
	
    Navigate to the plugin's submodule directory and install the required dependencies:
    ```sh
    cd src/plugins/strapi-plugin-schemas-to-ts/
    ```
	  
    Then
    ```sh
    npm install
    ```
	  Or
	  ```sh
    yarn install
    ```

4. **Build the plugin**
	
    On the same plugin directory, build the plugin code.
	  ```sh
    npm run build
    ```
	
    Or
	  ```sh
    yarn build
    ```
	
	  If you are going to be making changes in the plugin code and want it to automatically build on saving files, then
	  ```sh
    npm run develop
    ```
	Or
	```sh
    yarn develop
    ```

5. **Configure the Plugin in Strapi**

      Navigate Back to the Test Strapi project root:

    ```sh
    cd ../../../
    ```

   Open or create the `plugins.ts` file inside the `config` folder of the Test Project. Then, add the plugin configuration, so the file looks like this example:
	```ts
	export default {
	/*
		Other plugins configuration
	*/
    'schemas-to-ts': {
      enabled: true,
      resolve: './src/plugins/strapi-plugin-schemas-to-ts', // path to plugin folder
      config: {
        verboseLogs: true,
        alwaysAddEnumSuffix: false,
        alwaysAddComponentSuffix: true,
        usePrettierIfAvailable: true
        }
      },
    }
	```

    Adjust your boolean values as needed.

6. **Run Strapi**

    Navigate Back to the Test Strapi project root:

    ```sh
    cd ..
    ```

  	Run the Strapi Project

    ```sh
    npm run develop
    ```

    ```sh
    yarn develop
    ```

    The Strapi admin panel will now be accessible at `http://localhost:1997/admin`.
    Remember that the port in this project has been modified to not match the usual ones in Strapi projects, so conflicts are avoided.

### Testing the Plugin

After Strapi runs, you can now check if all the interfaces have been created correctly.

## Making Changes to the Plugin

To make changes to the plugin:

1. Navigate to the plugin's submodule directory.

    ```sh
    cd src/plugins/strapi-plugin-schemas-to-ts/
    ```

2. Make your changes and commit them as you would with any Git repository.
3. Push your changes to the plugin repository to preserve them outside of this test project.

## Updating the Plugin Submodule

If the plugin has been updated at its source, update the submodule with:

```sh
git submodule update --remote
```
