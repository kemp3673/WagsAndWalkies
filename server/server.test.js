/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const nodemailer = require("nodemailer");
const sendEmail = require("./model.js");
const request = require('supertest');
const server = require('./index');


describe ('Server', () => {
  afterEach(async () => {
    await server.close();
  });


  it('Returns 200 when GET /', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('Returns 200 when GET /gallery for client side rendering purposes', async () => {
    const response = await request(server).get('/gallery');
    expect(response.statusCode).toBe(200);
  });

  it('Returns successful when form submitted', async () => {
    // TODO - Mock the sendEmail function
    //let spy = jest.spyOn(sendEmail.sendEmail, 'sendEmail').mockImplementation(() => {return true});

    const response = await request(server)
      .post('/contact')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@test.com',
        phone: '1234567890',
        message: 'Hello World',
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: true,
        message: 'Email Sent',
      }),
    );
   //spy.mockRestore();
  });

  it('Returns error when form submitted with improper user/password', async () => {
    const response = await request(server)
      .post('/contact')
      .send({
        user: 'wrongUser@gmail.com',
        password: 'wrongPassword',
        firstName: 'Jest',
        lastName: 'Testing',
        email: 'test@test.com',
        phone: '1234567890',
        message: 'This is a test',
      });
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual(
      expect.objectContaining({
        success: false,
        message: 'Email failed to send',
      }),
    );
  });
});