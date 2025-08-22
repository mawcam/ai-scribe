import { useParams, Link } from "react-router-dom";
import { useNote } from "../hooks/useNote";
import { useMemo } from "react";
import type { ParsedProcessedContent } from "../types/notes";
import { formatDate } from "../lib/utils";
import NoteMetadataCard from "./NoteMetadataCard";

type Params = {
  patientId: string;
  noteId: string;
};

const BackToPatientLink = () => {
  const { patientId } = useParams<Params>();
  return (
    <Link to={`/patient/${patientId}`} className="back-button">
      ← Back to Patient
    </Link>
  );
};

const NoteDetail = () => {
  const { patientId, noteId } = useParams<Params>();
  const { patient, note, loading, error } = useNote(
    Number(patientId),
    Number(noteId)
  );

  const parsedProcessedContent = useMemo(() => {
    if (!note) {
      return null;
    }
    try {
      return JSON.parse(note.processedContent) as ParsedProcessedContent;
    } catch (error) {
      console.error("Error parsing processed content:", error);
      return null;
    }
  }, [note]);

  if (loading) {
    return (
      <div className="loading-container">
        <div>Loading note...</div>
      </div>
    );
  }

  if (error || !note || !patient) {
    return (
      <div className="error-container">
        <div>
          <h2>Note or patient not found</h2>
          <p>The requested note could not be loaded.</p>
          <BackToPatientLink />
        </div>
      </div>
    );
  }

  if (!parsedProcessedContent) {
    return (
      <div className="no-content-container">
        <div>
          <h2>No processed content found</h2>
          <p>This note doesn't have any processed content available.</p>
          <BackToPatientLink />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="left">
        <div className="note-detail-header">
          <BackToPatientLink />
          <h1>Note Details</h1>
        </div>

        <div className="raw-content-section">
          <h3>Raw Content</h3>
          <div className="raw-content-text">{note.rawContent}</div>
        </div>

        <div className="sections-container">
          <h2>Processed Sections</h2>
          {parsedProcessedContent.sections.map((section) => (
            <div key={section.section} className="section-item">
              <h3 className="section-header">{section.section}</h3>
              {section.questions.map((question, index) => (
                <div
                  key={`${section.section}-${index}`}
                  className="question-item"
                >
                  <p className="question-text">{question.question}</p>
                  {question.answer && question.answerText ? (
                    <p className="answer-content">
                      <strong>{question.answer}.</strong> {question.answerText}
                    </p>
                  ) : (
                    <p className="no-answer">No answer provided</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <NoteMetadataCard metadata={parsedProcessedContent.patientMetadata} />

        <div className="metadata-container" style={{ marginTop: "1.5rem" }}>
          <h2>Note Information</h2>
          <div className="metadata-item">
            <div className="metadata-label">Note ID</div>
            <div className="metadata-value">{note.id}</div>
          </div>
          <div className="metadata-item">
            <div className="metadata-label">Patient</div>
            <div className="metadata-value">{patient.fullname}</div>
          </div>
          <div className="metadata-item">
            <div className="metadata-label">Created</div>
            <div className="metadata-value">{formatDate(note.createdAt)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
