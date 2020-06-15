import * as mongoose from 'mongoose';
import Artist from './artist.interface';
 
const artistSchema = new mongoose.Schema({
  nameOfTheArtist: String,
  artistType: String
});
 
const artistModel = mongoose.model<Artist & mongoose.Document>('Artist', artistSchema);
 
export default artistModel;