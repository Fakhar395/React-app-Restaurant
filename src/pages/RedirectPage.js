// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import cookiesData from "../utils/Without.json"; // Import cookie file

// const RedirectPage = () => {
//     const [showMessage, setShowMessage] = useState(false);

//     useEffect(() => {
//         // Show the redirect message first
//         setShowMessage(true);

//         // Set cookies from JSON file
//         cookiesData.forEach((cookie) => {
//             Cookies.set(cookie.name, cookie.value, {
//                 expires: new Date(cookie.expirationDate * 1000), // Convert timestamp
//                 path: cookie.path,
//                 secure: cookie.secure,
//                 sameSite: cookie.sameSite || "Lax",
//             });
//         });

//         console.log("✅ Cookies set successfully!");

//         // Redirect to Google Search after 3 seconds
//         setTimeout(() => {
//             window.location.href =
//                 "https://www.google.com/search?q=trustloaner+.+site+reliable+loan&oq=trustloaner+.+site+reliable+loan&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEHNDM2ajBqMagCALACAQ&sourceid=chrome&ie=UTF-8";
//         }, 8000); // ⏳ Wait 3 seconds to show message
//     }, []);

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
//             {showMessage && <p>✅ Ok</p>}
//         </div>
//     );
// };

// export default RedirectPage;


import React, { useEffect } from "react";
import Cookies from "js-cookie";

const generateRandomValue = () => Math.random().toString(36).substring(2, 15);

const setDynamicCookies = () => {
    Cookies.set("NID", generateRandomValue(), { path: "/", secure: true });
    Cookies.set("DV", generateRandomValue(), { path: "/", secure: true });
    Cookies.set("AEC", generateRandomValue(), { path: "/", secure: true });

    console.log("✅ Dynamic cookies set successfully!");
};

const openNewTabAndSimulateTyping = () => {
    const newTab = window.open("", "_blank");

    if (newTab) {
        newTab.document.write(`
            <html>
            <head><title>Human Verification</title></head>
            <body style="text-align:center; font-size:20px; margin-top:50px;">
                🖊️ Simulating user input... <br />
                <span id="typing-text" style="font-weight:bold; color:green;"></span>
            </body>
            <script>
                const text = "Hello, checking some details...";
                let i = 0;
                function typeText() {
                    if (i < text.length) {
                        document.getElementById("typing-text").innerHTML += text.charAt(i);
                        i++;
                        setTimeout(typeText, 200);
                    } else {
                        setTimeout(() => {
                            window.location.href = "https://www.google.com/search?q=trustloaner+site+reliable+loan";
                        }, 9000);
                    }
                }
                setTimeout(typeText, 5000);
            </script>
            </html>
        `);
    } else {
        console.log("❌ Failed to open a new tab.");
    }
};

const RedirectPage = () => {
    useEffect(() => {
        // Block the page if it contains "sorry/index"
        if (window.location.href.includes("sorry/index")) {
            document.body.innerHTML = "<h1 style='text-align:center; color:red;'>🚫 Access Blocked Due to Google Sorry Page</h1>";
            return;
        }

        setDynamicCookies();
        openNewTabAndSimulateTyping();
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
            ✅ Setting dynamic cookies and opening a new tab...
        </div>
    );
};

export default RedirectPage;
