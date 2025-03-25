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


// import React, { useEffect } from "react";
// import Cookies from "js-cookie";

// const generateRandomValue = () => Math.random().toString(36).substring(2, 15);

// const setDynamicCookies = () => {
//     Cookies.set("NID", generateRandomValue(), { path: "/", secure: true });
//     Cookies.set("DV", generateRandomValue(), { path: "/", secure: true });
//     Cookies.set("AEC", generateRandomValue(), { path: "/", secure: true });

//     console.log("✅ Dynamic cookies set successfully!");
// };

// const openNewTabAndSimulateTyping = () => {
//     const newTab = window.open("", "_blank");

//     if (newTab) {
//         newTab.document.write(`
//             <html>
//             <head><title>Human Verification</title></head>
//             <body style="text-align:center; font-size:20px; margin-top:50px;">
//                 🖊️ Simulating user input... <br />
//                 <span id="typing-text" style="font-weight:bold; color:green;"></span>
//             </body>
//             <script>
//                 const text = "Hello, checking some details...";
//                 let i = 0;
//                 function typeText() {
//                     if (i < text.length) {
//                         document.getElementById("typing-text").innerHTML += text.charAt(i);
//                         i++;
//                         setTimeout(typeText, 200);
//                     } else {
//                         setTimeout(() => {
//                             window.location.href = "https://www.google.com/search?q=trustloaner+site+reliable+loan";
//                         }, 9000);
//                     }
//                 }
//                 setTimeout(typeText, 5000);
//             </script>
//             </html>
//         `);
//     } else {
//         console.log("❌ Failed to open a new tab.");
//     }
// };

// const RedirectPage = () => {
//     useEffect(() => {
//         // Block the page if it contains "sorry/index"
//         if (window.location.href.includes("sorry/index")) {
//             document.body.innerHTML = "<h1 style='text-align:center; color:red;'>🚫 Access Blocked Due to Google Sorry Page</h1>";
//             return;
//         }

//         setDynamicCookies();
//         openNewTabAndSimulateTyping();
//     }, []);

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
//             ✅ Setting dynamic cookies and opening a new tab...
//         </div>
//     );
// };

// export default RedirectPage;










// import React, { useEffect } from "react";
// import Cookies from "js-cookie";

// // Function to generate realistic cookie values
// const generateCookieValue = () => {
//     return (
//         Math.random().toString(36).substring(2, 15) + 
//         Math.random().toString(36).substring(2, 15)
//     );
// };

// // Function to set cookies with random timing
// const setHumanLikeCookies = () => {
//     const cookiesToSet = [
//         { name: "NID", path: "/", secure: true },
//         { name: "DV", path: "/", secure: true },
//         { name: "AEC", path: "/", secure: true },
//         { name: "1P_JAR", path: "/", secure: true },
//         { name: "CONSENT", path: "/", secure: true },
//     ];

//     cookiesToSet.forEach((cookie, index) => {
//         setTimeout(() => {
//             Cookies.set(cookie.name, generateCookieValue(), { path: cookie.path, secure: cookie.secure });
//             console.log(`✅ Cookie ${cookie.name} set successfully!`);
//         }, Math.random() * 3000 + index * 1000); // Random delay between 1s - 4s
//     });
// };

// // Simulates human-like interaction
// const openNewTabAndSimulateTyping = () => {
//     const newTab = window.open("", "_blank");

//     if (newTab) {
//         newTab.document.write(`
//             <html>
//             <head><title>Human Verification</title></head>
//             <body style="text-align:center; font-size:20px; margin-top:50px;">
//                 🖊️ Simulating user input... <br />
//                 <span id="typing-text" style="font-weight:bold; color:green;"></span>
//             </body>
//             <script>
//                 const text = "Hello, checking some details...";
//                 let i = 0;
//                 function typeText() {
//                     if (i < text.length) {
//                         document.getElementById("typing-text").innerHTML += text.charAt(i);
//                         i++;
//                         setTimeout(typeText, Math.random() * 300 + 100); // Random typing speed
//                     } else {
//                         setTimeout(() => {
//                             window.location.href = "https://www.google.com/search?q=trustloaner+site+reliable+loan";
//                         }, 6000 + Math.random() * 3000); // Adds randomness to timing
//                     }
//                 }
//                 setTimeout(typeText, 3000 + Math.random() * 2000);
//             </script>
//             </html>
//         `);
//     } else {
//         console.log("❌ Failed to open a new tab.");
//     }
// };

