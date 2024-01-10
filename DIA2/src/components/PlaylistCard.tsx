import type { FunctionComponent } from "preact";

interface PlaylistCardProps {
  title?: string;
  imageUrl?: string;
  description?: string;
  audio?: string;
}

const PlaylistCard: FunctionComponent<PlaylistCardProps> = ({
  title,
  imageUrl,
  description,
  audio,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-80 aspect-square">
      <img
        className="h-80 object-cover rounded-md mb-4 aspect-square"
        src={imageUrl}
        alt={title}
        draggable={false}
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      <audio controls>
        <source src={audio} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PlaylistCard;
