import * as dtz from "date-fns-tz";
import React, { FunctionComponent } from "react";
import "./index.css";

// --------------------------------------------------------------------------
export function formatDay(d: Date): string {
  return dtz.format(d, "EEEE");
}
export function formatDate(d: Date): string {
  return dtz.format(d, "do MMMM YYY");
}
export function formatTime(d: Date): string {
  return dtz.format(d, "hh:mm a");
}

// --------------------------------------------------------------------------
export type MupkaTemporalDayProps = {
  now: Date;
};
export const MupkaTemporalDay: FunctionComponent<MupkaTemporalDayProps> = (
  props
) => {
  return (
    <div className="mupka-temporal-day mupka-temporal-component w-fit">
      <p>
        <span className="label">Today is: </span>
        <span className="value">{formatDay(props.now)}</span>
      </p>
    </div>
  );
};

// --------------------------------------------------------------------------
export type MupkaTemporalDateProps = {
  now: Date;
};
export const MupkaTemporalDate: FunctionComponent<MupkaTemporalDateProps> = (
  props
) => {
  return (
    <div className="mupka-temporal-date mupka-temporal-component w-fit">
      <p>
        <span className="label"></span>
        <span className="value">{formatDate(props.now)}</span>
      </p>
    </div>
  );
};

// --------------------------------------------------------------------------
export type MupkaTemporalTimeProps = {
  now: Date;
};
export const MupkaTemporalTime: FunctionComponent<MupkaTemporalTimeProps> = (
  props
) => {
  return (
    <div className="mupka-temporal-time mupka-temporal-component w-fit">
      <p>
        <span className="label">The time is: </span>
        <span className="value">{formatTime(props.now)}</span>
      </p>
    </div>
  );
};

// --------------------------------------------------------------------------
export type MupkaTemporalProps = {
  seconds?: boolean;
  twentyFourHour?: boolean;
  now: Date;
};
export type MupkaTemporalState = {};

export const MupkaTemporal: FunctionComponent<MupkaTemporalProps> = (props) => {
  return (
    <div className="mupka-temporal">
      <div className="mupka-temporal-inner">
        <MupkaTemporalDay now={props.now} />
        <MupkaTemporalDate now={props.now} />
        <MupkaTemporalTime now={props.now} />
      </div>
    </div>
  );
};
