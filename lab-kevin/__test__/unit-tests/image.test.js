'use strict';

const Image = require('../../model/image'); 

describe('NOTE unit testing', function() {
  // this.mockItem = {subject: 'this', comment: 'that'};
  new Image({file_path: '/',file_name: 'h' })
    .then(item => this.image = item);
  it('should be an object', () => {
    console.log('image',this.image);
    expect (this.Image).toBeInstanceOf(Object);
  });
  // it('should have a uuid', () => {
  //   expect (this.image.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  // });
  // it('should have a subject', () => {
  //   expect (this.image.subject).not.toBeNull();
  // });
  // it('should have a comment', () => {
  //   expect (this.image.comment).not.toBeNull();
  // });
});