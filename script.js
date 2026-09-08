// ==========================================
// 北八王子駅 八高線 時刻表
// 平日・土休日 自動切り替え
// ==========================================


// ==========================================
// 平日ダイヤ
// ==========================================

const weekdayTrainTimes = {

    // ==========================================
    // 上り（八王子方面）
    // ==========================================

    up: [
        { time: "05:55", destination: "八王子" },
        { time: "06:21", destination: "八王子" },
        { time: "06:43", destination: "八王子" },

        { time: "07:13", destination: "八王子" },
        { time: "07:27", destination: "八王子" },
        { time: "07:40", destination: "八王子" },
        { time: "07:53", destination: "八王子" },

        { time: "08:08", destination: "八王子" },
        { time: "08:22", destination: "八王子" },
        { time: "08:36", destination: "八王子" },
        { time: "08:50", destination: "八王子" },

        { time: "09:03", destination: "八王子" },
        { time: "09:28", destination: "八王子" },
        { time: "09:44", destination: "八王子" },

        { time: "10:06", destination: "八王子" },
        { time: "10:26", destination: "八王子" },
        { time: "10:50", destination: "八王子" },

        { time: "11:14", destination: "八王子" },
        { time: "11:44", destination: "八王子" },

        { time: "12:14", destination: "八王子" },
        { time: "12:44", destination: "八王子" },

        { time: "13:14", destination: "八王子" },
        { time: "13:44", destination: "八王子" },

        { time: "14:14", destination: "八王子" },
        { time: "14:44", destination: "八王子" },

        { time: "15:14", destination: "八王子" },
        { time: "15:44", destination: "八王子" },

        { time: "16:15", destination: "八王子" },
        { time: "16:45", destination: "八王子" },

        { time: "17:09", destination: "八王子" },
        { time: "17:23", destination: "八王子" },
        { time: "17:44", destination: "八王子" },
        { time: "17:58", destination: "八王子" },

        { time: "18:07", destination: "八王子" },
        { time: "18:22", destination: "八王子" },
        { time: "18:45", destination: "八王子" },

        { time: "19:13", destination: "八王子" },
        { time: "19:35", destination: "八王子" },
        { time: "19:59", destination: "八王子" },

        { time: "20:21", destination: "八王子" },
        { time: "20:53", destination: "八王子" },

        { time: "21:14", destination: "八王子" },
        { time: "21:49", destination: "八王子" },

        { time: "22:11", destination: "八王子" },
        { time: "22:30", destination: "八王子" },

        { time: "23:04", destination: "八王子" },
        { time: "23:27", destination: "八王子" }
    ],


    // ==========================================
    // 下り（高麗川・川越方面）
    // ==========================================

    down: [
        { time: "04:49", destination: "川越" },

        { time: "05:20", destination: "川越" },
        { time: "05:55", destination: "川越" },

        { time: "06:13", destination: "川越" },
        { time: "06:35", destination: "川越" },

        { time: "07:05", destination: "川越" },
        { time: "07:28", destination: "川越" },
        { time: "07:41", destination: "拝島" },
        { time: "07:56", destination: "川越" },

        { time: "08:10", destination: "川越" },
        { time: "08:23", destination: "拝島" },
        { time: "08:37", destination: "川越" },
        { time: "08:51", destination: "拝島" },

        { time: "09:04", destination: "川越" },
        { time: "09:22", destination: "川越" },
        { time: "09:45", destination: "川越" },

        { time: "10:19", destination: "川越" },
        { time: "10:49", destination: "川越" },

        { time: "11:13", destination: "川越" },
        { time: "11:43", destination: "川越" },

        { time: "12:13", destination: "川越" },
        { time: "12:43", destination: "川越" },

        { time: "13:13", destination: "川越" },
        { time: "13:43", destination: "川越" },

        { time: "14:13", destination: "川越" },
        { time: "14:43", destination: "川越" },

        { time: "15:13", destination: "川越" },
        { time: "15:43", destination: "川越" },

        { time: "16:14", destination: "川越" },
        { time: "16:44", destination: "拝島" },
        { time: "16:59", destination: "川越" },

        { time: "17:10", destination: "箱根ケ崎" },
        { time: "17:23", destination: "川越" },
        { time: "17:37", destination: "箱根ケ崎" },
        { time: "17:58", destination: "川越" },

        { time: "18:22", destination: "川越" },
        { time: "18:44", destination: "川越" },

        { time: "19:03", destination: "川越" },
        { time: "19:26", destination: "川越" },
        { time: "19:51", destination: "川越" },

        { time: "20:13", destination: "川越" },
        { time: "20:35", destination: "川越" },

        { time: "21:14", destination: "川越" },
        { time: "21:42", destination: "川越" },

        { time: "22:10", destination: "川越" },
        { time: "22:46", destination: "川越" },

        { time: "23:28", destination: "高麗川" }
    ]
};


