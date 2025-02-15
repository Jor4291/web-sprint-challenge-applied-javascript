const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const div = document.createElement('div');
  div.setAttribute('class','header');

  const span = document.createElement('span');
  span.setAttribute('class','date');
  span.textContent = date;

  const heading = document.createElement('h1');
  heading.textContent = title;

  const span2 = document.createElement('span');
  span2.setAttribute('class', 'temp');
  span.textContent = temp;

  // append to div
  div.appendChild(span)
  div.appendChild(heading)
  div.appendChild(span2)
  // add div to body
  document.body.appendChild(div)

}

const headerAppender = (selector) => {
  const bingo = document.header.querySelector('.header-container').appendChild(Header(selector));
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
  return bingo;
}

export { Header, headerAppender }
