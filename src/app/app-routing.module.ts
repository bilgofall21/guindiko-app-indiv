import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListesMentorComponent } from './mentor/listes-mentor/listes-mentor.component';
import { ArticleHomeComponent } from './page-articles/article-home/article-home.component';
import { DetailsArticleComponent } from './page-articles/details-article/details-article.component';
import { NosServicesComponent } from './serviceGuindoko/nos-services/nos-services.component';
import { DetailInformatiqueComponent } from './serviceGuindoko/detail-informatique/detail-informatique.component';
import { DetailHotellerieComponent } from './serviceGuindoko/detail-hotellerie/detail-hotellerie.component';
import { DetailTechniqueComponent } from './serviceGuindoko/detail-technique/detail-technique.component';
import { DetailArtComponent } from './serviceGuindoko/detail-art/detail-art.component';
import { DetailGestionManagementComponent } from './serviceGuindoko/detail-gestion-management/detail-gestion-management.component';
import { DetailScienceComponent } from './serviceGuindoko/detail-science/detail-science.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ContactComponent } from './contact/contact.component';
import { GestionUserComponent } from './dashboardAdmin/gestionUser/gestion-user/gestion-user.component';
import { DashboardComponent } from './dashboardAdmin/dashboard/dashboard/dashboard.component';
import { GestionContenuComponent } from './dashboardAdmin/gestionContenu/gestion-contenu/gestion-contenu.component';
import { GestionProfilComponent } from './dashboardAdmin/gestionProfil/gestion-profil/gestion-profil.component';
import { GestionDemandeComponent } from './dashboardMentor/gestion-demande/gestion-demande.component';
import { GestionContenuMentorComponent } from './dashboardMentor/gestion-contenu-mentor/gestion-contenu-mentor.component';
import { DashboardmentorComponent } from './dashboardMentor/dashboardmentor/dashboardmentor.component';
import { GestionProfilMentorComponent } from './dashboardMentor/gestion-profil-mentor/gestion-profil-mentor.component';
import { DashboardmentoreComponent } from './dashboardMentore/dashboardmentore/dashboardmentore.component';
import { GestionDemandeMentoreComponent } from './dashboardMentore/gestion-demande-mentore/gestion-demande-mentore.component';
import { GestionProfilMentoreComponent } from './dashboardMentore/gestion-profil-mentore/gestion-profil-mentore.component';
import { AuthComponent } from './auth/auth.component';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite/politique-de-confidentialite.component';
import { ProfilMentorComponent } from './mentor/profil-mentor/profil-mentor.component';
import { ArticleService } from './services/article.service';
import { DetailcontenuComponent } from './dashboardAdmin/detailcontenu/detailcontenu.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MessageComponent } from './message/message.component';
const routes: Routes = [
  {path : '',redirectTo : 'accueil', pathMatch :'full' ,},
  {path : 'accueil', component : AccueilComponent,},
  {path : 'listes-mentor', component :ListesMentorComponent,},
  {path : 'article-home' , component : ArticleHomeComponent,},
  {path : 'details-article', component : DetailsArticleComponent,},
  {path : 'nos-services', component : NosServicesComponent,},
  {path : 'a-propos', component : AProposComponent,},
  {path : 'contact', component : ContactComponent,},
  {path: 'login', component : AuthComponent,},
  { path: 'retourService', component: NosServicesComponent},
  {path : 'a-propos', component : AProposComponent,},
  {path : 'contact', component : ContactComponent,},
  {path : 'politique-de-confidentialite', component : PolitiqueDeConfidentialiteComponent,},
  {path : 'service', component : NosServicesComponent,},
  {path : 'articles', component : DetailsArticleComponent,},
  {path : 'mentor', component : ListesMentorComponent,},
  {path:'detailInformatique', component:DetailInformatiqueComponent},
  {path:'detailHotellerie', component:DetailHotellerieComponent},
  {path:'detailTechnique', component:DetailTechniqueComponent},
  {path:'detailArt', component:DetailArtComponent},
  {path:'detailGestman', component:DetailGestionManagementComponent},
  {path:'detailScience', component:DetailScienceComponent},
  {path : 'profil-mentor', component : ProfilMentorComponent},
  {path:'detailarticle/:id', component:DetailcontenuComponent},
        // dashbord
  // {path: '', redirectTo:'dashboard', pathMatch:'full', },
  {path: 'dashboard', component:DashboardComponent},
  {path:'gestion-user', component: GestionUserComponent},
  {path:'gestion-profil', component: GestionProfilComponent},
  {path:'gestion-contenu', component: GestionContenuComponent},
  {path:'gestion-demande', component: GestionDemandeComponent},
  {path:'gestion-profil-mentor', component:GestionProfilMentorComponent},
  {path:'dashboardmentor', component:DashboardmentorComponent },
  {path:'gestion-contenu-mentor', component:GestionContenuMentorComponent},
  {path:'dashboardmentore', component:DashboardmentoreComponent},
  {path:'gestion-demande-mentore', component:GestionDemandeMentoreComponent},
  {path:'gestion-profil-mentore', component:GestionProfilMentoreComponent},
  {path : 'message' , component :MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
