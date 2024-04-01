import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { EMPTY, catchError, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';
import { Role } from '../models/Role';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  verifierRegister() {
    throw new Error('Method not implemented.');
  }

  auth: any;
  loginForm: any;
  errorMsg: any;
  // afficherBloc1!: boolean;
  ngOnInit(): void {}
  constructor(private userService: UserService, private router: Router, private formbuilder: FormBuilder, private authentificasionservice: AuthService
  ) {}

  formData = {
    email: '',
    password: '',
  };
  registreData = {
    nom: '',
    prenom: '',
    email: '',
    datedeNaissance: '',
    telephone: '',
    password: '',
    role_id: '',
    domaine_id: '',
  };
  userfoundid = '';

  submitFunction(event: Event): void {
    event.preventDefault();

    if (this.formData.email !== '' && this.formData.password !== '') {
      // this.affichermessage('error', 'Oops', 'Login ou Mot de passe Incorrecte');
      // Utilisez le service d'authentification pour vérifier les informations d'identification
      console.log('Donnée saisie',this.formData);
      const loginData = {
        email: this.formData.email,
        password: this.formData.password,
      };

      this.authentificasionservice.loginUser(loginData).subscribe(
        (user: any) => {
          console.log("voirrrrrr connexion",user);

          // this.userfoundid = user.user.id;
          // let useretat = user.user.role_id;

          if (user.authorization.token) {
            this.affichermessage('success', 'Bienvenu', user.email);
            // alert(this.userfoundid);
            if (user.user.role_id == 1 && user.user.estArchive == 0) {
              localStorage.setItem('samaToken', (user.authorization.token) )
              this.router.navigate(['/dashboard']);

              this.authentificasionservice.setUserId(user.id);
            } else if (user.user.role_id == 2 && user.user.estArchive == 0) {
              localStorage.setItem('samaToken', (user.authorization.token) )
              this.router.navigate(['/dashboardmentore']);
            } else if (user.user.role_id == 3 && user.user.estArchive == 0) {
              localStorage.setItem('samaToken', (user.authorization.token) )
              this.router.navigate(['/dashboardmentor']);
            } else {
              this.affichermessage(
                'error',
                'Ce compte a été desactive',
                'error'
              );
            }
          } else {
            this.affichermessage(
              'error',
              'Oops',
              'Login ou Mot de passe Incorrecte'
            );
          }
        },
        (error: any) => {
          console.error('Erreur lors de la connexion :', error);
          this.affichermessage(
            'error',
            'Oops',
            "Une erreur s'est produite lors de la connexion"
          );
        }
      );
    } else {
      this.affichermessage(
        'error',
        'Oops',
        ' Les Informations que vous avez saisies sont incorrectes!'
      );
    }
  }
  affichermessage(icone: any, message: string, user: string) {
    Swal.fire({
      position: 'center',
      icon: icone,
      title: message + '' + user,
      showConfirmButton: true,
      // timer: 1500
    });
  }

  // methode d 'enregistrement

  registerUser(): void {
    // Perform additional validation if needed
    console.log("donnee saisie",this.registreData);

    // Call the registration method in your authentication service
    this.authentificasionservice.registerUser(this.registreData).subscribe(
      
      (response) => {
        console.warn("la reponse du back",response);
        // Handle successful registration, e.g., show a success message or navigate to another page
      },
      (error: any) => {
        console.error('Erreur au moment de la connexion:', error);
        // Handle registration error, e.g., show an error message
      }
    );
  }

  contenu = 'exemple@gmail.com';
  imageUrl =
    '../../assets/img-connexion/femme-affaires-attrayant-bras-croises_13339-12510.avif';
  // email=true

  //méthodes
  afficherBloc1: boolean = true;

  basculerBlocs() {
    this.afficherBloc1 = !this.afficherBloc1;
  }

  // attributs
  nom = '';
  prenom = '';
  // numero = "";
  email = '';
  pass = '';
  // formChoice=true;

  // methodes
  verifierLogin() {
    console.log({ email: this.email, pass: this.pass });
    if (this.email == '' || this.pass == '') {
      this.showMessage('error', 'Sorry', 'Veuillez saisir tous les champs');
    } else if (this.pass.length < 8) {
      this.showMessage(
        'error',
        'Sorry',
        'Le password doit être > ou = à 8 caractère'
      );
    } else {
      this.showMessage('success', 'Thanks', 'Connexion faite avec succès');
    }
  }

  showMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
    });
  }

  showForm() {
    // this.formChoice=!this.formChoice;
    this.nom = '';
    this.prenom = '';
    // this.numero="";
    this.email = '';
    this.pass = '';
  }

  roles: Role[] = [];
  loadRoles(): void {}
}
