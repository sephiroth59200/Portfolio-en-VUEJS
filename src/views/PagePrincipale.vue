<template>
    <div class="wrapper">
        <div class="main-container">
      <div class="container-one">
        <div class="profile">
            <img src="../assets/profilepic.png" alt="">
            <h1>Leclercq François</h1>
            <h2>Developpeur</h2>
            <div class="technology-section">
                <h3>Technologies Etudiées</h3>
            <div class="logos">
                
                <p>JS</p>
                <img src="../assets/javascript.png" alt="">
                <p>CSS</p>
                <img src="../assets/html5.png" alt="">
                <p>HTML</p>
                <img src="../assets/css3.png" alt="">
                </div>
     
                <h3>Formulaire de Contact
     
                </h3>
                <div class="Envelope">
    <img src="../assets/envelope.gif" alt="courrier">
    </div>
    <p>Voici un formulaire de contact ou vous pouvez m'envoyer vos coordonnées</p>
    
    </div>
    <div id="formulaire">
    <input placeholder="Nom" v-model="utilisateur.Nom"/>
        <input placeholder="Prenom" v-model="utilisateur.Prenom"/>
           <input placeholder="Email" type="email" v-model="utilisateur.Email"/>
    
        <button @click="enregistrer">Valider</button>
    </div>
            </div>
          
          
       </div>
       <div class="container-two">
        <h1>MON PORTFOLIO EN VUE.JS</h1>
        <div class="about-me">
            <h2>A Propos de moi</h2>
            
            <p>Jeune developpeur en herbe, je suis passionné par l'informatique depuis toujours,
                j'adore creer des sites et remedier au divers problèmes rencontrer.
                La Creation 
                de site est un atout extrement benefique pour moi.
</p>
<div class="Projets">
    <MoDal @close="toggleModal" :modalActive="modalActive">
        <div class="modal-content">
            <h1>Mon CV</h1>
            <p>Voici mon CV  </p>

        </div>
    </MoDal>
    <button id="btn1" @click="toggleModal" type="button">Ouvrir Projet MonCV</button>

<MoDalPDF @close="togglePDF" :modalPDF="modalPDF">
        <div class="modal-content">
            <h1>PDF</h1>
            <p>Voici le PDF </p>

        </div>
    </MoDalPDF>
    <button id="btn2" @click="togglePDF" type="button">Ouvrir Projet PDF</button>
 

    <MoDalJS @close="toggleJS" :modalJS="modalJS">
        <div class="modal-content">
            <h1>Javascript</h1>
            <p>Voici le programme Javascript </p>

        </div>
    </MoDalJS>
    <button id="btn3" @click="toggleJS" type="button">Ouvrir Projet Javascript</button>
</div>
</div>


        </div>
        
        </div>
        <div>
      
    
    </div>
</div>
      
       
   
    
 
</template>

<script>
import MoDalJS from "@/components/MoDalJS.vue";
import MoDalPDF from "@/components/MoDalPDF.vue";
import MoDal from "@/components/MoDal.vue"
import { ref } from "vue"
export default{
    
       names:"PagePrincipale",
       components:{
        MoDal,
        MoDalPDF,
        MoDalJS
        
       },
       setup() {

        const modalPDF = ref(false);

        const togglePDF = () => {
            modalPDF.value = !modalPDF.value;
        };


        const modalActive = ref(false);

        const toggleModal = () => {
            modalActive.value = !modalActive.value;

        };

        const modalJS = ref(false);
        
        const toggleJS = () => {
            modalJS.value = !modalJS.value;
        }

        return {modalActive,toggleModal,togglePDF,modalPDF,modalJS,toggleJS};

       },
    
        name:'FormuLaire',
        data(){
            return{
                utilisateur : {}
            }
            
    
        },
    
        methods:{
            enregistrer() {
                console.log(this.utilisateur)
                //Traitement de l'information
    
                this.utilisateur = {}
    
            }
    
        }
    }


</script>

<style scoped>
.Projets{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    padding: 10px;

}

.Projets:hover{
   background-color:#1f1e1e;
   border-radius: 25px;
   border-bottom-color:#ff0000;


}
#btn1{
    color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  border-radius: 50px;
  transition: 0.4s;
  height:3rem

}
#btn1:hover{
    
background-color: #222;
border-bottom-color:#12ee49;
border-radius: 25px;
}
#btn2{
    color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  border-radius: 50px;
  transition: 0.4s;
  height:3rem

}
#btn2:hover{
    
background-color: #222;
border-bottom-color:blue;
border-radius: 25px;
}
#btn3{
    color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  border-radius: 50px;
  transition: 0.4s;
  height:3rem

}
#btn3:hover{
    
background-color: #222;
border-bottom-color:blueviolet;
border-radius: 25px;
}
.modal-content{
    display: flex;
    flex-direction: column;

    h1,p {
        margin-bottom: 16px;
    }

    h1 {
font-size: 32px;
    }

    p {
        font-size: 18px;
    }


}
.Envelope img{
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
}

.Projects a:hover{
    
background-color: #222;
border-bottom-color:aqua;
border-radius: 25px;
}
.Projects a{
        text-decoration: none;
        
        color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  border-radius: 50px;
  transition: 0.4s;
  height:3rem

    }
.logos{
    display: flex;
    flex-direction: row;
}
.Projects{
display: flex;
flex-direction: column;
justify-content: left;
align-items: center;

}


.Projects img{
    height:200px;
width: 150px;
}


.container-two {
    background-image: url(../assets/trianglefond1.jpg);
}
.about-me img{
height:200px;
width: 200px;
justify-content: center;

}

.wrapper{
    display: flex;
    justify-content: center;
    padding: 10px;
}
   

    img{

    height: 20px;
}

    
    .main-container{
        display: flex ;
        flex-direction: row ;
        background-color: #cecece;
        border-radius: 25px;
        
        width: 60%;
        background-color:#7c7d7e;
        
        
    }

    .container-one{
        background-color: #1f1e1e;
        padding: 2.5%;
        width: 30%;
        border-radius: 25px;
        text-decoration: #ffffff;
        
    }

    .profile img{
        height : 10em;
        border-radius: 50%;
    }

    .profile{
        text-decoration: #ffffff;
    }

  










    
    

    .container-two{
        background-color: #000000;
        margin: 2.5%;
        width: 70%;
        
    }

    .about-me{
        text-align: left;
    }

    .logos img{
        height:5rem;
        
    }

    .button-container{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .projects-button{
        background-color: #5eff58;
        border-radius: 15px;
        padding:5px;
        margin: 5px;
    }
    .projects-button a{
        text-decoration: none;
        color:#000000;
    }



    
</style>