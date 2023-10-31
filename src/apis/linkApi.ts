import { CreateLinkSchema } from '@/validators/linkValidator';
import axios from 'axios';

interface IGetLinksParams {
  search?: string;
  page?: number;
  limit?: number;
}

export const listLinksApi = async (params: IGetLinksParams) => {
  const { data } = await axios.get('/api/links', { params });
  return data;
};

export const createLinkApi = async (body: CreateLinkSchema) => {
  const { data } = await axios.post('/api/links', body);
  return data;
};
