
function request() {
  var n = document.getElementById("number").value;
  fetch('https://jsonplaceholder.typicode.com/posts/' + n)
  
    .then(function (response) {
      return response.json()
    })
    // .then(json => console.log(json))
    .then((response) => {
      document.getElementById("scrout").innerHTML = "\"userId\":" + response.userId +
        "<br>" + "\"id\":" + response.id + "<br>" + "\"title\":" + response.title + "<br>" + "\"body\":" +
        response.body + "<br>";

    })
}

// function comm(){
//   var n1=document.getElementById("number").value;
// // document.getElementById(response.id).addEventListener("click", function(){
//   fetch("https://jsonplaceholder.typicode.com/posts/" +n1+"/comments/")
//   .then(function(response)
//   {
//     return response.json(); })

//   .then((response) => {

//     //  console.log(response)
//    document.getElementById("scrout").innerHTML= "\"postId\":" + response.postId + "<br>" +"\"id\":" + response.id +
//     "<br>" +"\"name\":" +response.name+ "<br>" + "\"email\":" + response.email+ "<br>" + "\"body\":" +
//     response.body+"<br>";

//   })
// // })
// }
function comm() {
  var n1 = document.getElementById("number").value;
  fetch("https://jsonplaceholder.typicode.com/posts/" + n1 + "/comments/").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {
            var temp = "";
            data.forEach((u) => {
              temp += "<tr>";
              temp += "<td>" + u.postId + "</td>";
              temp += "<td>" + u.id + "</td>";
              temp += "<td>" + u.name + "</td>";
              temp += "<td>" + u.email + "</td>";
              temp += "<td>" + u.body + "</td></tr>";
              document.getElementById("comtable").innerHTML = temp;

            });         }
        }
      )
    }
  )
}
function alldata()
{
  fetch("https://jsonplaceholder.typicode.com/posts/").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {
            var temp = "";


            //  var comdata = document.createElement('button');
            //  comdata.innerHTML='comment'
            data.forEach((u) => {

              temp += "<tr>";
              temp += "<td>" + u.id + "</td>";
              temp += "<td>" + u.userId + "</td>";
              temp += "<td>" + u.title + "</td>";
              temp += "<td>" + u.body + "</td>";
              temp += "<td>" + '<input type="button" value="Comment" onclick="comm1('+u.id+')">' + "</td></tr>";
              document.getElementById("tablebody").innerHTML = temp;

            });

          }

        }
      )

    }
  )
}


function comm1(n2) {


  fetch("https://jsonplaceholder.typicode.com/posts/" + n2 + "/comments/").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {
            var temp = "";
            data.forEach((u) => {
              temp += "<tr>";
              temp += "<td>" + u.postId + "</td>";          
              temp += "<td>" + u.id + "</td>";
              temp += "<td>" + u.name + "</td>";
              temp += "<td>" + u.email + "</td>";
              temp += "<td>" + u.body + "</td>";
              document.getElementById("comtable").innerHTML = temp;
              
            });         }
        }
      )
    }
  )
}


//  var comdata = document.createElement('button');
//  comdata.innerHTML='comment'; 

//  var n1=document.getElementById("number").value;
//       fetch('https://jsonplaceholder.typicode.com/posts/')
//       .then(function(response){
//        return response.json()
//       })
//       // .then(json => console.log(json))
//     .then((response) => {
//       console.log(response)
//   document.getElementById("scrout").innerHTML="\"userId\":"+ response.userId  +
//   "<br>"  +"\"id\":" + response.id +"<br>" + "\"title\":" +response.title + "<br>" + "\"body\":"+
//   response.body+"<br>";

//   document.body.appendChild(comdata);
//   comdata.id= response.id;
//   document.getElementById(response.id).addEventListener("click", function(){
//     fetch("https://jsonplaceholder.typicode.com/posts/"+n1+"/comments/")
//   .then(function(response)
//   {
//     return response.json();  })
//   .then((response) => {
//     var a=null;
//     for(const res of response){
//     console.log(res)
//     document.getElementById("comment").innerHTML= "\"postId\":" + res.postId + "<br>" +"\"id\":" + res.id +
//     "<br>" +"\"name\":" +res.name+ "<br>" + "\"email\":" + res.email+ "<br>" + "\"body\":" +
//     res.body+"<br>";
//     }
//     document.getElementById("comment").innerHTML=a;
//   })
//   })
//   }) 


