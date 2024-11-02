//Task2:Fetch Tickets Using Async/Await and Handle Errors&Task3:Display Tickets Dynamically on the Page
const ticketContainer = document.getElementById('TicketList');
const errorMessage = document.getElementById('Errormessage');
async function displayTicket(UserId) {
try {
const UserIdResponse = await fetch(`https://jsonplaceholder.typicode.com/posts${UserId}`);
if (!UserIdResponse.ok) {
throw new Error('Failed to fetch userid data');
}
const userid = await UserIdResponse.json();
console.log('Userid:', userid);
const ticketIdResponse = await fetch(`https://jsonplaceholder.typicode.com/posts${UserId}`);
if (!ticketIdResponse.ok) {
throw new Error('Failed to fetch ticket data');
}
const ticketId = await ticketIdResponse.json();
console.log('ticketId:', ticketId);
orders[0].products.forEach(product => {
const listItem = document.createElement('li');
listItem.textContent = `Customer Name: ${product.userid},Issue Description: ${product.title},Details:${product.body}}`;
orderList.appendChild(listItem);
});
} catch (error) {
console.error('Error:', error.message);
} finally {
//Task4:Use finally to Ensure Cleanup
console.log('Hide result')
}
}
displayTicket(1)