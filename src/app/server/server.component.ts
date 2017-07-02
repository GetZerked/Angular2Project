
import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    //template: '../server/server.component.html'
    templateUrl: './server.component.html',
    //styles: [`h3{ color:blue; }`];
    styleUrls: ['./server.component.css']
})


export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = "offline";

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    getServerStatus(){
        return this.serverStatus;
    }
}