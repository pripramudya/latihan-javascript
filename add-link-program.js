/*
Objective:
The goal of this project is to build a basic social news program. Its users will be able to show a list of links and add new ones.

Functional requirements:
A link is defined by its title, its URL and its author (submitter).
If a new link URL does not start with "http://" or "https://", "http://" is automatically added to its beginning.
At launch, the program displays a start menu with the possible actions in an alert window and asks the user for his choice. Possible actions are:
  Show the list of links.
  Add a new link.
  Remove an existing link.
  Quit the program.
Showing the list of links displays the index (rank) and the properties of each link in an alert window, or a message in the absence of any link.
When adding a link, the program asks the user for the new link properties (title, URL and author). The link is then created. Subsequently, it must appear in the shown links.
When removing a link, the user is asked for the link index until it is correct. The associated link is then removed. Subsequently, it must disappear from the shown links. Removing a link is not possible if there are no existing links.
After an action is performed, the start menu is shown again. This goes on until the user chooses to quit the program.
*/

// create class of links
class Link {
  constructor(title, url, author) {
		this.title = title;
		this.url = url;
		this.author = author;
  }
	describe () {
	return `${this.title} - ${this.url}, author: ${this.author}`;
	}
}

// function add link
const addLink = () => {
	const title = prompt("Enter link's title:");
	let url = prompt("Enter link's url:");
	const author = prompt("Enter your name:");

//	 check url
	if ((url.startsWith("http://")) || (url.startsWith("https://"))) {
		url = url;
	} else {
		url = "http://" + url;
	}
	links.push(new Link(title, url, author));
}

// function remove link
const removeLink = () => {
	if (links.length === 0) alert("No link to remove")
	else {
		const number = Number(prompt(`Choose link number to remove (between 1 to ${links.length}):`));
		links.splice(number - 1, 1);
	}
}

// function show link
const showLink = () => {
	let descLinks = ""; 
	for (let i = 0; i < links.length; i++) {
		descLinks += `${i + 1}: ${links[i].describe()} \n`;
	}
	alert(descLinks);
}

// function show menu
const showMenu = () => {
let menu = Number(prompt("Choose menu:\n1: Show links\n2: Add a link\n3: Remove a link\n0 or press Enter: Quit"));
	switch (menu) {
		case 1: 
			showLink();
			break;
		case 2: 
			addLink();
			break;
		case 3: 
			removeLink();
			break;
    default:
			break;
	}
if (menu > 0) showMenu();
}

// initiate array of link
const links = [];

// show menu

showMenu();

// end of program
alert("Thank you");
