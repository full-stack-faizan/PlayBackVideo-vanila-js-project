let inputstatus = document.getElementById('inp')

let cover = document.getElementById('cover')

    inputstatus.addEventListener('click',(e)=>{
        let boxstatus = inputstatus.checked
        console.log(boxstatus)
        if(boxstatus=== true)
            {
             console.log('true')
             video.pause();
             cover.classList.toggle('toggle-cover')
             console.log(cover)

            }
            else if(boxstatus=== false)
            {
                video.play();
                cover.classList.remove('toggle-cover')
                console.log(cover)
                
            }
    })
    







// let video = document.getElementById('video')
// console.log(video)

// // if(boxstatus== 'false')
// // {
// //  video.pause();
// // }

// inputstatus.addEventListener('click',(e)=>{
   
   
// })
// window.addEventListener('click',()=>{
//     if(boxstatus=== true)
//     {
//      console.log('true')
//      video.pause();
//     }
//     else if(boxstatus=== false)
//     {
//      console.log('false')
//     }
// })