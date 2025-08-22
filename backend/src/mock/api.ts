const MOCKED_PATIENT_METADATA = {
  dateOfVisit: '2025-01-01',
  nurseName: 'Jane Doe',
  additionalInfo: 'Additional info',
};

const MOCKED_FORM = [
  {
    section: 'Section G: Functional Status',
    questions: [
      {
        question: 'M1800',
        answer: '1',
        answerText:
          'Grooming utensils must be placed within reach before able to complete grooming activities.',
      },
      {
        question: 'M1810',
        answer: '0',
        answerText:
          'Able to get clothes out of closets and drawers, put them on and remove them from the upper body without assistance.',
      },
      {
        question: 'M1820',
        answer: '3',
        answerText:
          'Patient depends entirely upon another person to dress lower body',
      },
      {
        question: 'M1830',
        answer: '6',
        answerText:
          'Unable to participate effectively in bathing and is bathed totally by another person.',
      },
      {
        question: 'M1840',
        answer: '2',
        answerText:
          'Unable to get to and from the toilet but is able to use a bedside commode (with or without assistance).',
      },
      {
        question: 'M1845',
        answer: '1',
        answerText:
          'Able to manage toileting hygiene and clothing management without assistance if supplies/implements are laid out for the patient.',
      },
      {
        question: 'M1850',
        answer: '4',
        answerText:
          'Bedfast, unable to transfer but is able to turn and position self in bed.',
      },
      {
        question: 'M1860',
        answer: '5',
        answerText:
          'Chairfast, unable to ambulate and is unable to wheel self.',
      },
    ],
  },
];

export const MOCK_ADD_NOTE_RESPONSE = {
  rawContent:
    'This should be the raw content of the audio file transcribed from the audio file',
  processedContent: JSON.stringify(MOCKED_FORM),
};

export const getMockedProcessedContent = () => {
  const processedContent = {
    patientMetadata: MOCKED_PATIENT_METADATA,
    sections: MOCKED_FORM,
  };
  return processedContent;
};

export const mockedProcessAudio = () => {
  const processedContent = {
    patientMetadata: MOCKED_PATIENT_METADATA,
    sections: MOCKED_FORM,
  };
  const rawContent =
    'This should be the raw content of the audio file transcribed from the audio file';
  return {
    raw: rawContent,
    processed: JSON.stringify(processedContent),
  };
};
