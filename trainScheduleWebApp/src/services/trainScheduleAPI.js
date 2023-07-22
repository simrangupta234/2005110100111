// src/services/trainScheduleAPI.js
const BASE_URL = 'YOUR_API_BASE_URL';

export const getTrainSchedule = async () => {
  try {
    const response = await fetch(`${BASE_URL}/train-schedule`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching train schedule:', error);
    throw error;
  }
};
