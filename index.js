const fs = require('fs')
const inquire = require('inquirer')

inquire
.prompt([
    {
        type: 'input',
        message: 'Please enter your name',
        name: 'profileName'
      },
      {
        type: 'input',
        message: 'Please enter your location',
        name: 'location'
      },
      {
        type: 'input',
        message: 'Please enter your bio',
        name: 'bio'
      },
      {
        type: 'input',
        message: 'Please enter your linkedIn',
        name: 'linkedin'
      },
      {
        type: 'input',
        message: 'Please enter your github url',
        name: 'github'
      }

    ])
.then ((response) => {

    console.log(response)
    const {profileName, location, bio,linkedin, github} = response

    console.log(profileName)
    console.log(location)
    console.log(bio)
    console.log(linkedin)
    console.log(github)
    
    createhtmlPage(profileName, location,bio,linkedin, github)






function createhtmlPage (profileName, location,bio,linkedin, github){

var htmlTemplate =`<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Profile Information</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <div class="container">
      <div class="row row-cols-1">
        <div class="col">Name:${profileName} </div>
        <div class="col">Location:${location} </div>
        <div class="col">Bio: ${bio}</div>
        <div class="col">Linkedin URL:${linkedin}</div>
        <div class="col">GitHub URL:${github}</div>
      </div>
    </div>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    
  </body>
</html>`


fs.writeFile('index.html',htmlTemplate, (err) =>
err ? console.error(err) : console.log('Success!')
);

}})