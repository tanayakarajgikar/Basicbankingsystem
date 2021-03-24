function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openTransferHistory() {
    document.getElementById("history").style.display = "block";
}

function closeTransferHistory() {
    document.getElementById("history").style.display = "none";
}




function sendMoney(){
    var EnterSenderName = document.getElementById("EnterSenderName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var EnterReceiverName = document.getElementById("EnterReceiverName").value;
    
    var SenderBalance =parseInt(document.getElementById(EnterSenderName).innerHTML);
    if (enterAmount > SenderBalance) {
        alert("Insufficient Balance.")
     }
    else {
        var ReceiverBalance =parseInt(document.getElementById(EnterReceiverName).innerHTML) + enterAmount;
        
        var SenderBalance = parseInt(document.getElementById(EnterSenderName).innerHTML) - enterAmount;
        document.getElementById(EnterSenderName).innerHTML = SenderBalance;
        document.getElementById(EnterReceiverName).innerHTML = ReceiverBalance;
        alert(`Successful Transaction !!  
        ${enterAmount} is sent to ${EnterReceiverName}`)
        
        var createLiTag = document.createElement("li");
       var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender ${EnterSenderName} to recepient ${EnterReceiverName} on ${Date()}.`);
       createLiTag.appendChild(textNode);
       var element = document.getElementById("transactionHistory");
       element.insertBefore(createLiTag, element.firstChild);
    }
}
    




 





