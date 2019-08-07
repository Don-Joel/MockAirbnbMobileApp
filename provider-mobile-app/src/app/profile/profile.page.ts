import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { User } from ".././models/user-models";
import { UserService } from ".././services/user.service";
import { AuthService } from ".././services/auth.service";
import { ElementFinder } from "protractor";
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { UploadService } from '../services/upload.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage {
  public user = new User();
  public name : string;
  public lastName: string;
  public email: string;
  public cellPhone: string;
  // public ngForm: FormGroup; 
  public image: any;
  public fileAdded : boolean;
 

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertCtrl: AlertController,
    private navCtrl : NavController,
    // private uploadService: UploadService,
    // private formBuilder: FormBuilder,
 
  ) {
    // this.ngForm = this.formBuilder.group({
    //   avatar: ['']
    // });
 
  }
  

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: err,
      buttons: ["OK"]
    });
    await alert.present();
  }

  //basically constructor. ngOnInit is a constructor method but does all the work.
  // It is considered bad practice to carry all the work in the default constructor
  ionViewDidEnter(){
    this.userService
      .getById(parseInt(localStorage.getItem("userId")))
      .then((response: any) => {
          this.name = response[0].name;
          this.lastName = response[0].surName;
          this.email = response[0].email;
          this.cellPhone = response[0].cellPhone;
      })
      .catch(err => {
        this.presentAlert(err.statusText);
      });
  }

  // onFileChange(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.ngForm.get('avatar').setValue(file);
  //     this.createImageFromBlob(file);
  //   }
  // }
  
  createImageFromBlob(image){
    let reader = new FileReader();
    reader.addEventListener("load", ()=>{
      this.image = reader.result;
    }, false);
    if(image){
      this.image = reader.readAsDataURL(image);
    }
  }

  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('file', this.ngForm.get('avatar').value);
 
  //   const userId = localStorage.getItem('userId');
  //   this.uploadService.uploadImage(userId, formData, (err, res) => {
  //     if (err) {
  //       alert(err);
  //     } else {
  //       this.user = res.user;
  //    //   this.onDismiss();
  //     }
  //   });
  // }
 
  navToHome(){
    this.navCtrl.navigateForward("home");
  }

  navToMenu(){
    this.navCtrl.navigateForward("menu");
  }
  navToProperties(){
    this.navCtrl.navigateForward("properties");
  }
  navToProfile(){
    this.navCtrl.navigateForward("profile");
  }
}
