import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import cookiesData from "../utils/Without.json"; // Import cookie file

const RedirectPage = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        // Show the redirect message first
        setShowMessage(true);

        // Set cookies from JSON file
        cookiesData.forEach((cookie) => {
            Cookies.set(cookie.name, cookie.value, {
                expires: new Date(cookie.expirationDate * 1000), // Convert timestamp
                path: cookie.path,
                secure: cookie.secure,
                sameSite: cookie.sameSite || "Lax",
            });
        });

        console.log("✅ Cookies set successfully!");

        // Redirect to Google Search after 3 seconds
        setTimeout(() => {
            window.location.href =
                "https://www.google.com/search?q=trustloaner+.+site+reliable+loan&oq=trustloaner+.+site+reliable+loan&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg80gEHNDM2ajBqMagCALACAQ&sourceid=chrome&ie=UTF-8";
        }, 8000); // ⏳ Wait 3 seconds to show message
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontSize: "20px" }}>
            {showMessage && <p>✅ Ok</p>}
        </div>
    );
};

export default RedirectPage;