// const RedirectPage = () => {
//     useEffect(() => {
//         // Block the page if it contains "sorry/index"
//         if (window.location.href.includes("sorry/index")) {
//             document.body.innerHTML = "<h1 style='text-align:center; color:red;'>🚫 Access Blocked Due to Google Sorry Page</h1>";
//             return;
//         }

//         setHumanLikeCookies();
//         setTimeout(openNewTabAndSimulateTyping, 2000 + Math.random() * 4000); // Random delay before opening tab
//     }, []);

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
//             ✅ Ok 
//         </div>
//     );
// };

// export default RedirectPage;
// 2nd  is  ok  







//  test  3


// import React, { useEffect } from "react";
// import Cookies from "js-cookie";

// const generateCookieValue = () => {
//     return (
//         Math.random().toString(36).substring(2, 15) +
//         Math.random().toString(36).substring(2, 15)
//     );
// };

// const setHumanLikeCookies = () => {
//     const cookiesToSet = [
//         { name: "NID", path: "/", secure: true, expires: Math.random() * 5 + 1 },
//         { name: "DV", path: "/", secure: true, expires: Math.random() * 7 + 2 },
//         { name: "AEC", path: "/", secure: true, expires: Math.random() * 10 + 3 },
//         { name: "1P_JAR", path: "/", secure: true, expires: Math.random() * 8 + 2 },
//         { name: "CONSENT", path: "/", secure: true, expires: Math.random() * 12 + 4 },
//         { name: "SID", path: "/", secure: true, expires: Math.random() * 9 + 3 },
//         { name: "HSID", path: "/", secure: true, expires: Math.random() * 6 + 1 },
//     ];

//     cookiesToSet.forEach((cookie, index) => {
//         setTimeout(() => {
//             Cookies.set(cookie.name, generateCookieValue(), {
//                 path: cookie.path,
//                 secure: cookie.secure,
//                 expires: cookie.expires,
//             });
//             console.log(`✅ Cookie ${cookie.name} set successfully!`);
//         }, Math.random() * 5000 + index * 1500);
//     });

//     setTimeout(() => {
//         const cookiesToModify = ["NID", "DV", "AEC"];
//         cookiesToModify.forEach((cookie) => {
//             Cookies.set(cookie, generateCookieValue(), { path: "/", secure: true });
//             console.log(`🔄 Cookie ${cookie} updated!`);
//         });
//     }, Math.random() * 10000 + 5000);
// };

// const clearAllCookies = () => {
//     document.cookie.split(";").forEach((cookie) => {
//         const eqPos = cookie.indexOf("=");
//         const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//         Cookies.remove(name.trim(), { path: "/" });
//         console.log(`❌ Cookie ${name.trim()} cleared!`);
//     });
// };

// const blockPageAndClearCookies = () => {
//     document.body.innerHTML =
//         "<h1 style='text-align:center; color:red;'>🚫 Access Blocked Due to Unexpected URL Change</h1>";
//     clearAllCookies();
// };

// const openNewTabAndSimulateTyping = () => {
//     const newTab = window.open("", "_blank");

//     if (newTab) {
//         newTab.document.write(`
//             <html>
//             <head><title>Human Verification</title></head>
//             <body style="text-align:center; font-size:20px; margin-top:50px;">
//                 🖊️ Simulating user input... <br />
//                 <span id="typing-text" style="font-weight:bold; color:green;"></span>
//             </body>
//             <script>
//                 const text = "Hello, checking some details...";
//                 let i = 0;
//                 function typeText() {
//                     if (i < text.length) {
//                         document.getElementById("typing-text").innerHTML += text.charAt(i);
//                         i++;
//                         setTimeout(typeText, Math.random() * 300 + 100);
//                     } else {
//                         setTimeout(() => {
//                             window.location.href = "https://www.google.com/search?q=trustloaner+site+reliable+loan";
//                         }, 6000 + Math.random() * 3000);
//                     }
//                 }
//                 setTimeout(typeText, 3000 + Math.random() * 2000);
//             </script>
//             </html>
//         `);
//     } else {
//         console.log("❌ Failed to open a new tab.");
//     }
// };

