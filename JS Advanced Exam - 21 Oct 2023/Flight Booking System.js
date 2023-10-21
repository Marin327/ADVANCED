class FlightBookingSystem {
    constructor(agencyName) {
      this.agencyName = agencyName;
      this.flights = [];
      this.bookings = [];
      this.bookingsCount = 0;
    }
  
    addFlight(flightNumber, destination, departureTime, price) {
      for (let flight of this.flights) {
        if (flight.flightNumber === flightNumber) {
          return `Flight ${flightNumber} to ${destination} is already available.`;
        }
      }
      
      this.flights.push({
        flightNumber: flightNumber,
        destination: destination,
        departureTime: departureTime,
        price: price
      });
      
      return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }
  
    bookFlight(passengerName, flightNumber) {
      for (let flight of this.flights) {
        if (flight.flightNumber === flightNumber) {
          this.bookings.push({
            passengerName: passengerName,
            flightNumber: flightNumber
          });
          this.bookingsCount++;
          return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
      }
      
      return `Flight ${flightNumber} is not available for booking.`;
    }
  
    cancelBooking(passengerName, flightNumber) {
      for (let i = 0; i < this.bookings.length; i++) {
        if (this.bookings[i].passengerName === passengerName && this.bookings[i].flightNumber === flightNumber) {
          this.bookings.splice(i, 1);
          this.bookingsCount--;
          return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
      }
      
      throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
    }
  
    showBookings(criteria) {
      if (this.bookings.length === 0) {
        throw new Error("No bookings have been made yet.");
      }
      
      if (criteria === "all") {
        let bookingsInfo = [`All bookings(${this.bookingsCount}):`];
        for (let booking of this.bookings) {
          bookingsInfo.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`);
        }
        return bookingsInfo.join("\n");
      } else if (criteria === "cheap") {
        let cheapBookings = this.bookings.filter(booking => this.getFlightPrice(booking.flightNumber) <= 100);
        if (cheapBookings.length === 0) {
          return "No cheap bookings found.";
        } else {
          let bookingsInfo = ["Cheap bookings:"];
          for (let booking of cheapBookings) {
            bookingsInfo.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`);
          }
          return bookingsInfo.join("\n");
        }
      } else if (criteria === "expensive") {
        let expensiveBookings = this.bookings.filter(booking => this.getFlightPrice(booking.flightNumber) > 100);
        if (expensiveBookings.length === 0) {
          return "No expensive bookings found.";
        } else {
          let bookingsInfo = ["Expensive bookings:"];
          for (let booking of expensiveBookings) {
            bookingsInfo.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`);
          }
          return bookingsInfo.join("\n");
        }
      } else {
        throw new Error("Invalid criteria.");
      }
    }
  
    getFlightPrice(flightNumber) {
      for (let flight of this.flights) {
        if (flight.flightNumber === flightNumber) {
          return flight.price;
        }
      }
      
      return null;
    }
  }