"use client";

import { useEffect, useRef } from "react";
import Quotes from "@components/notiftype/Quotes";
import Reminder from "@components/notiftype/Reminder";

const Notification = ({ onClose, hasBeenViewed }) => {
    const notificationRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={notificationRef}
            className="absolute top-20 right-24 bg-white border rounded-lg shadow-lg max-w-96 z-50"
        >
            <h3 className="font-bold mb-2 p-3">Notifications</h3>
            <div className="grid">
                <Quotes hasBeenViewed={hasBeenViewed} /> 
                <Reminder /> 
            </div>
        </div>
    );
};

export default Notification;
