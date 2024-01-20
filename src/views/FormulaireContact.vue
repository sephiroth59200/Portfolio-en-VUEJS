<template>

    <h2>Formulaire de Contact</h2>
    <p>Voici un formulaire de contact ou vous pouvez m'envoyer vos coordonnées</p>
    
    <div id="imgcourrier">
    <img src="../assets/logocourrierfini.png" alt="courrier">
    </div>
    <div id="formulaire">
    <input placeholder="Nom" v-model="utilisateur.Nom"/>
        <input placeholder="Prenom" v-model="utilisateur.Prenom"/>
           <input placeholder="Email" type="email" v-model="utilisateur.Email"/>
    
        <button @click="enregistrer">Valider</button>
    </div>
   
    


    </template>
    <script>
    export default{
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
    
    //mettre un # pour aller chercher seulement l'id 
    
    
    </script>
    <style>
    #imgcourrier{
       
       display: flex;
       flex-direction: column;
      
         height:250px;
         width: 50px;
flex-direction: row;
-ms-flex-align: baseline;
    }
    #formulaire{
      display: flex;
      flex-direction: column;
        width: 400px;
        height:400px;
        background: transparent;
        border: 2px solid rgba(255,255,255);
        border-radius: 20px;
        backdrop-filter: blur(20px);
        box-shadow : 0 0 30px rgba (0,0,0,.5);
    }



</style>
    