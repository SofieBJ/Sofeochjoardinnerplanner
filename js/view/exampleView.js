//ExampleView Object constructor
var ExampleView = function (container) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html("Hello World");
	
}
 
	<div class="container">
	<div id="exampleView">
		<div>
			Number of guests: <span id="numberOfGuests"></span>
		</div>
			<div>
          <button id="minusGuest" class="btn"><span class="glyphicon glyphicon-minus"></span></button>
				<button id="plusGuest" class="btn"><span class="glyphicon glyphicon-plus"></span></button>
			</div>
		</div>
