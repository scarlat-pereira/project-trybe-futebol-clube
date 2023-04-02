import * as Sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
// import { Response } from 'superagent';
const { expect } = chai;
import { app } from '../app';
import {allMatchesMock, inProgressTrue, inProgressFalse} from './mocks/match.mock';
chai.use(chaiHttp)

describe('Tests for match route', () => {
  afterEach(Sinon.restore)

  it('The /matches endpoint correctly returns match data', async () => {
    chai
    .request(app)
    .get('/matches')
    .send().then((httpResponse) => {
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.be.deep.equal(allMatchesMock)
    })
  });

  it('The /matches endpoint returns matches in progress', async () => {
    chai
    .request(app)
    .get('/matches:inProgress=true')
    .send().then((httpResponse) => {
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.be.deep.equal(inProgressTrue)
    })
  });

  it(
    'The /matches endpoint returns finished matches', async () => {
      chai
      .request(app)
      .get('/matches:inProgress=false')
      .send().then((httpResponse) => {
        expect(httpResponse.status).to.equal(200)
        expect(httpResponse.body).to.be.deep.equal(inProgressFalse)
      })
    });
});

  