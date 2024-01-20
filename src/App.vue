<template>
<nav>
  <div class="menu-item">

   <div class="Principale">
    <RouterLink to="/"> PagePrincipale</RouterLink>
    <img src="../src/assets/triangle animé 2.gif" alt="">
   </div>

   <div class="PDF">
    <RouterLink to="/deux">Fichier PDF</RouterLink>
   </div>
   <div class="Propos">
    <RouterLink to="/APropos">A Propos</RouterLink>
    </div>
  <div class="Contact">
    <RouterLink to="/FormulaireContact">Formulaire de Contact</RouterLink>
  </div>
  <div class="Projets">
    <RouterLink to="/MesProjets">Mes Projets</RouterLink>
  </div>
    <img src="../src/assets/engrenage.gif" alt="">

  </div>
  </nav>
  
<RouterView/>
  


<ProjectsCard/>
<footer>
    <div class="social-links">
             <div class="link">
              <img src="../src/assets/github.png" alt="">
              <a href="https://github.com/sephiroth59200" target="_blank"><h2>GitHub</h2></a>  
             </div>
             <div class="link">
              <img src="../src/assets/linkedIn.png" alt="">
              <a href="https://www.linkedin.com/in/fran%C3%A7ois-leclercq-19004519b/" target="_blank"><h2>LinkedIn</h2></a>  
             </div>
             <div class="link">
              <img src="../src/assets/twitter.png" alt="">
              <a href="https://twitter.com/FranoisLec8013" target="_blank"><h2>Twitter</h2></a>  
             </div>
             <div class="link">
                <a href="">
              <img src="../src/assets/instagram.png" alt="">
              <h2>Instagram</h2>
                </a>  
             </div> 
             <div class="Copyright">
    <p >Dernière Mise a jour le 20/01/2024</p>
    </div>
        
          </div>
  
 </footer>
</template>

<script>

import ProjectsCard from './components/ProjectsCard.vue'

export default {
  name: 'App',
  components: {
    
    ProjectsCard,
    
    
    
  }
}
</script>

<style>
button{

  padding: 20px 30px;
  border:none;
  font-size: 16px;
  background-color: #222;
  color :#fff;
  cursor: pointer;

}

.Copyright{

justify-content: center;


color: #fff;


}
.link:hover{

background-color: #222;
border-bottom-color:#12ee49;
border-radius: 25px;
}


.link {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  border-radius: 50px;
  transition: 0.4s;
  height:3rem

}

 .social-links.a {
    color:inherit;
    text-decoration: none;
}



.social-links:hover{

background-color: #222;
border-bottom-color:#ff0000;
border-radius: 25px;
}



  .link a{
    
    text-decoration: none;
    color:#fff;
    font-size: 10px;
}

.social-links {
  color:#222;
    width: 60%;
    text-align: center;
    border-bottom: 5px solid transparent;
    display: flex;
    align-items: center;
   justify-content:space-around;
    transition: 0.4s;
    height:5rem;
    flex-direction: row;
}

footer{

  display: flex;
  justify-content: center;
}


.link img{
        height: 1rem;

    }








nav{
    display:flex;
    align-items: center;
    justify-content: center;
   

}

nav .Principale:hover{

  background-color: #222;
  border-bottom-color:#12ee49;
  border-radius: 25px;
}


nav .Principale {
    color: #fff;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    border-radius: 50px;
    transition: 0.4s;
    height:1rem

}

.Principale img{
  height:20px;
  width: 20px;
 
}
nav .PDF:hover{

background-color: #222;
border-bottom-color:#12ee49;
border-radius: 25px;
}


nav .PDF {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  border-radius: 50px;
  transition: 0.4s;
  height:1rem

}

nav .Propos:hover{

background-color: #222;
border-bottom-color:#12ee49;
border-radius: 25px;
}


nav .Propos {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  border-radius: 50px;
  transition: 0.4s;
  height:1rem

}

nav .Contact:hover{

background-color: #222;
border-bottom-color:#12ee49;
border-radius: 25px;
}


nav .Contact {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  border-radius: 50px;
  transition: 0.4s;
  height:1rem

}

nav .Projets:hover{

background-color: #222;
border-bottom-color:#12ee49;
border-radius: 25px;
}


nav .Projets {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  border-radius: 50px;
  transition: 0.4s;
  height:1rem

}

nav .menu-item.active,
nav .menu-item:hover{
    background-color: #222;
    border-bottom-color:#ff0000;
    border-radius: 25px;

}

nav .menu-item {
    color: #fff;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
    height:2rem

}



nav .menu-item a {
    color:inherit;
    text-decoration: none;
}










#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  background-image: url(./assets/trianglefond2.jpg);
  border-radius: 25px;
  font-family: 'Silkscreen-Regular', sans-serif;
}


@font-face {
    font-family: 'Silkscreen-Regular' ;
    src: url('./assets/police_decriture/Silkscreen-Regular.ttf')  format('truetype'),
  }


</style>