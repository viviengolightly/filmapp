# filmapp

Simple web application to add movies to a data base, display movies details and search a movie by title.

Installation required to run the app:

Install git on your laptop.
Install homebrew.
Install mongo using homebrew: brew install mongodb.
Install npm.
To run the app on your laprop:

Clone the repository usiing git clone <link_to the repository>.
Create a db directory: $ sudo mkdir -p /data/db
Change the /data/db directory premission by running: sudo chown -R id -un /data/db
Start Mongo by running in a terminal: mongod.
Import MongoDB data to the db: cd into the film-api folder and run: mongoimport --db FilmsDB --collection films --drop --file ./importData.json --jsonArray
In the film-api directory firt run: npm install.
After the installation is completed run: npm start
Go to the new terminal window and cd to the film_app directory
Do: npm install
Then npm start
Open browser and type the address: http://localhost:3000
