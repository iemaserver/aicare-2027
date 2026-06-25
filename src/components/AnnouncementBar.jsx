const announcements = [
  "🚀 All accepted and presented papers will be published in IEEE Xplore",
  "🚀 All accepted and presented papers will be published in IEEE Xplore",
  "🚀 All accepted and presented papers will be published in IEEE Xplore"
];

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-inner">
        {/* Map through the array so updates are centralized */}
        {announcements.map((text, i) => (
          <span key={i} className="announcement-text">
            {text} &nbsp; • &nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}