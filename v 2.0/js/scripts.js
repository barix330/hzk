VK.init({
    apiId: 6785438
});

var tasks = [];
var index = 0;
years = [...Array(2010).keys()].slice(1900);
imgsr = document.getElementById("imageid");
getid = document.getElementById("vkid");
getel = document.getElementById("info");

apiCall();

function sexChoice() {
    returneds = document.getElementById("sexch").value;
    return returneds;
}
returneds = sexChoice();

var input = document.getElementById("idButton");
input.onclick = function processNextTask() {
    if (++index == tasks.length) {
        // no more tasks
        return;
    }

    apiCall("", function (has_photo, photo_max_orig, id, first_name, last_name, bdate, sex, city) {
        if (has_photo == 0) {
            setTimeout(processNextTask);
            return;
        }

        switch (returneds) {
            case "1":

                imgsr.src = photo_max_orig;
                getid.href = "https://vk.com/id" + id;
                getel.innerHTML = first_name + " " + last_name;

                if (typeof bdate != 'undefined') {

                    byear = bdate.slice(-4);
                    yest = years.indexOf(parseInt(byear, 10));
                    if (yest != -1) {
                        getel.append(", ", 2018 - byear);

                    }
                }

                if (typeof city != 'undefined') {
                    getel.append(", ", city.title);
                }

                break;

            case "2":

                if (sex != 1) {
                    setTimeout(processNextTask);
                    return;
                }

                imgsr.src = photo_max_orig;
                getid.href = "https://vk.com/id" + id;
                getel.innerHTML = first_name + " " + last_name;


                if (typeof bdate != 'undefined') {

                    byear = bdate.slice(-4);
                    yest = years.indexOf(parseInt(byear, 10));
                    if (yest != -1) {
                        getel.append(", ", 2018 - byear);
                    }
                }

                if (typeof city != 'undefined') {
                    getel.append(", ", city.title);
                }

                break;


            case "3":

                if (sex != 2) {
                    setTimeout(processNextTask);
                    return;
                }
                imgsr.src = photo_max_orig;
                getid.href = "https://vk.com/id" + id;
                getel.innerHTML = first_name + " " + last_name;


                if (typeof bdate != 'undefined') {

                    byear = bdate.slice(-4);
                    yest = years.indexOf(parseInt(byear, 10));
                    if (yest != -1) {
                        getel.append(", ", 2018 - byear);
                    }
                }

                if (typeof city != 'undefined') {
                    getel.append(", ", city.title);
                }
                break;
        }
    });
}

function apiCall(a, fn) {
    VK.Api.call('users.get', {
            user_ids: Math.floor((Math.random() * 520989999) + 1),
            fields: "has_photo, photo_max_orig, id, first_name, last_name, bdate, sex, city",
            v: "5.73",
            access_token: "d5ba0a1ad5ba0a1ad5ba0a1a10d5dd7756dd5bad5ba0a1a89a831340044035576a1d37d"
        },

        function (r) {
            if (r.response) {

                fn(r.response[0].has_photo, r.response[0].photo_max_orig, r.response[0].id,
                    r.response[0].first_name, r.response[0].last_name, r.response[0].bdate, r.response[0].sex, r.response[0].city);
            } else {
                console.log("error");
                return;
            }

        });
}