numberArray = [10, 20, 30, 40, 50, 60,70, 80];

		function sumArray(){
			var results = document.getElementById("results");
			var sum = 0;
			for(var i = 0; i < numberArray.length; i++){
				sum+=numberArray[i];
			}
			results.innerHTML="The sum is: " + sum;
		}
		
		function meanArray(){
			var results = document.getElementById("results");
			var sum = 0;
			for(var i = 0; i < numberArray.length; i++){
				sum+=numberArray[i];
			}
			var mean = sum / numberArray.length;
			results.innerHTML="The mean is: " + mean;
		}
		