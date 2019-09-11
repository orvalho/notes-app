## Notes app

I built this project in order to practice using Context API, React Native, REST API.

Using this app user can:
- see a list of notes
- read a note
- add a new note
- update note
- delete note

#### Install & Start

    $ git clone https://github.com/orvalho/notes-app
    // client
    $ cd notes-app/client
    $ npm install
    // run client
    $ npm start

    // server
    $ cd notes-app/server
    $ npm install
    // run server
    $ npm run db
    // run ngrok 
    $ npm run tunnel
    // go into client/api/jsonServer.js file and add a URL provided by ngrok

#### App

<img src="client/assets/index-no-notes.png" alt="index-no-notes" width="200"/>
<img src="client/assets/index.png" alt="index" width="200"/>
<img src="client/assets/show.png" alt="show" width="200"/>
<img src="client/assets/create.png" alt="create" width="200"/>
<img src="client/assets/edit.png" alt="edit" width="200"/>

#### Stack

-   react
-   expo
-   react-native
-   react-navigation
-   react-navigation-stack
-   @expo/vector-icons
-   axios
-   json-server
-   ngrok