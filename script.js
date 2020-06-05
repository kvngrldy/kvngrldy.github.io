
  let lubang = document.querySelectorAll('.spawn'); 
  let skor = document.querySelector('.skor');
  let diglets = document.querySelectorAll('.object');

  let score = 0;
  let spawnAkhir;
  let waktuHabis = false;
  
  //mengacak durasi muncul
  function waktuAcak(min, max) {
      return Math.round(Math.random() * (max - min) + min);
  }

  //mengacak lubang tempat spawn
  function spawnAcak(lubang) {
      let kode = Math.floor(Math.random() * lubang.length);
      let hole = lubang[kode];
      if (hole === spawnAkhir) {
          return spawnAcak(lubang);
      }
      spawnAkhir = hole;
      return hole;
  }

  //memunculkan diglet
  function keluar() {
      let time = waktuAcak(350, 800);
      let hole = spawnAcak(lubang);
      hole.classList.add('up');
      setTimeout(() => {
          hole.classList.remove('up');
          if (!waktuHabis) keluar();
      }, time);
  }

  //button mulai
  function mulai() {
      skor.textContent = 0;
      waktuHabis = false;
      score = 0;
      keluar();
      setTimeout(() => waktuHabis = true, 10000)
  }


  //register click perhitungan skor
  function hit() {
      score++;
      skor.textContent = score;
  }

  diglets.forEach(diglet => diglet.addEventListener('click', hit));

    

