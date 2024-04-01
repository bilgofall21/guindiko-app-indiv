import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionUserComponent } from './dashboardAdmin/gestionUser/gestion-user/gestion-user.component';
import { GestionContenuComponent } from './dashboardAdmin/gestionContenu/gestion-contenu/gestion-contenu.component';
import { GestionProfilComponent } from './dashboardAdmin/gestionProfil/gestion-profil/gestion-profil.component';
import { DashboardComponent } from './dashboardAdmin/dashboard/dashboard/dashboard.component';
import { GestionDemandeComponent } from './dashboardMentor/gestion-demande/gestion-demande.component';
import { DashboardmentorComponent } from './dashboardMentor/dashboardmentor/dashboardmentor.component';
import { GestionProfilMentorComponent } from './dashboardMentor/gestion-profil-mentor/gestion-profil-mentor.component';
import { GestionContenuMentorComponent } from './dashboardMentor/gestion-contenu-mentor/gestion-contenu-mentor.component';
import { DashboardmentoreComponent } from './dashboardMentore/dashboardmentore/dashboardmentore.component';
import { GestionProfilMentoreComponent } from './dashboardMentore/gestion-profil-mentore/gestion-profil-mentore.component';
import { GestionDemandeMentoreComponent } from './dashboardMentore/gestion-demande-mentore/gestion-demande-mentore.component';

import { ContactComponent } from './contact/contact.component';
import { NosServicesComponent } from './serviceGuindoko/nos-services/nos-services.component';
import { DetailInformatiqueComponent } from './serviceGuindoko/detail-informatique/detail-informatique.component';
import { DetailGestionManagementComponent } from './serviceGuindoko/detail-gestion-management/detail-gestion-management.component';
import { DetailTechniqueComponent } from './serviceGuindoko/detail-technique/detail-technique.component';
import { DetailHotellerieComponent } from './serviceGuindoko/detail-hotellerie/detail-hotellerie.component';
import { DetailScienceComponent } from './serviceGuindoko/detail-science/detail-science.component';
import { DetailArtComponent } from './serviceGuindoko/detail-art/detail-art.component';

import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { BgColorBlueguindikoDirective } from './bg-color-blueguindiko.directive';
import { BgColorOrangeguindikoDirective } from './bg-color-orangeguindiko.directive';
import { AccueilComponent } from './accueil/accueil.component';
import { ListesMentorComponent } from './mentor/listes-mentor/listes-mentor.component';
import { ProfilMentorComponent } from './mentor/profil-mentor/profil-mentor.component';
import { ArticleHomeComponent } from './page-articles/article-home/article-home.component';
import { DetailsArticleComponent } from './page-articles/details-article/details-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite/politique-de-confidentialite.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailcontenuComponent } from './dashboardAdmin/detailcontenu/detailcontenu.component';
import { MessageComponent } from './message/message.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptorProvider } from './interceptor/interceptor';

@NgModule({
  declarations: [
    AppComponent,

    ContactComponent,
    NosServicesComponent,
    DetailInformatiqueComponent,
    DetailGestionManagementComponent,
    DetailTechniqueComponent,
    DetailHotellerieComponent,
    DetailScienceComponent,
    DetailArtComponent,
    HeaderComponent,
    FooterComponent,
    BgColorBlueguindikoDirective,
    BgColorOrangeguindikoDirective,
    AccueilComponent,
    ListesMentorComponent,
    ProfilMentorComponent,
    ArticleHomeComponent,
    DetailsArticleComponent,
    AuthComponent,
    AProposComponent,
    PolitiqueDeConfidentialiteComponent,
    GestionUserComponent,
    GestionContenuComponent,
    GestionProfilComponent,
    DashboardComponent,
    GestionDemandeComponent,
    DashboardmentorComponent,
    GestionProfilMentorComponent,
    GestionContenuMentorComponent,
    DashboardmentoreComponent,
    GestionProfilMentoreComponent,
    GestionDemandeMentoreComponent,
    DetailcontenuComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    TokenInterceptorProvider,
    AuthService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
