import * as signalR from "@microsoft/signalr";

let connection = new signalR.HubConnectionBuilder()
  .withUrl("https://wirebrainchatserver.azurewebsites.net//chathub")
  .withAutomaticReconnect()
  .build();

export default connection;