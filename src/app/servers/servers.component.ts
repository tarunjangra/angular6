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
<<<<<<< HEAD
  availableServers = ['Test Server','new server'];
=======
  availableServers = ['Server one','Server two'];

  displayDetails: boolean = false;
  buttonLog = [];
>>>>>>> dd5cef0140c22b7333a8835478d46b3c3a2946ea

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
<<<<<<< HEAD
=======
    this.serverCreated = true;
>>>>>>> dd5cef0140c22b7333a8835478d46b3c3a2946ea
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
