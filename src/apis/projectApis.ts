import { EditProjectSchema } from '@/validators/projectValidator';
import axios from 'axios';

export const editProjectApi = async ({ id, body }: { id: string; body: EditProjectSchema }) => {
  const { data } = await axios.put(`/api/projects/${id}`, body);
  return data;
};
