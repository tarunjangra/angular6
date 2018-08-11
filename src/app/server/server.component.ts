import { Component } from '@angular/core';

@Component({
    selector: 'gi-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }
    `]
})

export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = "offline";

    constructor(){
        this.serverStatus = Math.random() > 0.5?'online':'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColorByStatus(){
        return this.getServerStatus() === 'online'?'green':'red';
    }
    
}