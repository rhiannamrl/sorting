describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect(bubbleSort([]) ).toEqual( [] );
    }); 
    it('handles an array with one item', function(){
        expect(bubbleSort([3])).toEqual([3]); 
    });  
    it('handles an array with mulitple items', function(){
        expect(bubbleSort([5, 4, 8])).toEqual([4, 5, 8]); 
    }); 
  });

