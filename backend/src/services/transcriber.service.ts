import fs from 'fs';
import client from '../config/openai';
import { OASIS_FORM_SECTIONS, PROCESS_OASIS_FORM_PROMPT } from '../constants';

const transcribeAudio = async (audioFile: Express.Multer.File) => {
  const transcription = await client.audio.transcriptions.create({
    file: fs.createReadStream(audioFile.path),
    model: 'gpt-4o-transcribe',
  });
  return transcription.text;
};

const processOasisForm = async (rawContent: string): Promise<string> => {
  const response = await client.responses.create({
    model: 'gpt-4o',
    instructions: PROCESS_OASIS_FORM_PROMPT,
    input: rawContent,
    stream: false,
  });

  if (!response.output_text) {
    throw new Error('No output text');
  }

  const form = { ...OASIS_FORM_SECTIONS[0] };
  form.questions = JSON.parse(response.output_text);

  return JSON.stringify(form);
};

export const processAudio = async (audio: Express.Multer.File) => {
  try {
    const rawContent = await transcribeAudio(audio);
    const processedContent = await processOasisForm(rawContent);

    return {
      rawContent,
      processedContent,
    };
  } catch (error) {
    console.error(error);
    return {
      rawContent: '',
      processedContent: '',
    };
  }
};
