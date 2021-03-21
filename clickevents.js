

    const buttons = document.querySelectorAll("button");
   const body = document.querySelector("body");


  document.getElementById("Foo").addEventListener("click", function() {
 const h3 = document.createElement('h3');
  h3.textContent = "Foo" ;
  body.appendChild(h3);
 
    document.getElementById("Bar").addEventListener("click", function() {
    const h3 = document.createElement('h3');
    h3.textContent = "Bar" ;
    body.appendChild(h3);

    document.getElementById("FooBar").addEventListener("click", function() {
        const h2 = document.createElement('h2');
        h2.textContent = "FooBar" ;
        body.appendChild(h2);
  });


})
  })
