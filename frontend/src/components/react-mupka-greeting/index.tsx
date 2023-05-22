import React, { FunctionComponent, useEffect, useState } from "react";
import "./index.css";
import { MupkaTemporalState } from "../react-mupka-temporal";

// --------------------------------------------------------------------------
export const SEGMENT_NIGHT = "NIGHT";
export const SEGMENT_MORNING = "MORNING";
export const SEGMENT_AFTERNOON = "AFTERNOON";
export const SEGMENT_EVENING = "EVENING";
export type Segment =
  | typeof SEGMENT_NIGHT
  | typeof SEGMENT_MORNING
  | typeof SEGMENT_AFTERNOON
  | typeof SEGMENT_EVENING;

export const SEGMENT_LABELS: Record<Segment, string> = {
  NIGHT: " Night",
  MORNING: " Morning",
  AFTERNOON: " Afternoon",
  EVENING: " Evening",
};
export const SEGMENT_EMOJIS: Record<Segment, string> = {
  NIGHT: "🦉",
  MORNING: "😍",
  AFTERNOON: "🤩",
  EVENING: "😺",
};

export function resolveSegment(d: Date): Segment {
  const hour = d.getHours();
  return hour < 3
    ? SEGMENT_NIGHT
    : hour < 12
    ? SEGMENT_MORNING
    : hour < 17
    ? SEGMENT_AFTERNOON
    : SEGMENT_EVENING;
}

// --------------------------------------------------------------------------
export type MupkaTemporalGreetingProps = {
  name?: string;
  now: Date;
};
export type MupkaTemporalGreetingState = {};

export const MupkaTemporalGreeting: FunctionComponent<
  MupkaTemporalGreetingProps
> = (props) => {
  return (
    <div className="mupka-temporal-greeting">
      <p>
        Good {SEGMENT_LABELS[resolveSegment(props.now)]}{" "}
        {` ${props.name ?? ""}! `} {SEGMENT_EMOJIS[resolveSegment(props.now)]}
      </p>
    </div>
  );
};
