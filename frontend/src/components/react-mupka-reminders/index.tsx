import React, { FunctionComponent, useState } from "react";
import "./index.css";

// --------------------------------------------------------------------------
export type MupkaReminder = {
  readonly title: string;
  readonly start: string;
  readonly end: string;
  readonly imageUrl?: string;
};

export type MupkaRemindersProps = {
  reminders: Array<MupkaReminder>;
};

export type MupkaRemindersState = {
  // TODO
};

export const MupkaReminders: FunctionComponent<MupkaRemindersProps> = (
  props
) => {
  const [state, setState] = useState<MupkaRemindersState>({});

  return (
    <div className="mupka-reminders">
      <ul>
        {props.reminders.map((i, idx) => (
          <li key={idx}>{i.title}</li>
        ))}
      </ul>
    </div>
  );
};
