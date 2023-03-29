import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
chai.use(chaiHttp);
const { expect } = chai;
import { app } from '../app';
import {teamsMock, team} from './mocks/team.mock';
import Teams from '../database/models/TeamModel';
chai.use(chaiHttp);
  
describe('Tests for team route', () => {
  it('The /teams endpoint returns all teams correctly', async () => {
      Sinon.stub(Teams, 'findAll').resolves(teamsMock as Teams[]);
      let chaiHttpResponse: Response;
      chaiHttpResponse = await chai.request(app).get('/teams');
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(teamsMock);
  });
  it('The /teams/:id endpoint return data for a specific team', async () => {
      Sinon.stub(Teams, 'findByPk').resolves(team as Teams);
      let chaiHttpResponse: Response;
      chaiHttpResponse = await chai.request(app).get('/teams/8');
      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.be.deep.equal(team);
  });
});