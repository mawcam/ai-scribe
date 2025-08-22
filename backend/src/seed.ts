import { AppDataSource } from './data-source';
import { Patient } from './entity/patient';

export const seedPatients = async () => {
  try {
    // Get the patient repository (connection is already initialized by app.ts)
    const patientRepository = AppDataSource.getRepository(Patient);

    // Check if patients already exist
    const existingPatients = await patientRepository.find();
    if (existingPatients.length > 0) {
      console.log('Patients already exist in the database. Skipping seeding.');
      return;
    }

    // Patient data from the service (adapted to match entity structure)
    const patientsData = [
      {
        fullname: 'John Doe',
      },
      {
        fullname: 'Jane Doe',
      },
      {
        fullname: 'John Smith',
      },
      {
        fullname: 'Json Doe',
      },
    ];

    // Create and save patients
    console.log('Seeding patients...');
    for (const patientData of patientsData) {
      const patient = new Patient();
      patient.fullname = patientData.fullname;
      patient.notes = []; // Initialize with empty notes array

      await patientRepository.save(patient);
      console.log(`Created patient: ${patient.fullname}`);
    }

    console.log('Seeding completed successfully!');

    // Verify the seeding
    const allPatients = await patientRepository.find();
    console.log(`Total patients in database: ${allPatients.length}`);
  } catch (error) {
    console.error('Error during seeding:', error);
  }
};
