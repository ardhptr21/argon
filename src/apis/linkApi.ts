import { CreateLinkSchema } from '@/validators/linkValidator';
import axios from 'axios';

export const CreateLinkApi = async (body: CreateLinkSchema) => {
  const { data } = await axios.post('/api/links', body);
  return data;
};
