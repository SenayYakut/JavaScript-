

function onClick(event){
    //Prevent the defalt action
    event.preventDefault();

    // Store the link of the clicked anchor
    const url = event.target.href;
    // Update the results by sending an Ajax request
    //to the URL specified in the "url" variable

    //Update the anchors in the pagination widget
    //and remove the event listener on the deleted anchors

    console.log("Fetching results at " + url);
}

const anchors= document.querySelectorAll(".pagination a");

for (let i =0; i<anchors.length; i++){
    anchors[i].addEventListener("click", onClick);
}