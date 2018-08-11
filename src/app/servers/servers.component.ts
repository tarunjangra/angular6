import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gi-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!";
  serverName: string = 'Test server!';
  serverCreated: boolean = false;
  availableServers = ['Server one','Server two'];

  displayDetails: boolean = false;
  buttonLog = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.availableServers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event){
    // HTMLInputElement is casting event.target object to HTML input element to be
    // interpreted by IDE propertly.
   this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickDisplayDetails(){
    this.displayDetails = !this.displayDetails;
    this.buttonLog.push({
      action: 'button clicked',
      time: new Date()
    });
  }

}
