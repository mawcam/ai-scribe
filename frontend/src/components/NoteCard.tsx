import type { Note } from "../types/notes";

type Props = {
  note: Note;
};

const NoteCard = ({ note }: Props) => {
  return (
    <div key={note.id} className="note-card">
      <h3>Note #{note.id}</h3>
      <p>
        <strong>Created:</strong>{" "}
        {new Date(note.createdAt).toLocaleDateString()}
      </p>
      <p>
        <strong>Content:</strong>
      </p>
      <div className="note-content">{note.rawContent}</div>
    </div>
  );
};

export default NoteCard;
