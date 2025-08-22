import { camelCaseToTitleWithSpaces, displayMetadataValue } from "../lib/utils";
import type { NoteMetadata } from "../types/notes";

type Props = {
  metadata: NoteMetadata;
};

const NoteMetadataCard = ({ metadata }: Props) => {
  const metadataEntries = Object.entries(metadata);

  return (
    <div className="metadata-container">
      <h2>Note Metadata</h2>
      {metadata ? (
        metadataEntries.map(([key, value]) => (
          <div className="metadata-item" key={key}>
            <div className="metadata-label">
              {camelCaseToTitleWithSpaces(key)}
            </div>
            <div className="metadata-value">{displayMetadataValue(value)}</div>
          </div>
        ))
      ) : (
        <div className="no-metadata">No metadata available</div>
      )}
    </div>
  );
};

export default NoteMetadataCard;
