import React, { FunctionComponent, useState } from "react";
import "./index.css";
import dtz from "date-fns-tz";

// --------------------------------------------------------------------------
export type MupkaContact = {
  readonly name: string;
  readonly phone: string;
};
export type MupkaContactsProps = {
  contacts: Array<MupkaContact>;
};
export type MupkaContactsState = {
  // TODO
};

export const MupkaContacts: FunctionComponent<MupkaContactsProps> = (props) => {
  const [state, setState] = useState<MupkaContactsState>({});

  return (
    <div className="mupka-contacts">
      <ul>
        {props.contacts.map((i, idx) => (
          <li key={idx}>
            <span className="label">{i.name}:</span>
            <span className="value">{i.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
