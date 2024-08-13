# ifgeny87/nx-boilerplate


<!-- toc -->
<!-- tocstop -->


## What's inside

My idea was to implement a simple template project for the NX monorepo. This project has collected 
the experience of using tools for building and running applications for development.

The following tools were used in the project:
- [nx](https://nx.dev) - orchestration of monorepo
- [nestjs](https://nestjs.com) - creating a modern backend web server
- [webpack](https://webpack.js.org/) - building tool recommended by NestJS developers
- [oclif](https://oclif.io) - use as CLI engine for creating CLI application
- [esbuild](https://esbuild.github.io) - building and bundling nodejs applications
- [vite](https://vitejs.dev) - creating and building a modern frontend web application
- [jest](https://jestjs.io), [mocha](https://mochajs.org) - testing tools

The project consists of the following subprojects:
1. Library [#my-lib01](#my-lib01). Uses the **moment** dependency.
2. Library [#my-lib02](#my-lib02). Uses **my-lib01**.
3. Frontend application [#my-front-app](#my-front-app). Implemented on vite and react. Uses both 
   libraries. The building is performed using **vite** into a single bundle.
4. Node application [#my-node-app](#my-node-app). Implemented on node. Uses both libraries. The 
   building is performed using **esbuild** into a single bundle. When deploying, it does not
   require installing dependencies.
5. Nest application [#my-nest-app](#my-nest-app). Implemented on **nestjs**. Uses both libraries.
   The building is performed by **webpack** with the **tsc** transpiler into a single bundle. When
   deploying, it does not require installing dependencies.
6. CLI application [#my-cli](#my-cli). Implemented using the **oclif** framework. Uses both 
   libraries. Compilation is performed using **tsc**. When deploying, requires installing 
   dependencies.


## How to use it

You can clone this repository to your computer and run your project within. Or you can use any 
solution of this repo in your project.

I created this repository to test ideas and tools. I reuse these solutions in my projects. And of 
course, I will update this project as I gain new experience.

❤️ I will be glad to receive feedback on my repo. I will also be glad to receive your comments 
and suggestions for improving the project.


## Projects inside repo

The following NX command show a list of subprojects:

```shell
nx show projects
```

It will return:

```
my-front-app
my-front-app-e2e
my-nest-app
my-nest-app-e2e
my-node-app
my-node-app-e2e
my-cli
my-lib01
my-lib02
@ips.su/ta
```


## NX general commands

The following commands can be used to perform bulk operations. 

Lint all:

```shell
nx lint
```

Test all:

```shell
nx test
```

Build all:

```shell
nx build
```

Show target for some project. For example:

```shell
nx show project my-cli --json | jq
nx show project my-node-app --json | jq
nx show project my-lib01 --json | jq
```


## my-front-app

Serve

```shell
nx serve my-front-app
```

Test

```shell
nx test my-front-app
```

Build

```shell
nx build my-front-app
```


## my-front-app-e2e

E2E

```shell
nx e2e my-front-app-e2e
```


## my-nest-app

Serve

```shell
nx serve my-nest-app
```

Test

```shell
nx test my-nest-app
```

Build

```shell
nx build my-nest-app
```


## my-nest-app-e2e

Run web server before testing:

```shell
nx serve my-nest-app
```

E2E

```shell
nx e2e my-nest-app-e2e
```


## my-node-app

Serve

```shell
nx serve my-node-app
```

Test

```shell
nx test my-node-app
```

Build

```shell
nx build my-node-app
```


## my-node-app-e2e

E2E

```shell
nx e2e my-node-app-e2e
```

## my-cli

Dev

```shell
cd cli/my-cli
./bin/dev.js
```

Test

```shell
nx test my-cli
```

Build

```shell
nx build-for-cli
nx build my-cli
```

Prod

```shell
cd cli/my-cli
./bin/run.js
```