// ==========================================
// 土休日ダイヤ
// ==========================================

const holidayTrainTimes = {

    // ==========================================
    // 上り（八王子方面）
    // ==========================================

    up: [
        { time: "05:55", destination: "八王子" },
        { time: "06:21", destination: "八王子" },
        { time: "06:48", destination: "八王子" },

        { time: "07:05", destination: "八王子" },
        { time: "07:24", destination: "八王子" },
        { time: "07:42", destination: "八王子" },

        { time: "08:04", destination: "八王子" },
        { time: "08:18", destination: "八王子" },
        { time: "08:38", destination: "八王子" },
        { time: "08:56", destination: "八王子" },

        { time: "09:26", destination: "八王子" },
        { time: "09:43", destination: "八王子" },

        { time: "10:17", destination: "八王子" },
        { time: "10:44", destination: "八王子" },

        { time: "11:14", destination: "八王子" },
        { time: "11:44", destination: "八王子" },

        { time: "12:14", destination: "八王子" },
        { time: "12:44", destination: "八王子" },

        { time: "13:14", destination: "八王子" },
        { time: "13:44", destination: "八王子" },

        { time: "14:14", destination: "八王子" },
        { time: "14:44", destination: "八王子" },

        { time: "15:14", destination: "八王子" },
        { time: "15:43", destination: "八王子" },

        { time: "16:11", destination: "八王子" },
        { time: "16:38", destination: "八王子" },

        { time: "17:09", destination: "八王子" },
        { time: "17:23", destination: "八王子" },
        { time: "17:40", destination: "八王子" },

        { time: "18:04", destination: "八王子" },
        { time: "18:20", destination: "八王子" },
        { time: "18:41", destination: "八王子" },

        { time: "19:06", destination: "八王子" },
        { time: "19:29", destination: "八王子" },
        { time: "19:49", destination: "八王子" },

        { time: "20:11", destination: "八王子" },
        { time: "20:29", destination: "八王子" },

        { time: "21:01", destination: "八王子" },
        { time: "21:21", destination: "八王子" },
        { time: "21:43", destination: "八王子" },

        { time: "22:11", destination: "八王子" },
        { time: "22:30", destination: "八王子" },

        { time: "23:01", destination: "八王子" },
        { time: "23:27", destination: "八王子" }
    ],


    // ==========================================
    // 下り（高麗川・川越方面）
    // ==========================================

    down: [
        { time: "04:49", destination: "川越" },

        { time: "05:21", destination: "川越" },
        { time: "05:55", destination: "川越" },

        { time: "06:13", destination: "川越" },
        { time: "06:40", destination: "高麗川" },

        { time: "07:06", destination: "川越" },
        { time: "07:24", destination: "川越" },
        { time: "07:43", destination: "拝島" },
        { time: "07:57", destination: "川越" },

        { time: "08:17", destination: "川越" },
        { time: "08:38", destination: "川越" },
        { time: "08:57", destination: "川越" },

        { time: "09:25", destination: "川越" },
        { time: "09:57", destination: "川越" },

        { time: "10:17", destination: "川越" },
        { time: "10:43", destination: "高麗川" },

        { time: "11:13", destination: "川越" },
        { time: "11:43", destination: "川越" },

        { time: "12:13", destination: "川越" },
        { time: "12:43", destination: "川越" },

        { time: "13:13", destination: "川越" },
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


// ==========================================
// 現在選択している方向
// ==========================================

let currentTrainDirection = "up";


// ==========================================
// 今日のダイヤを自動判定
// ==========================================

function getTodayTrainTimes() {

    const now = new Date();
    const day = now.getDay();

    // 月曜日〜金曜日
    if (day >= 1 && day <= 5) {
        return weekdayTrainTimes;
    }

    // 土曜日・日曜日
    return holidayTrainTimes;
}


// ==========================================
// ダイヤ種別を取得
// ==========================================

function getTodayScheduleType() {

    const day = new Date().getDay();

    if (day >= 1 && day <= 5) {
        return "平日ダイヤ";
    }

    return "土休日ダイヤ";
}


// ==========================================
// 現在時刻を取得
// ==========================================

function getCurrentMinutes() {

    const now = new Date();

    return now.getHours() * 60 + now.getMinutes();
}


// ==========================================
// 時刻を分に変換
// ==========================================

function timeToMinutes(time) {

    const parts = time.split(":");

    return Number(parts[0]) * 60 + Number(parts[1]);
}


// ==========================================
// 現在時刻を画面に表示
// ==========================================

function updateCurrentTime() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const currentTimeElement =
        document.getElementById("currentTime");

    if (currentTimeElement) {

        currentTimeElement.textContent =
            `${hours}:${minutes}:${seconds}`;
    }


    // ダイヤ種別も表示
    const scheduleTypeElement =
        document.getElementById("scheduleType");

    if (scheduleTypeElement) {

        scheduleTypeElement.textContent =
            getTodayScheduleType();
    }
}


// ==========================================
// 次の電車・時刻表を更新
// ==========================================

function updateTrainTime() {

    const trainData = getTodayTrainTimes();

    const trains =
        trainData[currentTrainDirection] || [];

    const currentMinutes = getCurrentMinutes();


    // 現在時刻以降の電車を探す
    const futureTrains = trains.filter(train => {

        return timeToMinutes(train.time) >= currentMinutes;

    });


    // 次の電車
    const nextTrain = futureTrains.length > 0
        ? futureTrains[0]
        : null;


    // 次の電車表示
    const nextTrainTimeElement =
        document.getElementById("nextTrainTime");

    const nextTrainDestinationElement =
        document.getElementById("nextTrainDestination");


    if (nextTrain) {

        if (nextTrainTimeElement) {

            nextTrainTimeElement.textContent =
                nextTrain.time;
        }

        if (nextTrainDestinationElement) {

            nextTrainDestinationElement.textContent =
                `${nextTrain.destination}行`;
        }

    } else {

        if (nextTrainTimeElement) {

            nextTrainTimeElement.textContent =
                "--:--";
        }

        if (nextTrainDestinationElement) {

            nextTrainDestinationElement.textContent =
                "本日の運転は終了しました";
        }
    }


    // ==========================================
    // 時刻表一覧
    // ==========================================

    const trainScheduleElement =
        document.getElementById("trainSchedule");


    if (!trainScheduleElement) {
        return;
    }


    trainScheduleElement.innerHTML = "";


    trains.forEach((train, index) => {

        const row =
            document.createElement("div");

        row.className = "trainRow";


        // 次の電車を強調
        if (nextTrain && train === nextTrain) {

            row.classList.add("nextTrainRow");

        }


        row.innerHTML = `
            <div class="trainTime">
                ${train.time}
            </div>

            <div class="trainDestination">
                ${train.destination}行
            </div>

            ${
                nextTrain && train === nextTrain
                ? '<span class="nextTrainBadge">次の電車</span>'
                : ''
            }
        `;


        trainScheduleElement.appendChild(row);

    });
}


// ==========================================
// 上り・下り切り替え
// ==========================================

function selectTrainDirection(direction) {

    currentTrainDirection = direction;


    const upButton =
        document.getElementById("upButton");

    const downButton =
        document.getElementById("downButton");


    if (upButton) {

        upButton.classList.toggle(
            "activeTrainDirection",
            direction === "up"
        );

    }


    if (downButton) {

        downButton.classList.toggle(
            "activeTrainDirection",
            direction === "down"
        );

    }


    updateTrainTime();
}


// ==========================================
// 初期表示
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCurrentTime();

        updateTrainTime();


        // 1秒ごとに現在時刻を更新
        setInterval(function () {

            updateCurrentTime();

        }, 1000);


        // 30秒ごとに次の電車を再計算
        setInterval(function () {

            updateTrainTime();

        }, 30000);

    }
);
