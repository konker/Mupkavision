import React, { FunctionComponent, useEffect, useState } from "react";
import "./App.css";
import { MupkaTemporal, MupkaTemporalState } from "./react-mupka-temporal";
import { MupkaImages } from "./react-mupka-images";
import { MupkaReminders } from "./react-mupka-reminders";
import { MupkaContacts } from "./react-mupka-contacts";
import { MupkaTemporalGreeting } from "./react-mupka-greeting";
import { MupkaTemporalTimezones } from "./react-mupka-temporal-timezones";

export type AppState = {
  now: Date;
};
export type AppConf = {
  readonly name: string;
  readonly tz: string;
};

export const App: FunctionComponent = () => {
  const [state, setState] = useState<AppState>({
    now: new Date(),
  });

  function refreshClock() {
    setState({
      now: new Date(),
    });
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div id="container" className="h-screen">
      <div id="main" className="grid h-full">
        <div id="header">
          <MupkaTemporalGreeting name={"Anna"} now={state.now} />
        </div>
        <div id="central">
          <MupkaTemporal now={state.now} />
          <MupkaImages />
          <MupkaReminders
            // From sheety
            reminders={[
              {
                title: "Kingushka's Birthday on the 12th!",
                start: "2023-07-10",
                end: "2023-07-13",
              },
            ]}
          />
        </div>
        <div id="footer">
          <MupkaTemporalTimezones
            now={state.now}
            // From sheety? But with these defaults?
            timezones={[
              { name: "London", tz: "Europe/London" },
              { name: "Warsaw", tz: "Europe/Warsaw" },
              { name: "Helsinki", tz: "Europe/Helsinki" },
              { name: "Sydney", tz: "Australia/Sydney" },
            ]}
          />
          <MupkaContacts
            contacts={[
              // From sheety? But with these defaults?
              { name: "Kingushka", phone: "+44 123 456 789" },
              { name: "Marta", phone: "+48 123 456 789" },
              { name: "Konrad", phone: "+358 503 400 597" },
              { name: "Agata", phone: "+61 123 456 789" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
