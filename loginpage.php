<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
 
 <link rel="stylesheet" href="./login.css">

</head>
<body>
    
    <center><h1><u>A.P.CYBER WORKS </u></h1></center>
    
    <center>
  <div class="container">
    <h2>Login</h2><br>
    <form >
     <label for="password">Password:</label><br>
      <input type="password" id="password" name="password"><br><br>
      <button onclick="login(event)">Login</button>
      <p id="error"> </p>
      <p id="reset"></p>
    </form>
  </div>
</center>
  <script>
    function login(event) {
      event.preventDefault();
      
      id_password="823518"
      
      const password = document.getElementById("password").value;
       
      if ( password == id_password) {
        // After successful login
        history.replaceState({}, '', '/');
        window.location.href = "./home/home.html";
        }
        else {
  document.getElementById("error").innerHTML = "Invalid username or password";
  document.getElementById("reset").innerHTML = "<button type='reset'> reset </button>";
  setTimeout(function() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("reset").innerHTML = "";
  }, 3000);
 }
   }
      
  </script>
</body>
</html>