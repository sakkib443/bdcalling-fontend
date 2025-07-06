import React, { useEffect, useState } from "react";

const seminars = [
  {
    id: 1,
    speaker: "Md. Abu Sayeed",
    title: "UI/UX Design Bootcamp",
    date: "2025-07-12",
    time: "16:00",
    image: "https://i.ibb.co/zWvWjS9X/GD-Card-1.jpg",
  },
  {
    id: 2,
    speaker: "Sakibul Hasan",
    title: "MERN Stack Career Roadmap",
    date: "2025-07-18",
    time: "15:30",
    image: "https://i.ibb.co/XZ78JQ9f/Mern-card.jpg",
  },
  {
    id: 3,
    speaker: "Ashraf Hossain",
    title: "Digital Marketing Trends 2025",
    date: "2025-07-25",
    time: "16:00",
    image: "https://i.ibb.co/GvS6k4FJ/DM-caed.jpg",
  },
];

// ⏱ Helper function
const getTimeRemaining = (eventDateTime) => {
  const total = new Date(eventDateTime).getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

const SeminarAndEventCard = () => {
  const [countdowns, setCountdowns] = useState(
    seminars.map((event) => getTimeRemaining(`${event.date}T${event.time}`))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns(
        seminars.map((event) => getTimeRemaining(`${event.date}T${event.time}`))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-11/12 md:w-8/12 mx-auto my-6">
      <ul className="bg-[#E1FCF9] rounded-xl shadow-lg cursor-pointer ">
        {seminars.map((event, index) => {
          const countdown = countdowns[index];
          return (
            <li
              key={event.id}
              className="flex flex-col md:flex-row  md:items-center border-b border-gray-200 shadow md:shadow-none rounded-b-2xl gap-4 px-4 py-3 hover:shadow-md transition crd"
            >
              <div className="text-3xl font-mono text-gray-300 w-10 text-center">
                {String(index + 1).padStart(2, "0")}
              </div>
              <img
                src={event.image}
                alt={event.speaker}
                className="md:w-36 md:h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="work flex gap-3">
                  <button className="btn btn-xs bg-transparent crd">Offline</button>
                  <button className="btn btn-xs  bg-transparent crd">
                    Seminar
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-md text-gray-500">{event.speaker}</p>
              </div>

              <div className="flex-1 flex">
                <div className="flex flex-col md:justify-center  md:text-center">
                  <p className="outfit-semibold">{event.time} PM</p>
                  <p className="text-gray-400 work">{event.date}</p>
                </div>
              </div>
              <div className=""></div>

              <div className="text-center border-l md:pl-12 border-gray-300 md:pr-8 ">
                <div>
                  <a
                    href={`https://wa.me/8801321231802?text=${encodeURIComponent(
                      `Hello, I want to join the seminar: ${event.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn bg-transparent mb-1 crd">Join</button>
                  </a>
                </div>
                <div className="font-mono translate-y-3 text-gray-800">
                  {countdown.total > 0 ? (
                    <>
                      <span>{countdown.days}d </span>
                      <span>{countdown.hours}h </span>
                      <span>{countdown.minutes}m </span>
                      <span>{countdown.seconds}s</span>
                    </>
                  ) : (
                    <span className="text-red-500">Event Started</span>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SeminarAndEventCard;
