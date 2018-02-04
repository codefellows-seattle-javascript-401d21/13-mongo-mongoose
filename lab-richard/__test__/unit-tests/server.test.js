'use strict';

const server = require('../../lib/server');
require('jest');

describe('server testing', function() {
    beforeEach(server.start);
    afterEach(server.stop);

    it('Should return an err starting twice', () => {
        server.start()
            .catch(err => expect(err).toBeInstanceOf(Error));

    });

});