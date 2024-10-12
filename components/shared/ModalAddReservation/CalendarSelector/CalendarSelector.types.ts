import React from "react";
import { SetStateAction } from "react";

export type CalendarSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
    setDateSelected: React.Dispatch<React.SetStateAction<{ from: Date | undefined; to: Date | undefined }>>;
};
