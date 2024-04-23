# Ex.08 Design of a Standard Calculator
## Date: 23.04.2024

## AIM:
To design a web application for a standard calculator with minimum five operations.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for creating attractive colors.

### Step 4:
Write JavaScript program for implementing five different operations.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
### Index.html:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
   <div class="row mx-auto text-center" style="width: 25rem;border: 1px solid black;" id="main" >
   <div class="text-dark my-50px">
    <h5>Aishwarya T M 212221220002</h5>
   </div>
   <div class="col-12 my-4">
        <input type="text" name="" id="output" style="width: 100%; height: 50px;border-radius: 25px;">
   </div>
   <div class="col-2 m-3 btn btn-primary rounded-2" id="btn" onclick="fn(this)">%</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" id="btn" onclick="fn(this)">CE</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" id="btn"onclick="fn(this)">C</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" id="btn" id="back" onclick="fn(this)"><i class="bi bi-backspace"></i></div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">1/x</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">x<sup>2</sup></div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">√</div>
    <div class="col-2 m-3 btn btn-primary rounded-2"  id="btn" onclick="fn(this)">/</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">7</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">8</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">9</div>
   <div class="col-2 m-3 btn btn-primary rounded-2"  id="btn" onclick="fn(this)">*</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">4</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">5</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">6</div>
   <div class="col-2 m-3 btn btn-primary rounded-2"  id="btn" onclick="fn(this)">-</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">1</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">2</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" onclick="fn(this)">3</div>
   <div class="col-2 m-3 btn btn-primary rounded-2" id="btn" onclick="fn(this)">+</div>
   <div class="col-5 m-3 btn btn-primary rounded-2" onclick="fn(this)">0</div>
   <div class="col-2 m-3 btn btn-primary rounded-2"   onclick="fn(this)">.</div>
   <div class="col-2 m-3 btn btn-primary rounded-2"  id="btn" onclick="fn(this)">=</div>
   
</div>

<script src="app.js"></script>

</body>
</html>
```

### Style.css:
```
body{
    margin-top: 100px;
}
h5{
    padding-top: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgb(197, 31, 31);
}
#btn
{
    background-color: rgb(134, 6, 141);
}
#btn:hover{
    background-color: #7a1fa2;
}
#main
{
    background-color: rgb(252, 230, 233);
}
```

### App.js:
```
function fn(e) {
    var output = document.getElementById("output");
    if (e.innerHTML == '=') {
        output.value = eval(output.value);
    } else if (e.innerHTML == 'C' || e.innerHTML == 'CE') {
        output.value = '';
    } else if (e.id == 'back') {
        var v = output.value;
        output.value = v.substring(0, v.length - 1);
    } 
    else if (e.innerHTML == '√') { 
        output.value = Math.sqrt(parseFloat(output.value));
    } 
    else if (e.innerHTML == 'x<sup>2</sup>') { 
        output.value = Math.pow(parseFloat(output.value), 2); 
    }
    else if (e.innerHTML == '1/x') { 
        output.value = 1 / parseFloat(output.value);
    }
        else {
        output.value += e.innerHTML;
    }
}
```

## OUTPUT:
 ![Screenshot 2024-04-23 085422](https://github.com/Aishwarya-TM/Web-Ex-8/assets/127846109/0b43c7c2-1611-4488-ac3b-a400b4bce071)

    ![Screenshot 2024-04-23 085455](https://github.com/Aishwarya-TM/Web-Ex-8/assets/127846109/bcd457bd-5372-4183-9891-58e7d71bd7c8)

 ![Screenshot 2024-04-23 085518](https://github.com/Aishwarya-TM/Web-Ex-8/assets/127846109/aa61a990-2637-410a-8956-19a6399e82fb)


## RESULT:
The program for designing a standard calculator using HTML and CSS is executed successfully.
