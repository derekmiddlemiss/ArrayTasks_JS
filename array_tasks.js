var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat( arr2 );
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice( index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map( function(element){
			return element ** 2;
		})

	},

	sum: function (arr) {
		return arr.reduce( function( sum, element ){
			return sum += element;
		})
	},

	findDuplicates: function (arr) {
		counts = {};
		duplicates = [];

		for ( element of arr ){
			if ( counts[element] === undefined ){
				counts[element] = 1
			} else {
				counts[element] += 1
			}
		}

		for ( var key in counts ) {
			if ( counts[key] > 1 ){
				duplicates.push( key );
			}
		}
		
		return duplicates;

	},

	// removeAndClone: function (arr, valueToRemove) {
	// 	cloneRemoved = [];
	// 	arr.forEach( function( element ){
	// 		if ( element !== valueToRemove ){
	// 			cloneRemoved.push( element );
	// 		}
	// 	})
	// 	return cloneRemoved;
	// },

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter( function(element){
			return element !== valueToRemove;
		});
	},

	findIndexesOf: function (arr, itemToFind) {
		indices = [];
		index = 0;
		arr.forEach( function(element){
			if ( element === itemToFind ){
				indices.push( index );
			}
			index++;
		});
		return indices;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		sum = 0;
		arr.forEach( function(element){
			if ( element % 2 === 0 ){
				sum += element ** 2;
			}
		})
		return sum;		
	}

}

module.exports = arrayTasks
