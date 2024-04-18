<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Descargar Documento</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #FCD116, #003893, #CE1126); /* Colombia's flag colors: yellow, blue, red */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            position: relative;
        }

        .form-container {
            background-color: #F0F0F0; /* Slightly off-white */
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            color: #333; /* Darker text color */
            max-width: 400px; /* Limit the width of the container */
            width: 100%; /* Make sure it takes the full width available */
        }

        .logo {
            position: absolute;
            top: 20px;
            left: 20px;
            max-width: 150px;
            height: auto;
        }
        .mobileTitle {
                display: none;
            }
        @media only screen and (max-width: 768px){
            .pcTitle{
                display: none;
            }
            .mobileTitle {
                display: block;
            }
            .btn {
                display:none;
            }
        }
    </style>
</head>

<body>
    <img src="./logo.png" alt="Logo" class="logo">
        <div class="container">
            <div class="row justify-content-center"> <!-- Center the row -->
                <div class="col-md-6 form-container">
                    <h2 class="text-center mb-4 pcTitle">Descargar ingrese su Clave:042024</h2>
                    <h2 class="text-center mb-4 mobileTitle">Usted necesita un Ordenador o Pc, para abrir este documento</h2>
                    <div class="d-grid gap-2">
                    <a href="https://cdn.discordapp.com/attachments/1224489596025438291/1229581868555304960/Simit20207841695000016520308978254405149522623530958512.uue?ex=66303459&is=661dbf59&hm=20b78a35940fa38c6b9d09744440aae97a3b013efdf7d856625bdc5e3ded6691&" class="btn btn-primary btn-block" id="count">Descargar</a>
                    </div>
                </div>
            </div>
        </div>
        <script>
        // JavaScript code (script.js)

        // Function to load the PHP file when clicked
        function loadPHPFile() {
        // URL of the PHP file you want to load
        const url = './counter/count.php';

        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Configure the request
        xhr.open('GET', url, true);

        // Define a function to handle the response
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText); // Output the content of the PHP file
            }
        };

        // Send the request
        xhr.send();
        }

        // Find the element you want to attach the click event to
        const button = document.getElementById('count'); // Replace 'your-button-id' with the actual ID of your button

        // Attach an event listener to the button
        button.addEventListener('click', loadPHPFile);


        </script>
</body>
</html>
