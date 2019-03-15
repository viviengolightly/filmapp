# filmapp

Simple web application to add movies to a data base, display movies details and search a movie by title.

Installation required to run the app:

Install git on your laptop.

Install homebrew.

Install mongo using homebrew: brew install mongodb.

Install npm.

To run the app on your laprop:

1. Clone the repository usiing git clone <link_to the repository>.

2. Create a db directory: 

`$ sudo mkdir -p /data/db`

3. 
Change the /data/db directory premission by running: 

$ sudo chown -R \`id -un\` /data/db

4. Start Mongo by running in a terminal: 

`$ mongod.`

5. Import MongoDB data to the db: cd into the film-api folder and run: 

`$ mongoimport --db FilmsDB --collection films --drop --file ./importData.json --jsonArray`

6. In the film-api directory firt run: 

`$ npm install.`

7. After the installation is completed run: 

`$ npm start`

8. Go to the new terminal window and cd to the film_app directory

Do: 
`$ npm install`

Then:
`$ npm start`

9. Open browser and type the address: http://localhost:3000

