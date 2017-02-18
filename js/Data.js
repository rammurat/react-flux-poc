module.exports = {
  // Load data into local storage 
  init: function() {
    localStorage.clear();
    localStorage.setItem('chartData', JSON.stringify([
      {
        title: 'Gaming Consoles Sold in 2016',
        list: [
                { y: 4181563, indexLabel: "PlayStation 3" },
                { y: 2175498, indexLabel: "Wii" },
                { y: 3125844, indexLabel: "Xbox 360" },
                { y: 1176121, indexLabel: "Nintendo DS"},
                { y: 1727161, indexLabel: "PSP" },
                { y: 4303364, indexLabel: "Nintendo 3DS"},
                { y: 1717786, indexLabel: "PS Vita"}
            ]
      }
    ]));
  }

};