let  follow = document.getElementById("follow");
let  follow2 = document.getElementById("follow2");
let click = 0;

follow.onclick = () =>{
  if(click === 0){
    follow.innerHTML = "Unfollow";
    click = 1;
  }
  else if(click === 1){
    follow.innerHTML = "Follow";
    click = 0;
  }
}

follow2.onclick = () =>{
  if(click === 0){
    follow2.innerHTML = "Unfollow";
    click = 1;
  }
  else if(click === 1){
    follow2.innerHTML = "Follow";
    click = 0;
  }
}