import { Component } from '@angular/core';
import { User } from './user';
import { EnrollService } from './enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['angular','java','html','css'];
  topicHasError=true;
  submitted=false;
  errorMsg;
  userModel=new User('rob','rob@test.com',1234567890,'default','morning',true);

  constructor(private enrollService:EnrollService){}

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
  
  onSubmit(){
    this.submitted=true;
    this.enrollService.enroll(this.userModel)
    .subscribe(data=>console.log('success!',data),
               error=>this.errorMsg=error.statusText);
  }
}
