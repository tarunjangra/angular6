import { Component } from '@angular/core';

@Component({
    selector: 'gi-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
<<<<<<< HEAD
        color: white;
=======
      color: white;
>>>>>>> dd5cef0140c22b7333a8835478d46b3c3a2946ea
    }
    `]
})

export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = "offline";

    constructor(){
<<<<<<< HEAD
        this.serverStatus = Math.random() > 0.5?'online':'offline';
=======
      this.serverStatus = Math.random() > 0.5?'offline':'online';
>>>>>>> dd5cef0140c22b7333a8835478d46b3c3a2946ea
    }

    getServerStatus(){
      return this.serverStatus;
    }

    getColorByStatus(){
<<<<<<< HEAD
        return this.getServerStatus() === 'online'?'green':'red';
    }
    
=======
      return this.getServerStatus() === 'offline'?'red':'green';
    }


>>>>>>> dd5cef0140c22b7333a8835478d46b3c3a2946ea
}