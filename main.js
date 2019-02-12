// Helper Variables
const album_path = '/album-art/'
const song_path = '/songs/'




// =================================================
// Actions
remove('.no-js-alert')
populate_music_list()
populate_music_list()
populate_music_list()









// =================================================
// Helper Functions


function populate_music_list() {
    const music_list = document.querySelector('.music-list')

    organizer.forEach( (item) => {
        music_list.insertAdjacentHTML('beforeend',  `
            <li>
                <h2> ${item.song_name} </h2>
                -
                <p> ${item.artist} </p>

                <img src="${album_path + item.album_art_name}" alt="album art">
            </li>
        `)
    })

    console.log(album_path)
}

function remove(selector) {
    const alert = document.querySelector(selector)
    alert.style.display = 'none'
}