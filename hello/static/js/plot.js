var data;

// Parse local CSV file
Papa.parse('flightRecorder.csv', {
	complete: function(results) {
    data = results;
		console.log("Finished:", results.data);
	}
});



TESTER = document.getElementById('tester');

Plotly.plot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], {
      margin: { t: 0 }
    } );
