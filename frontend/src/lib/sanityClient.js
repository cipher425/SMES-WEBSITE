import { createClient } from '@sanity/client';

export const client = createClient({
  // Replace this with your actual Project ID from your smes-backend folder!
  projectId: 'r2uolp22', 
  dataset: 'production',
  apiVersion: '2024-06-08', 
  useCdn: true, 
});