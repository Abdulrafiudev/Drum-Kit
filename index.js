
//This is a comment

document.querySelectorAll(`button`).forEach((buttons) => {
  buttons.addEventListener(`click`, function(){
    // The this object can't work with arrow functions.It is similar to the event object because it basically allows us to detect which button or elements were clicked.
    let button_inner_html = this.innerHTML
    
   
    play_audio(button_inner_html)
    animated_button(button_inner_html)
  
  })
})

document.body.addEventListener(`keydown`, (event) => {
  let button_inner_html = event.key
 
  play_audio(button_inner_html)
  animated_button(button_inner_html)
})




function play_audio(button_inner_html){
  //let audio = new Audio(`sounds/tom-1.mp3`)
  //audio.play()
  switch (button_inner_html){
    case `w`:
      let tom_1 = new Audio(`sounds/tom-1.mp3`)
      tom_1.play()
      break;

    case `a`:
      let tom_2 = new Audio(`sounds/tom-2.mp3`)
      tom_2.play()
      break;

    case `s`:
      let tom_3 = new Audio(`sounds/tom-3.mp3`)
      tom_3.play()
      break;

    case `d`:
      let tom_4 = new Audio(`sounds/tom-4.mp3`)
      tom_4.play()
      break;

    case `j`:
      let snare = new Audio(`sounds/snare.mp3`)
      snare.play()
      break;

    case `k`:
      let crash = new Audio(`sounds/crash.mp3`)
      crash.play()
      break;

    case `l`:
      let kick = new Audio(`sounds/kick-bass.mp3`)
      kick.play()
      break;

    default: console.log(button_inner_html)
  }
  
}
let time_interval_id;
function animated_button(button_inner_html){

  document.querySelector(`.${button_inner_html}`).classList.add(`pressed`)

  clearTimeout(time_interval_id)

  time_interval_id = setTimeout(() => {
    document.querySelector(`.${button_inner_html}`).classList.remove(`pressed`)
  }, 100)

}