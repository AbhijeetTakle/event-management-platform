deployed site: https://event-management-platform.adaptable.app

Routes

/event/:id

GET = For get the the details of a specific event add the id of the event as parameter, response include all the details of the event including the create and update timestamps.

PATCH = Updation of the event can done via the id passed as the parameter and the json object passed in body of the request with the fields need to be updated.

DELETE = You can delete an event with id specified with id paramter. this request deletes on the basis of id and deletes on one document.

/addevent

POST = For Adding a new event you need the pass the details of the event as a json object can add one event per request.

/events

GET =For getting the multiple events with specific details you need to add specific keys and values as query parameters in the above route else the request will give all the event in the database.
