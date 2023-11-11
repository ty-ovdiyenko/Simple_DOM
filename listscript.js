function classChange(){
  let heading = document.getElementById("originalHeading"); 
  let list = document.getElementById("originalList");

  if (heading.id == "originalHeading") {
  heading.id = "newHeading";
    } 
  else {
  heading.id = "originalHeading";
    }

  if (list.id == "originalList") {
  list.id = "newList";
    } 
  else if (list.id == "newList"){
  list.id = "originalList";
    }
}
