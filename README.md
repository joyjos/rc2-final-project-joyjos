![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/JOYSWEETS.png)


# JOY SWEETS :: Dulces Emociones

**JOY SWEETS** es una deliciosa colección de recetas dulces.

En mi aplicación, encontrarás una gran variedad de recetas que he creado con mucho amor y dedicación, para que puedas disfrutar de deliciosos postres en la comodidad de tu hogar.

Desde pasteles, tartas, galletas y mucho más, encontrarás recetas fáciles de seguir y con ingredientes accesibles, para que puedas prepararlas en cualquier momento.

Además, cada receta viene acompañada de pasos detallados, para que puedas seguirlas fácilmente y obtener los mejores resultados.

¡Te espero en **JOY SWEETS**!

# A RESTful API built with Spring Boot consumed by a FrontEnd built in React. JWT Authentication and PostgreSQL

## Table of Content
-  [*01 Languages and Technologie*s](#section_01)
-  [*02 Requirements*](#section_02)
-  [*03 Installation*](#section_03)
-  [*04 Architecture*](#section_04)
-  [*05 API Endpoints*](#section_05)
-  [*06 Screenshots*](#section_06)
  
<br>

<a id="section_01"></a>
## *01 Languages and Technologies*
### FrontEnd
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

### BackEnd
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)
![PosgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

### Version Control
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

### OtherTools
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

<br>

<a id="section_02"></a>
## *02 Requirements*
- Having Java 17 installed  
    You can download it from [Oracle's website](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)  
- Having Node.js installed  
    You can download it from [Node.js's website](https://nodejs.org/en/download/)  
- Having PostgreSQL DataBase installed  
    Install PostgreSQL from [PostgreSQL's website](https://www.postgresql.org/download/)
  
<br>

<a id="section_03"></a>
## *03 Installation*
### BackEnd
A PostgreSQL database is needed, according to the configuration of `src/main/resources/application.properties`
- Go into the `backend` folder:
  
  ~~~
  cd backend
  ~~~
- Build the project using Maven:
 
  ~~~
  mvn clean install
  ~~~
- Run the Spring Boot application:
 
  ~~~
  mvn spring-boot:run
  ~~~

### FrontEnd
- Go into the `frontend` folder:
  
  ~~~
  cd frontend
  ~~~
- Install `node_modules`:
  
  ~~~
  npm install
  ~~~

- Run the React application:
  
  ~~~
  npm run dev
  ~~~

<br>

<a id="section_04"></a>
## *04 Architecture*
### FrontEnd Folder Structure
<pre>
src
├── admin
│   ├── middleware
│   │   └── router
│   └── presentation
│       ├── components
│       │   ├── Dashboard
│       │   ├── Editor
│       │   ├── Header
│       │   ├── Login
│       │   ├── NewPost
│       │   ├── Post
│       │   ├── Posts
│       │   ├── Register
│       │   └── Sidebar
│       └── pages
│           ├── login
│           └── register
├── helpers
├── middleware
│   ├── context
│   └── router
├── presentation
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   ├── components
│   │   ├── Blog
│   │   ├── Footer
│   │   ├── Header
│   │   ├── Recipe
│   │   ├── Recipes
│   │   └── Searcher
│   └── pages
└── services    
</pre>

### BackEnd Folder Structure
<pre>
src
└── main
    └── java
        └── org
            └── factoriaf5
                └── backend
                    ├── configuration
                    ├── controllers
                    │   ├── auth
                    │   ├── posts
                    │   └── upload
                    ├── persistence
                    │   ├── auth
                    │   └── posts
                    └── services
                        └── auth
</pre>

<br>

<a id="section_05"></a>
## *05 API Endpoints*

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/Post_endpoints.png)

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/User_endpoints.png)

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/Login_endpoint.png)

<br>

<a id="section_06"></a>
## *06 Screenshots*

### Home

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/home.png)

### Blog

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/blog.png)

### Login

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/login.png)

### Register

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/register.png)

### Dashboard

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/dashboard.png)

### Posts

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/posts.png)

### Edit posts

![JOY SWEETS](https://github.com/FactoriaF5Code/rc2-final-project-joyjos/blob/main/images/updatePost.png)
