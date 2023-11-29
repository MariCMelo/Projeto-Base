import supertest from 'supertest';
import httpStatus from 'http-status';
import app from '../../src/app';
import prisma from '@/database/database-connection';

const api = supertest(app);

beforeEach(async () => {
  await prisma.game.deleteMany();
});

describe('GET /health', () => {
  it('should return status 200 and ok message', async () => {
    const { status, text } = await api.get('/health');
    expect(status).toBe(httpStatus.OK);
    expect(text).toBe("I'm ok!");
  });
});
