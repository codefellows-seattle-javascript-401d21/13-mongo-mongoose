// 'use strict';
//
// let server = require('../lib/server');
// require('jest');
//
// describe('Server Control Tests', () => {
//   describe('Server Start When Already Running', () => {
//     it('should throw an error on attempting to run the server if it is already running', () => {
//       server.start()
//
//         .then(() => server.start())
//         .catch(err => expect(err).toBeInstanceOf(Error));
//
//
//
//       return server.stop();
//     });
//   });
//   describe('Server Close When Not Running', () => {
//     it('should throw an error on attempting to stop the server if it is not running', () => {
//       return server.stop()
//         .catch(err => expect(err).toBeInstanceOf(Error));
//
//
//     });
//   });
// });
//
// // process.env.PORT, () => console.log(`listening on ${process.env.PORT}`)
