```javascript
/* ==================================================
   PASSWORD
================================================== */

// 🔐 เปลี่ยนรหัสตรงนี้

const correctPassword = "140225";


function checkPassword() {

    const input =
        document.getElementById(
            "passwordInput"
        );


    const error =
        document.getElementById(
            "passwordError"
        );


    if (
        input.value === correctPassword
    ) {

        error.classList.remove(
            "show"
        );


        // ซ่อนหน้า Password

        document
            .getElementById("passwordPage")
            .classList.remove("active");


        // เปิดหน้า Player

        document
            .getElementById("playerPage")
            .classList.add("active");


    } else {

        error.classList.add(
            "show"
        );


        input.value = "";

        input.focus();

    }

}


/* กด Enter */

document
    .getElementById("passwordInput")
    .addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                checkPassword();

            }

        }
    );



/* ==================================================
   VIDEO PLAYER
================================================== */

const video =
    document.getElementById(
        "birthdayVideo"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const progressText =
    document.getElementById(
        "progressText"
    );


const currentTime =
    document.getElementById(
        "currentTime"
    );


const duration =
    document.getElementById(
        "duration"
    );


/* เริ่มเล่น */

function startVideo() {

    document
        .getElementById(
            "videoOverlay"
        )
        .classList.add("hidden");


    video.play();

}


/* เวลาเปลี่ยน */

video.addEventListener(
    "timeupdate",
    function() {

        if (
            !video.duration
        ) return;


        const percent =
            (
                video.currentTime /
                video.duration
            ) * 100;


        progressBar.style.width =
            percent + "%";


        progressText.textContent =
            Math.floor(percent) + "%";


        currentTime.textContent =
            formatTime(
                video.currentTime
            );

    }
);


/* วิดีโอโหลด */

video.addEventListener(
    "loadedmetadata",
    function() {

        duration.textContent =
            formatTime(
                video.duration
            );

    }
);


/* เมื่อดูจบ */

video.addEventListener(
    "ended",
    function() {

        setTimeout(
            function() {

                showCompleted();

            },
            800
        );

    }
);


/* แปลงเวลา */

function formatTime(seconds) {

    if (
        isNaN(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const secs =
        Math.floor(
            seconds % 60
        );


    return (
        minutes +
        ":" +
        String(secs).padStart(
            2,
            "0"
        )
    );

}


/* ==================================================
   PAGE NAVIGATION
================================================== */

function showCompleted() {

    document
        .getElementById(
            "playerPage"
        )
        .classList.remove(
            "active"
        );


    document
        .getElementById(
            "completedPage"
        )
        .classList.add(
            "active"
        );

}


function showBirthday() {

    document
        .getElementById(
            "completedPage"
        )
        .classList.remove(
            "active"
        );


    document
        .getElementById(
            "birthdayPage"
        )
        .classList.add(
            "active"
        );


    createHearts();

}


function showMessage() {

    document
        .getElementById(
            "birthdayPage"
        )
        .classList.remove(
            "active"
        );


    document
        .getElementById(
            "messagePage"
        )
        .classList.add(
            "active"
        );


    createHearts();

}


/* ==================================================
   HEART EFFECT
================================================== */

function createHearts() {

    const heartTypes = [
        "💗",
        "💕",
        "💖",
        "💘",
        "❤️"
    ];


    for (
        let i = 0;
        i < 25;
        i++
    ) {

        setTimeout(
            function() {

                const heart =
                    document.createElement(
                        "div"
                    );


                heart.className =
                    "floating-heart";


                heart.textContent =
                    heartTypes[
                        Math.floor(
                            Math.random() *
                            heartTypes.length
                        )
                    ];


                heart.style.left =
                    Math.random() *
                    100 +
                    "vw";


                heart.style.fontSize =
                    15 +
                    Math.random() *
                    25 +
                    "px";


                heart.style.animationDuration =
                    3 +
                    Math.random() *
                    3 +
                    "s";


                document.body.appendChild(
                    heart
                );


                setTimeout(
                    function() {

                        heart.remove();

                    },
                    6000
                );


            },
            i * 100
        );

    }

}
```
