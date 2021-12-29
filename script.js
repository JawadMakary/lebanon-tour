// send input value using firebase

const sendToFirestore = (event) => {
  event.preventDefault();
  let text = document.getElementById("feedback");
  // e.preventDefault();
  db.collection("feedback").add({
    text: text.value,
    // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  text.value = "";
};

// get items to html

const getItems = () => {
  db.collection("feedback").onSnapshot((snapshot) => {
    // console.log(snapshot);
    let items = [];
    snapshot.docs.forEach((doc) => {
      // console.log(doc.data());
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    let itemsHTML = "";
    items.forEach((item) => {
      // console.log(item.text);
      itemsHTML += `
            <div class="feedback-item">
           
            <div class="feedback-text">

                ${item.text}
            </div>
        </div>
            `;
    });
    document.querySelector(".feedback-items").innerHTML = itemsHTML;
  });
};

getItems();
