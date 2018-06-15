window.onload = function () {
    fetchEmails("inbox");
}

function logOut() {
    window.location.assign("logout.php")
}

function fetchEmails(mode) {
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("emailSection").innerHTML = this.responseText;
        }
    };
    var userID = document.getElementById("userID").value;
    var url = "inbox.php?userID=" + userID + "&mode=" + mode;
    httprequest.open("GET", url, true);
    httprequest.send("");

}

function composeMessage() {
    document.getElementById("emailSection").innerHTML =
        `<div id="compose"><form>
        <label for="toField">To:</label>
    	<input type="text" name="toField" id="toField" />
        <br />
        <label for="subjectField">Subject:</label>
        <input type="text" name="subjectField" id="subjectField" />
        <br />
        <br />
        <textarea name="message" rows="20" cols="50" placeholder="Write your message here"></textarea>
        <br />
        <button type="button">Send Message</button>
        </div>
    </form>
   </div>`;
}

function sendMessage() {
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("emailSection").innerHTML = this.responseText;
            alert("Message Sent");
            window.location.assign("email_view.php")
        }
    };
    
    var userID = document.getElementById("userID").value;
    var url = "scripts/inbox.php?userID=" + userID + "&mode=" + mode;
    httprequest.open("GET", url, true);
    httprequest.send("");

}

function ViewMessage() {
    document.getElementById("emailSection").innerHTML =
        `<div id="compose"><form>
        <label for="toField">From:</label>
    	<input type="text" name="toField" id="toField" readonly="true" />
        <br />
        <label for="dateSent">Sent:</label>
        <input type="text" name="dateSent" id="dateSent" readonly="true" />
        <br />
        <label for="subjectField">Subject:</label>
        <input type="text" name="subjectField" id="subjectField" readonly="true" />
        <br />
        <br />
        <textarea name="messageContent" id="messageContent" rows="20" cols="50" readonly="true" ></textarea>
        </form>
        </div>
    </form>
   </div>`;
}

function deleteMessage(userID, messageID, mode){
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            // Reloads page
            location.reload();
        }
    };
    var userID = document.getElementById("userID").value;
    var url = "inbox.php?userID=" + userID + "&mode=" + mode + "&messageID=" + messageID;
    httprequest.open("GET", url, true);
    httprequest.send("");
}

function singleView(userID, messageID, mode) {
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            ViewMessage();
            var results = JSON.parse(this.responseText);
            document.getElementById("toField").value = results.sender_name;
            document.getElementById("dateSent").value = results.date_sent;
            document.getElementById("subjectField").value = results.subject;
            document.getElementById("messageContent").value = results.body;

        }
    };
    var userID = document.getElementById("userID").value;
    var url = "inbox.php?userID=" + userID + "&mode=" + mode + "&messageID=" + messageID;
    httprequest.open("GET", url, true);
    httprequest.send("");

}