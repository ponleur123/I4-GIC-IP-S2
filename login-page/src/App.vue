<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->

      <div class="home">
    <img alt="Vue logo" src="./assets/logo.png">
      <h2>Welcome </h2>
      <p id="a"> Authentication App~</p>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
      <router-link to="/login" id="log">Login</router-link> 
      <router-link to="/register" id="res"> Register</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

  #log{
    position: absolute;
    left: 17%;
    top: 53%;
  }
  #res{
    position: absolute;
    left: 22%;
    top: 53%;
  }
  h2{
    position: absolute;
    left: 17%;
    top: 25%;
    font-size: 50px;
    color: green;
  }
  #a{
    position: absolute;
    left: 17%;
    top: 40%;
    font-size: 28px;
  }
</style>
