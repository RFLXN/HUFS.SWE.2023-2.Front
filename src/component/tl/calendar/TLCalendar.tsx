"use client";

import FullCalendar from "@fullcalendar/react";
import bootstrapPlugin from "@fullcalendar/bootstrap5";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FC } from "react";

const TLCalendar: FC = () => {
    return <div>
        <FullCalendar
            titleFormat={{ year: "numeric", month: "numeric" }}
            headerToolbar={{ start: "title", end: "prev,next" }}
            plugins={[bootstrapPlugin, dayGridPlugin]}
            initialView="dayGridMonth"
            themeSystem="bootstrap5"/>
    </div>;
};

export default TLCalendar;
