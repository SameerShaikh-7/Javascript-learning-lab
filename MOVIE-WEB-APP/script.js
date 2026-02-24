let movieData = JSON.parse(localStorage.getItem("movies")) || [];
let currentEdit = null;

// save movies
function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movieData));
}

// show all movies
function showMovies(arr) {

    const list = document.getElementById("movieList");
    list.innerHTML = "";

    arr.forEach(function (item, i) {

        const card = document.createElement("div");
        card.className = "movie";

        card.innerHTML = `
            <img src="${item.poster}" alt="movie poster">
            <div class="movie-details">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <button class="edit-btn" onclick="editMovie(${i})">Edit</button>
                <button class="delete-btn" onclick="removeMovie(${i})">Delete</button>
            </div>
        `;

        list.appendChild(card);
    });
}

// add new movie
function addMovie() {

    const nameInput = document.getElementById("movieName");
    const descInput = document.getElementById("movieDesc");
    const fileInput = document.getElementById("moviePoster");

    let name = nameInput.value.trim();
    let desc = descInput.value.trim();

    if (!name || !desc) {
        alert("Fill Properly !");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

        let posterImg = e.target.result;

        if (currentEdit === null) {
            movieData.push({
                name: name,
                desc: desc,
                poster: posterImg
            });
        } else {
            movieData[currentEdit].name = name;
            movieData[currentEdit].desc = desc;

            if (posterImg) {
                movieData[currentEdit].poster = posterImg;
            }

            currentEdit = null;
        }

        saveMovies();
        showMovies(movieData);

        nameInput.value = "";
        descInput.value = "";
        fileInput.value = "";
    };

    if (fileInput.files[0]) {
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        reader.onload({ target: { result: movieData[currentEdit]?.poster } });
    }
}

// edit movie
function editMovie(index) {
    document.getElementById("movieName").value = movieData[index].name;
    document.getElementById("movieDesc").value = movieData[index].desc;
    currentEdit = index;
}

// delete movie
function removeMovie(index) {
    movieData.splice(index, 1);
    saveMovies();
    showMovies(movieData);
}

// search
function searchMovie() {
    let text = document.getElementById("search").value.toLowerCase();

    let filteredMovies = movieData.filter(function (m) {
        return m.name.toLowerCase().includes(text);
    });

    showMovies(filteredMovies);
}

// initial load
showMovies(movieData);