class HTMLGenerator{


constructor(){
}

makeTheHtml(teamArray){ 
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>My Portfolio</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
    <body class="container text-white bg-info justify-content-center">
        <div class="row bg-dark">
            <h1>My Portfolio</h1>
                <p>Hello, my name is $ and I am located in $.</p>
                <div class= "row">
                    <h2>BIO</h2>
                    <blockquote class="bg-light text-dark ">
                    <p>$</p>
                    </blockquote>
                </div>
        </div>
        <footer class="bg-dark m-4 mx-auto p-4">
            <h3>LINKED IN:</h3>
            <p class="bg-light text-dark ">$</p>
            <h3>GitHub Profile:</h3>
            <p class="bg-light text-dark ">$</p>

    </body>
</html>`;


}


}

export default HTMLGenerator;