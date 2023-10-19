import { CreateTalentSchema } from '@/validators/talentValidator';
import axios from 'axios';

export const createTalentApi = async (body: CreateTalentSchema) => {
  const { data } = await axios.post('/api/talents', body);
  return data;
};
