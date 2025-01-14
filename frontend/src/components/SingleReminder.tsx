import colors from "../constants/colors";
import { Event } from "../config/db";
import { useState } from "react";
import { eventDurationString } from "../helper/times";
import EventDialog from "./EventDialog";
function SingleReminder({ event }: { event: Event }) {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  return (
    <div onClick={() => setModalOpen(true)} className="items-center border-b py-2 text-start">
      {modalOpen && <EventDialog modalOpen={modalOpen} event={event} onClose={() => setModalOpen(false)} />}
      <h1 className="font-bold">{event.summary}</h1>
      <div className="flex items-center gap-2">
        <span
          className=" h-2 w-2 rounded-full"
          style={{
            backgroundColor: event.colorId ? colors[event.colorId] : "transparent",
          }}></span>
        <p className="">{eventDurationString(event)}</p>
      </div>
    </div>
  );
}

export default SingleReminder;
