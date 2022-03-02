window.document
.querySelector("#dest-details")
.addEventListener("submit", handleSubmissions);

function handleSubmissions(e) {
    e.preventDefault();

    let dest = e.target.elements["dest"].value;
    let location = e.target.elements["location"].value;
    let desc = e.target.elements["description"].value;

    resetFields(e.target);

    let card = createCard( dest, location, desc);

    let cardContainer = document.querySelector("#dest-container");

    if(cardContainer.children.length === 0) {
        document.querySelector("#title").innerHTML = "My WishList";
    }

    window.document
    .querySelector("#dest-container")
    .appendChild(card);

    function createCard(destination, location, desc) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.style.width = "15rem";
        card.style.height = "fit-content";
        card.style.margin = "20px;";
      
        let img = document.createElement("img");
        img.setAttribute("class", "card-img-top");
        img.setAttribute("alt", destination);

        let photo = getRandomImage(destination);
        console.log(photo);
        
        img.setAttribute("src", photo);
      
        card.appendChild(img);
      
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
      
        let cardTitle = document.createElement("h5");
        cardTitle.setAttribute("class", "card-title");
        cardTitle.innerText = destination;
        cardBody.appendChild(cardTitle);
      
        let cardSubtitle = document.createElement("h6");
        cardSubtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);
      
        if (description.length !== 0) {
          let cardText = document.createElement("p");
          cardText.setAttribute("class", "card-text");
          cardText.innerText = desc;
          cardBody.appendChild(cardText);
        }
      
        let buttonsContainer = document.createElement("div");
        buttonsContainer.setAttribute("class", "button-container");
      
        let editButton = document.createElement("button");
        editButton.setAttribute("class", "btn btn-warning");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", editDestination);
      
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "btn btn-danger");
        deleteButton.innerText = "Remove";
        deleteButton.addEventListener("click", removeDestination);
      
        buttonsContainer.appendChild(editButton);
        buttonsContainer.appendChild(deleteButton);
      
        cardBody.appendChild(buttonsContainer);
      
        card.appendChild(cardBody);
      
        return card;
      }

      function resetFields(form) {
        for( let i = 0; i < form.length; i++) {
            form.elements[i].value = "";
        }
    }

      function editDestination(e) {
        let cardBody = e.target.parentElement.parentElement;
        let title = cardBody.children[0];
        let subTitle = cardBody.children[1];
      
        let card = cardBody.parentElement;
        let photo = card.children[0];
      
        let newTitle = window.prompt("Enter new name");
        let newSubtitle = window.prompt("Enter new location");
        let newPhoto = window.prompt("Enter new photo url");
      
        if (newTitle.length > 0) {
          title.innerText = newTitle;
        }
      
        if (newSubtitle.length > 0) {
          subTitle.innerText = newSubtitle;
        }
      
        if (newPhoto.length > 0) {
          photo.setAttribute("src", newPhoto);
        }
      }
      
      function removeDestination(e) {
        let cardBody = e.target.parentElement.parentElement;
        let card = cardBody.parentElement;
        card.remove();
      }
      

}