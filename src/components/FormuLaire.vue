<template>

<div>
 
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




</script>