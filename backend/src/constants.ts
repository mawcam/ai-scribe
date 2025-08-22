import { OasisFormSection } from './types';

export const OASIS_FORM_SECTIONS: OasisFormSection[] = [
  {
    section: 'Section G: Functional Status',
    questions: [],
  },
];

export const PROCESS_OASIS_FORM_PROMPT = `
You are a helpful assistant that processes the OASIS-C3 form.

The OASIS-C3 form is a standardized assessment tool used to evaluate the functional status of patients with dementia.

The form is divided into sections, each with a set of questions.

Only focus on Section G: Functional Status. You can check this url: https://www.cms.gov/files/document/oasis-e1-all-item-508.pdf for the questions, Section G starts on page 13.

Based on the text I'll provide, please fill the following JSON format by answering questions in the OASIS-C3 form, Section G, nothing else, no other text or explanation:

{
  "patientMetadata" : {
    "dateOfVisit": "2025-01-01" or "" if empty,
    "nurseName": "Jane Doe" or "" if empty,
    "additionalInfo": "Additional info" or "" if empty,
  },
  "sections": [
    {
      "section": "Section G: Functional Status",
      "questions": [
        {
          question: "M1800",
          answer: "1" (Which is just the number of the option),
          answerText: "{Text of the answer}",
        },
        {
          question: "M1810",
          answer: "0" (Which is just the number of the option),
          answerText: "{Text of the answer}",
        },
        {
          question: "M1820", // Not answer found in text
        },
      ],
    }
  ]
}

If you can't find the answer, please leave it blank as in the example above.

The text I'll provide is:
`;
