import * as dtz from "date-fns-tz";
import React, { FunctionComponent, useEffect, useState } from "react";
import "./index.css";

// --------------------------------------------------------------------------
export function formatTime(d: Date): string {
  return dtz.format(d, "hh:mm a");
}

// --------------------------------------------------------------------------
export type MupkaTemporalTimezone = {
  readonly name: string;
  readonly tz: string;
};
export type MupkaTemporalTimezonesProps = {
  timezones: Array<MupkaTemporalTimezone>;
  now: Date;
};
export type MupkaTemporalTimezonesState = {};

export const MupkaTemporalTimezones: FunctionComponent<
  MupkaTemporalTimezonesProps
> = (props) => {
  return (
    <div className="mupka-temporal-timezones">
      <ul>
        {props.timezones.map((i, idx) => (
          <li key={idx} className="flex flex-row">
            <span className="label">{i.name}:</span>
            <span className="value">
              {formatTime(dtz.utcToZonedTime(props.now, i.tz))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
