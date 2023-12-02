<h1 align="center">
    <img src="./Img/RouteCacau_icon.png"/>
</h1>

<h1 align = "center"> RouteCacau </h1>

![Static Badge](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=plastic&logo=javascript&color=black)
![Static Badge](https://img.shields.io/badge/Html5-%23E34F26?style=plastic&logo=html5&color=black)
![Static Badge](https://img.shields.io/badge/CSS3-%231572B6?style=plastic&logo=css3&color=black)
![Static Badge](https://img.shields.io/badge/Leaflet-%23199900?style=plastic&logo=leaflet&color=black)
![Static Badge](https://img.shields.io/badge/loopback-%233F5DFF?style=plastic&logo=loopback&logoColor=%233F5DFF&color=black)
![Static Badge](https://img.shields.io/badge/mysql-%234479A1?style=plastic&logo=mysql&logoColor=%234479A1&color=black)


![GitHub top language](https://img.shields.io/github/languages/top/amiralo01/Route_Cacau?style=plastic&color=red)
![GitHub](https://img.shields.io/github/license/amiralo01/Route_Cacau?style=plastic&color=purple)
![GitHub language count](https://img.shields.io/github/languages/count/amiralo01/Route_Cacau?style=plastic&color=black)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/amiralo01/Route_Cacau/main?style=plastic&color=green)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/amiralo01/Route_Cacau/Login_Jarlison?style=plastic&color=blue)
![GitHub followers](https://img.shields.io/github/followers/amiralo01?style=plastic&logo=github&color=cyan)

> Status: Developing ⌛

# Creators of RouteCacau:

<div style="display:flex; justify-content:space-around; align-items:center;">

| ![Autor 1](Img/autor_1.png) | ![Autor 2](Img/autor_2.png) |
|-----------------------------|-----------------------------|
|- **Name:** Amiraldo Filho   | - **Name:** Járlison Nevez  |
|- **Languages:** Python, JavaScript and C#. | - **Languages:** Java and JavaScript. |
|- **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/amiraldo-ferreira-28a84123b/) | - **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/jarlison-neves-87332129b/) |
|- **GitHub:** [GitHub](https://github.com/amiralo01) | - **GitHub:** [GitHub](https://github.com/Jarlisonn) |

</div>

# What is Route Cocoa? 🤔

It is a web program for tracking cocoa powder in Santarém, showing where it comes from, where it is going or went, and demonstrates the entire industrial process it went through until it reaches its final customer. Where this end customer will be able to view this tracking either through the website itself or through the Qr Code of the product they purchased.

# What do you need to access RouteCacau? 🤔

Route Cacau is a website that will be easy to access where the user can simply search for its name (RouteCacau) on the web and find it, the user itself will directly access the menu screen where they will see the tracking screens which will show where comes their cocoa, they could also access this screen through a QR code found on the final cocoa product. Suppliers will be able to use the data entry screen, where they can add relevant information about themselves and Cacau that will be demonstrated on the tracking screen for users.

Note: It is worth mentioning that information from suppliers is received directly from them into the database.

# Commands needed to run the codes on your machine: ❕ 
* To be able to use the Leaflet tool, you must use the ```npm install leaflet``` command in your terminal to install the necessary dependencies on your machine.
* Para poder utilizar a base de dados MySQL você precisa realizar a sua instalação em sua máquina vá até o site do [MySQL](https://dev.mysql.com/downloads/) faça o dowload  da versão compatível com sua máquina e instale-a, em seguida para visualizar o banco é recomendável utiliza o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) e realizar todo o processo de configuração dele para instalá-lo.
* Outra opção também para visualizar e ativar o banco de dados mysql é utilizar a ferramenta [XAMPP](https://www.apachefriends.org/pt_br/download.html) na qual você poderá visualizar como administrador e sua porta local.

## routecacau_api

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```
or

```sh
npm i -g @loopback/cli
```
To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

# Tools 🔧

* As it is a web system, any operating system (Windows, Ubuntu, Mac) is compatible.
* To create the code, the IDE was used. [VsCode](https://code.visualstudio.com/).
* For data storage, the database was used [MySQL](https://dev.mysql.com/downloads/).
* The Location tool used to demonstrate Tracking was the [Leaflet](https://leafletjs.com/).
* Para a conexão entre a interface e o banco de dados utilizou-se a API do [LoopBack 4](https://loopback.io/getting-started.html)
* Languages used to create the code: JavaScript, Html and CSS.

# License 📜

This project is using the MIT license, see the [LICENSE](./LICENSE) file for more details.

**Note:** Systems used in the Distributed Systems discipline as a final project, where the origin of cocoa and its process until it reaches the market are traced.

# Main documents: 🛠

* The document with job specifications is available [here](documents/Trabalho%20Final%20Descrição.pdf).
* The document responsible for inserting supplier and cocoa data is found in [insert.html](src/LEAFLET/insert.html).
* The file responsible for choosing the trace view is the [index.html](src/LEAFLET/index.html).
* The documents with the tracking screens are located in the [LEAFLET](src/LEAFLET) directory and the tracking screens are [tracking](https://github.com/amiralo01/Route_Cacau/blob/main/src/LEAFLET/tracking.html), [tracking2](https://github.com/amiralo01/Route_Cacau/blob/main/src/LEAFLET/tracking2.html) and [tracking3](https://github.com/amiralo01/Route_Cacau/blob/main/src/LEAFLET/tracking3.html).