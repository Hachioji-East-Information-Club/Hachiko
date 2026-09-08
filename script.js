// =========================
// 時刻表
// =========================

const trainTimes = {

  up: [
    { time: "05:55", destination: "八王子" },
    { time: "06:21", destination: "八王子" },
    { time: "06:48", destination: "八王子" },
    { time: "07:15", destination: "八王子" },
    { time: "07:42", destination: "八王子" },
    { time: "08:10", destination: "八王子" },
    { time: "08:43", destination: "八王子" },
    { time: "09:12", destination: "八王子" },
    { time: "09:43", destination: "八王子" },
    { time: "10:13", destination: "八王子" }
  ],

  down: [
    { time: "13:43", destination: "川越" },
    { time: "14:13", destination: "川越" },
    { time: "14:43", destination: "川越" },
    { time: "15:13", destination: "川越" },
    { time: "15:42", destination: "川越" },
    { time: "16:11", destination: "川越" },
    { time: "16:29", destination: "箱根ヶ崎" },
    { time: "16:51", destination: "川越" },
    { time: "17:22", destination: "川越" },
    { time: "17:41", destination: "拝島" },
    { time: "17:55", destination: "川越" },
    { time: "18:19", destination: "川越" },
    { time: "18:41", destination: "高麗川" },
    { time: "19:07", destination: "川越" },
    { time: "19:29", destination: "川越" },
    { time: "19:49", destination: "川越" },
    { time: "20:11", destination: "川越" },
    { time: "20:43", destination: "川越" },
    { time: "21:14", destination: "高麗川" },
    { time: "21:43", destination: "川越" },
    { time: "22:11", destination: "川越" },
    { time: "22:43", destination: "川越" },
    { time: "23:20", destination: "高麗川" }
  ]

};


// 現在選択している方向
let currentTrainDirection = "up";


// =========================
// 現在時刻を取得
// =========================

function getCurrentMinutes() {

  const now = new Date();

  return now.getHours() * 60 + now.getMinutes();
}


// =========================
// 「HH:MM」を分に変換
// =========================

function timeToMinutes(time) {

  const parts = time.split(":");

  const hour = Number(parts[0]);
  const minute = Number(parts[1]);

  return hour * 60 + minute;
}


// =========================
// 現在時刻を表示
// =========================

function updateCurrentTime() {

  const now = new Date();

  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  document.getElementById("currentTime").textContent =
    `現在時刻は ${hour}:${minute} です`;
}


// =========================
// 電車情報を更新
// =========================

function updateTrainTime() {

  updateCurrentTime();

  const currentMinutes = getCurrentMinutes();

  const trains = trainTimes[currentTrainDirection];

  // 現在時刻より後の電車だけ取得
  const futureTrains = trains.filter(train => {
    return timeToMinutes(train.time) > currentMinutes;
  });


  // 次の電車
  const nextTrain = futureTrains[0];


  const nextTimeElement =
    document.getElementById("nextTrainTime");

  const nextDestinationElement =
    document.getElementById("nextTrainDestination");


  if (nextTrain) {

    nextTimeElement.textContent =
      nextTrain.time;

    nextDestinationElement.textContent =
      `${nextTrain.destination}行`;

  } else {

    nextTimeElement.textContent =
      "--:--";

    nextDestinationElement.textContent =
      "本日の電車は終了しました";
  }


  // 時刻表を表示
  renderTrainSchedule(trains, nextTrain);
}


// =========================
// 時刻表を表示
// =========================

function renderTrainSchedule(trains, nextTrain) {

  const schedule =
    document.getElementById("trainSchedule");

  schedule.innerHTML = "";


  trains.forEach(train => {

    const row =
      document.createElement("div");

    row.className = "trainRow";


    // 次の電車なら強調
    if (
      nextTrain &&
      train.time === nextTrain.time &&
      train.destination === nextTrain.destination
    ) {
      row.classList.add("nextTrainRow");
    }


    const time =
      document.createElement("div");

    time.className = "trainRowTime";
    time.textContent = train.time;


    const destination =
      document.createElement("div");

    destination.className =
      "trainRowDestination";

    destination.textContent =
      `${train.destination}行`;


    row.appendChild(time);
    row.appendChild(destination);


    // 次の電車バッジ
    if (
      nextTrain &&
      train.time === nextTrain.time &&
      train.destination === nextTrain.destination
    ) {

      const badge =
        document.createElement("div");

      badge.className =
        "nextTrainBadge";

      badge.textContent =
        "次の電車";

      row.appendChild(badge);
    }


    schedule.appendChild(row);

  });

}


// =========================
// 上り・下り切り替え
// =========================

function selectTrainDirection(direction) {

  currentTrainDirection = direction;


  const upButton =
    document.getElementById("upButton");

  const downButton =
    document.getElementById("downButton");


  if (direction === "up") {

    upButton.classList.add(
      "activeTrainDirection"
    );

    downButton.classList.remove(
      "activeTrainDirection"
    );

  } else {

    downButton.classList.add(
      "activeTrainDirection"
    );

    upButton.classList.remove(
      "activeTrainDirection"
    );
  }


  updateTrainTime();
}


// =========================
// 起動
// =========================

updateTrainTime();


// 1秒ごとに更新
setInterval(() => {

  updateTrainTime();

}, 1000);
