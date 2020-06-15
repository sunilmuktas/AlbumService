# AlbumService
AlbumService
installation :


step1 : npm install typescript express ts-node
step2 :npm install bodyParser 
step3 :npm install mongoose

MongoDB : Install Mongodb locally ,and create Test database

Start the Application : npm run dev

API List : 

getAllArtists : http://localhost:5000/artist , method :get

getArtistById : http://localhost:5000/artist/:id method :get

createArtist : http://localhost:5000/artist , method :post 


sample Json :
{
   "nameOfTheArtist": "Sunil",
  "artistType": "Singer"
}

deleteArtist : http://localhost:5000/artist/:id , method :delete 


updateArtist :http://localhost:5000/artist/:id method :patch
{
   "nameOfTheArtist": "Sunil",
  "artistType": "Singer"
}

