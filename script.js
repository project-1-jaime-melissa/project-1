const form = document.querySelector('form');

//uses getDate code from my juno-javascript project-1
function getDate() {

    //list of months
    const monthList = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  
    const weekdayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    //create date variable
    let date = new Date();
    //get day of week in String form
    const weekday = weekdayList[date.getDay()];
    //gets month in String form
    const month = monthList[date.getMonth()];
    //gets day of the month
    const day = date.getDate();
    //gets year
    const year = date.getFullYear();
    //html to display
    const dateHtml = `${weekday} ${month} ${day}, ${year}`;
    
    return dateHtml;
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const comment = document.querySelector('textarea').value;

    const currentDate = getDate();

    console.log(currentDate);

    const appendHtml = document.querySelector('.comment-container:last-child');
   appendHtml.innerHTML = ` <div class="image-container">
   <img src="./assets/comment-2.jpg" alt="profile picture of woman">
</div>
<div class="text-container">
   <h5>${currentDate} by ${name}</h5>
   <p>${comment}</p>
</div>`;
})