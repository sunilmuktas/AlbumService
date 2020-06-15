import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import Controller from './interfaces/controller.interface';
 
class App {
  public app: express.Application;
  private port:any;
 
  constructor(controllers: Controller[] ,port:any) {
    this.app = express();
    this.port=port;
    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
 
  private connectToTheDatabase() {
       mongoose.connect(`mongodb://localhost:27017/Test`);
  }
}

export default App;