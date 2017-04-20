import { expect, assert } from 'chai';
import { Rectangle } from './rectangle';

describe('Rectangle', () => {


    describe('#width', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the width', () => {
            expect(rectangle.width).to.equal(10);
        });

        it('can be changed', () => {
            rectangle.width = 30;
            assert.equal(rectangle.width, 30);
        });

        it('only accepts numerical values', () => {
            expect( () => {
                rectangle.width = 'foo';
            //}).to.throw(Error); o bien 
            }).to.throw(/"width" must be a number./);
            
        });

    });




    describe('#area', () => {
        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('returns the area', () => {
            //rectangle.area.should.equal(200);
            expect(rectangle.area).to.equal(200);
        });


    });

});
