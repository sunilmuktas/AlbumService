import App from './app';
import ArtistController from './artists/Artist.Controller';
 
const app = new App(
  [
    new ArtistController(),
  ],
  5000,
);
 
app.listen();