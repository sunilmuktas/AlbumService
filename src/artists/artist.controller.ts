import * as express from 'express';
import Arist from './artist.interface';
import artistModel from './artists.model';
import Controller from 'interfaces/controller.interface';
 
class ArtistController  implements Controller{
  public path = '/artist';
  public router = express.Router();
  private artist = artistModel;
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.get(this.path, this.getAllArtists);
    this.router.get(`${this.path}/:id`, this.getArtistById);
    this.router.patch(`${this.path}/:id`, this.modifyArtist);
    this.router.delete(`${this.path}/:id`, this.deleteArtist);
    this.router.post(this.path, this.createArtist);
  }
 
  private getAllArtists = (request: express.Request, response: express.Response) => {
    this.artist.find()
      .then((artists) => {
        response.send(artists);
      });
  }
 
  private getArtistById = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    this.artist.findById(id)
      .then((artists) => {
        response.send(artists);
      });
  }
 
  private modifyArtist = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    const artistData: Arist = request.body;
    this.artist.findByIdAndUpdate(id, artistData, { new: true })
      .then((artist) => {
        response.send(artist);
      });
  }
 
  private createArtist = (request: express.Request, response: express.Response) => {
    const artistData: Arist = request.body;
    const createdArtist = new this.artist(artistData);
    createdArtist.save()
      .then((savedArtist) => {
        response.send(savedArtist);
      });
  }
 
  private deleteArtist = (request: express.Request, response: express.Response) => {
    const id = request.params.id;
    this.artist.findByIdAndDelete(id)
      .then((successResponse) => {
        if (successResponse) {
          response.send(200);
        } else {
          response.send(404);
        }
      });
  }
}
 
export default ArtistController;