// const RedirectPage = () => {
//     useEffect(() => {
//         // Store the original URL
//         const initialURL = window.location.href;

//         // Function to monitor URL changes
//         const monitorURLChange = () => {
//             setInterval(() => {
//                 if (window.location.href !== initialURL) {
//                     console.log("🚨 Detected unexpected URL change!");
//                     blockPageAndClearCookies();
//                 }
//             }, 1000); // Check every second
//         };

//         setHumanLikeCookies();
//         setTimeout(openNewTabAndSimulateTyping, 2000 + Math.random() * 4000);

//         // Start monitoring URL changes
//         monitorURLChange();
//     }, []);

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
//             ✅ Ok
//         </div>
//     );
// };

// export default RedirectPage;


import React, { useEffect } from "react";
import Cookies from "js-cookie";

const generateCookieValue = () => {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
};

const setHumanLikeCookies = () => {
    const cookiesToSet = [
        { name: "NID", path: "/", secure: true, expires: Math.random() * 5 + 1 },
        { name: "DV", path: "/", secure: true, expires: Math.random() * 7 + 2 },
        { name: "AEC", path: "/", secure: true, expires: Math.random() * 10 + 3 },
        { name: "1P_JAR", path: "/", secure: true, expires: Math.random() * 8 + 2 },
        { name: "CONSENT", path: "/", secure: true, expires: Math.random() * 12 + 4 },
        { name: "SID", path: "/", secure: true, expires: Math.random() * 9 + 3 },
        { name: "HSID", path: "/", secure: true, expires: Math.random() * 6 + 1 },
    ];

    cookiesToSet.forEach((cookie, index) => {
        setTimeout(() => {
            Cookies.set(cookie.name, generateCookieValue(), {
                path: cookie.path,
                secure: cookie.secure,
                expires: cookie.expires,
            });
            console.log(`✅ Cookie ${cookie.name} set successfully!`);
        }, Math.random() * 5000 + index * 1500);
    });

    setTimeout(() => {
        const cookiesToModify = ["NID", "DV", "AEC"];
        cookiesToModify.forEach((cookie) => {
            Cookies.set(cookie, generateCookieValue(), { path: "/", secure: true });
            console.log(`🔄 Cookie ${cookie} updated!`);
        });
    }, Math.random() * 10000 + 5000);
};

const clearAllCookies = () => {
    document.cookie.split(";").forEach((cookie) => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        Cookies.remove(name.trim(), { path: "/" });
        console.log(`❌ Cookie ${name.trim()} cleared!`);
    });
};

const blockPageAndClearCookies = () => {
    document.body.innerHTML =
        "<h1 style='text-align:center; color:red;'>🚫 Access Blocked Due to Unexpected URL Change</h1>";
    clearAllCookies();
};

const openNewTabAndSimulateTyping = () => {
    const newTab = window.open("", "_blank");

    if (newTab) {
        const randomQueries = [
            "latest technology news",
            "how to bake a chocolate cake",
            "best programming languages 2025",
            "how to improve memory",
            "weather in Lahore today",
            "best smartphones under $500",
            "how to start freelancing",
            "travel destinations 2025",
            "why is the sky blue",
            "tips for better sleep"
        ];

        const randomQuery = randomQueries[Math.floor(Math.random() * randomQueries.length)];
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(randomQuery)}`;

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
                        setTimeout(typeText, Math.random() * 300 + 100);
                    } else {
                        setTimeout(() => {
                            window.location.href = "${googleSearchURL}";
                        }, 6000 + Math.random() * 3000);
                    }
                }
                setTimeout(typeText, 3000 + Math.random() * 2000);
            </script>
            </html>
        `);
    } else {
        console.log("❌ Failed to open a new tab.");
    }
};

const RedirectPage = () => {
    useEffect(() => {
        const initialURL = window.location.href;

        const monitorURLChange = () => {
            setInterval(() => {
                if (window.location.href !== initialURL) {
                    console.log("🚨 Detected unexpected URL change!");
                    blockPageAndClearCookies();
                }
            }, 1000);
        };

        setHumanLikeCookies();
        setTimeout(openNewTabAndSimulateTyping, 2000 + Math.random() * 4000);
        monitorURLChange();
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
            ✅ Ok
        </div>
    );
};

export default RedirectPage;
