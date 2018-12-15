/*const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
	this.classList.toggle('active');
}

button.addEventListener('click', toggleClass);
button.addEventListener('transitionend', toggleClass);
*/
var tasks = [];
var index = 0;

VK.init({
  apiId: 6785438
});

apiCall();

document.getElementById("idButton").onclick = function processNextTask() {
    if (++index == tasks.length) {
        // no more tasks
        return;
    }
    apiCall("", function (has_photo, photo_max_orig, id) {
        if (has_photo == 0) {
            setTimeout(processNextTask);
            return;
		}
		else
		{
			document.getElementById("imageid").src=photo_max_orig;
            document.getElementById("vkid").href=("https://vk.com/id" + id);
            return;
		}
    });
}

function apiCall(a, fn) {
    VK.Api.call('users.get', {
        user_ids: Math.floor((Math.random() * 520989999) + 1),
        fields: "has_photo, photo_max_orig, id",
        v: "5.73",
        access_token: "d5ba0a1ad5ba0a1ad5ba0a1a10d5dd7756dd5bad5ba0a1a89a831340044035576a1d37d"
    }, 
    
    function (r) {
		if(r.response) {
            
        fn(r.response[0].has_photo, r.response[0].photo_max_orig, r.response[0].id);
            
        }
        else
        {
            console.log ("error");
            return;
        }
        
    });
}

















/*

document.getElementById("idButton").onclick = image;
document.getElementById("image").addEventListener("click", function() {
window.open('https://vk.com/id' + imageid);})


function image () {

	apiresults = API();
	imageid = apiresults[1];
	imagesrc = apiresults[0];
	document.getElementById("imageid").src=imagesrc;

}*/
