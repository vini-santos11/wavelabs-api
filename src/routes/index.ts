import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'WaveLabs ta começando po, relaxa ai' }));

export default routes;
