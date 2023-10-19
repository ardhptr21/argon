import { CreateTalentSchema } from '@/validators/talentValidator';
import axios from 'axios';

interface IGetTalentsParams {
  search?: string;
  page?: number;
  limit?: number;
}

export const listTalentsApi = async (params: IGetTalentsParams) => {
  const { data } = await axios.get('/api/talents', { params });
  return data;
};

export const createTalentApi = async (body: CreateTalentSchema) => {
  const { data } = await axios.post('/api/talents', body);
  return data;
};
