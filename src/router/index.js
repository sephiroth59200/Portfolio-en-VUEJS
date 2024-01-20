import {createRouter, createWebHistory} from 'vue-router'
import PagePrincipale from '../views/PagePrincipale'
import PageDeux from '../views/PageDeux'
import APropos from '../views/APropos'
import FormulaireContact from '../views/FormulaireContact'
import MesProjets from '../views/MesProjets'
import PageNotFound from '../views/PageNotFound'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
         path: '/',
         component: PagePrincipale
        },
        {
            path: '/deux',
            component: PageDeux
           },
           {
            path: '/apropos',
            component: APropos
           },
           {
            path: '/formulairecontact',
            component: FormulaireContact
           },
           {
            path: '/mesprojets',
            component: MesProjets
           },
           {
            path: '/:pathName(.*)', component: PageNotFound
           },
       


    ]
})


export default router;
