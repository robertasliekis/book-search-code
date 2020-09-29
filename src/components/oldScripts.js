var columnAmount = 4;
var dataAmountInColumn = 0;

if (dataAmount % columnAmount == 0) {
  dataAmountInColumn = dataAmount / columnAmount;
}

var containerMinHeight = booksSelectorHeight / columnAmount;
var containerSetHeight = 0;
var booksInColumn = 0;

booksSelector.forEach((book, index) => {
  if (containerMinHeight > containerSetHeight) {
    containerSetHeight = containerSetHeight + $(book).height() + 16;
    booksInColumn = index;
  }
});

$(".book-books-container").css("height", containerSetHeight);
/*
          var leftColumnHeight = containerSetHeight;
          var containerFullHeight = booksSelectorHeight;
          var count = 1;

           booksSelector.forEach((book) => {
            if (leftColumnHeight > $(book).height() && count < columnAmount) {
              leftColumnHeight = leftColumnHeight - $(book).height();
            } else {
              containerFullHeight = containerFullHeight - containerMinHeight;
              leftColumnHeight = containerMinHeight;
              count++;
            }
            if (containerFullHeight < 0) {
              $(".book-books-container").css("height", containerSetHeight + $(booksSelector[booksInColumn]).height());
            }
          });*/
