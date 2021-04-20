let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    
    <header>
        <div class="jumbotron jumbotron-fluid text-center">
            <div class="container">
              <h1 class="display-4">Team Generator</h1>
            </div>
          </div>
    </header>

    <main>`

const createHTML = (arr) => {
    arr.forEach(employee => {
        switch (employee.getRole()) {

            case "Manager":
                managerCard(employee);
                break;

            default:
                internCard(employee);
                break;

            case "Engineer":
                engineerCard(employee);
                break;
        }
    });
    return html += `</main>

        </body>
        </html>`
}

const managerCard = (manager) => {
    return html +=
        `<div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">${manager.getName()}</h5>
       <h6 class="card-subtitle mb-2">${manager.getRole()} <i class="fas fa-coffee"> </i></h6>
       <p class="card-text"></p>
       
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Id: ${manager.getId()}</li>
           <li class="list-group-item">Email: ${manager.getEmail()}</li>
           <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
         </ul>
       
     </div>
   </div>`
}


const engineerCard = (engineer) => {
    return html +=
        `<div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">${engineer.getName()}</h5>
       <h6 class="card-subtitle mb-2">${engineer.getRole()} <i class="fas fa-tools"> </i></h6>
       <p class="card-text"></p>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Id: ${engineer.getId()}</li>
           <li class="list-group-item">Email: ${engineer.getEmail()}</li>
           <li class="list-group-item">Github: ${engineer.getGitHub()}</li>
         </ul>
       
     </div>
   </div>`
}


const internCard = (intern) => {
    return html +=
        `<div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">${intern.getName()}</h5>
       <h6 class="card-subtitle mb-2">${intern.getRole()} <i class="fas fa-user-graduate"> </i></h6>
       <p class="card-text"></p>
       
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Id: ${intern.getId()}</li>
           <li class="list-group-item">Email: ${intern.getEmail()}</li>
           <li class="list-group-item">School: ${intern.getSchool()}</li>
         </ul>
       
     </div>
   </div>`
}

module.exports = createHTML;