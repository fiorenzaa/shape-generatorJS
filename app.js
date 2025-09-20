const character = "#";
const count = 8;
// count constraint: harus genap


// fungsi bikin segitiga 
function segitiga(rowCount) {
  // fungsi bikin 1 row
  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) +
      character.repeat(2 * rowNumber - 1) +
      " ".repeat(rowCount - rowNumber);
  }

  // let bentuk = prompt("normal/inverted?");
  let rows = [];
  for (let i = 1; i <= rowCount; i++) {
    if (true) {
      rows.push(padRow(i, rowCount));
    } else {
      rows.unshift(padRow(i, rowCount));
    }
  }
  return rows;
}

// fungsi bikin kotak
function kotak(rowCount) {
  let rows = [];
  for (let i = 0; i <= rowCount; i++) {
    rows.push(character.repeat(rowCount));
  }
  return rows;
}

function persegiPanjang(rowCount) {
  let rows = [];
  for (let i = 0; i <= rowCount; i++) {
    rows.push(character.repeat(rowCount * 2));
  }
  return rows;
}

function segiLima(rowCount) {
  let rows = [];
  let baseWidth = rowCount * 2;
  let j = 1;

  for (let i = 1; i < rowCount; i++) {
    if (i === 1) {
      rows.push(" ".repeat(Math.floor(baseWidth / 2) - 1) + character.repeat(i + 1) + " ".repeat(baseWidth / 2));
    } else if (i <= (Math.floor(rowCount / 2))) {
      rows.push(" ".repeat(rowCount - i * 2) + character.repeat(4 * i) + " ".repeat(rowCount - i));
    } else {
      rows.push(" ".repeat(j) + character.repeat(baseWidth - j * 2) + " ".repeat(j))
      j++;
    }
  }
  return rows;
}

function segiEnam(rowCount) {
  let rows = [];
  let baseWidth = rowCount * 2;
  let j = 1;
  for (let i = 0; i <= rowCount - 1; i++) {
    if (i === 0) {
      rows.push(character.repeat(baseWidth));
    } else if (i < rowCount / 2) {
      rows.push(" ".repeat(i) + character.repeat(baseWidth - i * 2) + " ".repeat(i))
    } else if (i > rowCount / 2) {
      rows.unshift(" ".repeat(j) + character.repeat(baseWidth - j * 2) + " ".repeat(j))
      j++;
    }
  }
  return rows;
}

function segiDelapan(rowCount) {
  let rows = [];
  let baseWidth = rowCount * 2;
  let j = 1;
  let k = 1;
  for (let i = 0; i < rowCount; i++) {
    if (i < Math.floor(rowCount * 1 / 3)) {
      rows.push(character.repeat(baseWidth));
    } else if (i < Math.floor(rowCount * 2 / 3)) {
      rows.push(" ".repeat(j) + character.repeat(baseWidth - j * 2) + " ".repeat(j))
      j++;
    } else if (i < rowCount) {
      rows.unshift(" ".repeat(k) + character.repeat(baseWidth - k * 2) + " ".repeat(k))
      k++;
    }
  }
  return rows;
}

function belahKetupat(rowCount) {
  let rows = [];
  let j = rowCount / 2;
  let l = rowCount / 2 - 3;
  let k = 1;

  for (i = 1; i < rowCount; i++) {
    if (i <= rowCount / 2) {
      rows.push(" ".repeat(rowCount / 2 - i) + character.repeat(2 * i - 1) + " ".repeat(rowCount / 2 - i))
    } else {
      rows.push(" ".repeat(k) + character.repeat(j + l) + " ".repeat(k))
      j = j - 2;
      k++;
    }
  }
  return rows;
}

function heart(rowCount){
  let rows = [];
  let j = rowCount/2;
  let k = 1;

  for (let i = 1; i <= rowCount; i++){
    if (i <= rowCount * 1/3){
      rows.unshift(" ".repeat(j-i) + character.repeat(i)+" ".repeat(j-i) + character.repeat(i))
    } else {
      rows.unshift(" ".repeat(rowCount - k) + character.repeat(2 * k - 1) + " ".repeat(rowCount - k))
      k++;
    }
  }
  return rows;
}

function jajaranGenjang(rowCount) {
  let rows = [];

  for (let i = 0; i < rowCount; i++){
    rows.unshift(" ".repeat(i) + character.repeat(rowCount * 2))
  }
  return rows;
}

function trapesium(rowCount) {
  let rows = [];
  let j = rowCount * 3
  
  for (let i = 0; i < rowCount; i++) {
    rows.unshift(" ".repeat(i) + character.repeat(j) + " ".repeat(i))
    j = j - 2
  }
  return rows;
}

// fungsi animasi (tampilkan baris demi baris)
async function animateShape(rows) {
  let result = ""
  for (let row of rows) {
    console.clear();            // hapus layar biar kaya "bergerak"
    result = result + row + "\n";
    console.log(result);
    await new Promise(r => setTimeout(r, 200)); // jeda 200ms
  }
}

// fungsi utama: ganti-ganti bentuk
async function showShapes() {
  // await animateShape(segitiga(count));
  // await animateShape(kotak(count));
  // await animateShape(persegiPanjang(count));
  // await animateShape(segiEnam(count));
  // await animateShape(segiDelapan(count));
  // await animateShape(segiLima(count));
  // await animateShape(belahKetupat(count));
  // await animateShape(jajaranGenjang(count));
  // await animateShape(trapesium(count));
  await animateShape(heart(count));
}

showShapes();