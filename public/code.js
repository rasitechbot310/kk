
const btnSearch = document.getElementById("starSearch");
const input = document.getElementById("searchInput");

btnSearch.addEventListener("click", (e) => {
    const searchBox = document.getElementById("searchBox");
    if(searchBox.offsetWidth < 1) {
        searchBox.classList.add("searchBoxActive");
        input.focus()
    } else {
        input.value = null;
        input.onfocus  = false;
        searchBox.classList.remove("searchBoxActive");

        document.getElementById("content").style.display = "none";

    }
});

function getData(query) {
    console.clear();
    console.log(query)
    fetch("http://localhost:3000?nama=" + query, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        console.log(response.responseTime)
        console.log(response.data)
    });
}


function selectLink(param) {
    const list = document.querySelector(".contentLinkList");
    if(param == "up") {
        const link = document.querySelector(".contentLinkList").children;
        const listLink = ((arr) => {
            const items = [];
            for (let i = 0; i < arr.length; i++) {
                items.push({index: i, id: arr[i].id, active: arr[i].classList[1] == "contentSugActive"});
            };
            return items;
        })(link);
        const activelink = listLink.filter(item => {
            return item.active
        });
        if(activelink[0].index != 0) {
            document.getElementById(activelink[0].id).classList.remove("contentSugActive");
            document.getElementById("contentSug" + (activelink[0].index - 1)).classList.add("contentSugActive");
            document.querySelector(".contentLinkList").scrollTop -= 34;
        } else {
            document.getElementById("contentSug0").classList.remove("contentSugActive");
            document.querySelector(".contentLinkList").scrollTop = (34 * listLink.length);
            document.getElementById("contentSug" + (listLink.length - 1)).classList.add("contentSugActive");
        }
    } else {
        const listLink = ((arr) => {
            const items = [];
            for (let i = 0; i < arr.length; i++) {
                items.push({index: i, id: arr[i].id, active: arr[i].classList[1] == "contentSugActive"});
            };
            return items;
        })(document.querySelector(".contentLinkList").children);

        const activelink = listLink.filter(item => {
            if(item.active == true) {
                return item
            }
        })[0];
        if(activelink.index != listLink.length - 1) {
            document.getElementById(activelink.id).classList.remove("contentSugActive");
            document.getElementById("contentSug" + (activelink.index + 1)).classList.add("contentSugActive");
            document.querySelector(".contentLinkList").scrollTop += 34
        } else {
            document.getElementById("contentSug" + (listLink.length - 1)).classList.remove("contentSugActive");
            document.querySelector(".contentLinkList").scrollTop = 0;
            document.getElementById("contentSug0").classList.add("contentSugActive");
        }
    }
};


async function sugestionStart() {
    const text = document.getElementById("searchInput");
    const apiQust = "http://localhost:3000/q?nama=" + text.value;
    if(text.value.length > 0) {
        fetch(apiQust, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(response => response.json())
        .then(response => {
            const listLin = [];
            for (let index = 0; index < response.data.length; index++) {
                const element = response.data[index];
                listLin.push(element.nama);
            };
            console.clear()
            console.log(response.responTime);
            cetakList(listLin);

            // console.log(response.responTime);
            // cetakList(response.data.slice(0, 20))
        });
    }
};



input.addEventListener("keyup", key => {
    if(key.key === "Enter") {
        const listLink = ((arr) => {
            const items = [];
            for (let i = 0; i < arr.length; i++) {
                items.push({index: i, id: arr[i].id, active: arr[i].classList[1] == "contentSugActive"});
            };
            return items;
        })(document.querySelector(".contentLinkList").children);
        const activelink = listLink.filter(item => {
            if(item.active == true) {
                return item
            }
        })[0].id;
        const element = document.getElementById(activelink);
        getData(element.textContent);
    } else if(key.key != "ArrowUp" && key.key != "ArrowDown") {
        sugestionStart();
    };
});

input.addEventListener("keydown", key => {
    const content = document.getElementById("content");
    if (key.keyCode === 38 || key.keyCode === 40) {
        if(key.key === "ArrowUp") {
            selectLink("up");
        } else {
            selectLink("down");
        }
        key.preventDefault();
    } else if (key.key === "Backspace") {
        if(document.getElementById("searchInput").value.length === 1) {
            content.style.display = "none";
        };
    } else {
        if(document.getElementById("searchInput").value.length > -1) {
            content.style.display = "flex";
        };
    }
});



function cetakList(listLink) {
    const containerList = document.querySelector(".contentLinkList");
    containerList.innerHTML = null;
    for (let index = 0; index < listLink.length; index++) {
        const linkitem = listLink[index];
        if(index == 0) {
            const eleAc = `<div class="contentSug contentSugActive" id="contentSug0">${linkitem}</div>`;
            containerList.insertAdjacentHTML("beforeend", eleAc);
        } else {
            const element = `<div class="contentSug" id="contentSug${index}">${linkitem}</div>`;
            containerList.insertAdjacentHTML("beforeend", element);
        }
    };
    document.querySelector(".contentLinkList").scrollTop = 0;
};








