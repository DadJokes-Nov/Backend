# Dads Jokes Backend

# TO RUN SERVER LOCALLY 

1. clone project
2. Run npm install to bring in dependencies 
3. npm run migrate to download sqlite3 database
4. npm start will start the server.

server will run locally on  http://localhost:4300/


# DEPLOYED SERVER 
Server is deployed to heroku via  https://dad-jokes-2019.herokuapp.com/

# ENDPOINTS 
1. Register - https://dad-jokes-2019.herokuapp.com/api/auth/register
2. Login -  https://dad-jokes-2019.herokuapp.com/api/auth/login
3. Get jokes (public) - https://dad-jokes-2019.herokuapp.com/api/jokes
4. Get jokes (private) - https://dad-jokes-2019.herokuapp.com/api/auth/jokes
5. Get jokes by ID - https://dad-jokes-2019.herokuapp.com/api/auth/jokes/{id}
6. Add jokes -  https://dad-jokes-2019.herokuapp.com/api/auth/jokes
7. Edit jokes list -  https://dad-jokes-2019.herokuapp.com/api/auth/jokes/{id}
8. Delete jokes -  https://dad-jokes-2019.herokuapp.com/api/auth/jokes/{id}

